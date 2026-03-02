<script>
    import { onMount, onDestroy } from 'svelte';

    export let locations = [];
    export let attackCounts = {};
    export let pings = [];
    export let targetLat = 40.4;
    export let targetLon = -82.9;

    const W = 960;
    const H = 500;
    const DOT_MIN_R = 3;
    const DOT_MAX_R = 13;
    const PING_DURATION_MS = 2400;

    let canvas;
    let worldReady = false;
    let mapError = false;
    let projection = null;
    let activePings = [];
    let pingIdCounter = 0;
    let tooltip = { visible: false, x: 0, y: 0, ip: '', country: '', city: '' };
    let timeouts = [];

    onMount(async () => {
        try {
            const [d3geo, topo] = await Promise.all([
                import('d3-geo'),
                import('topojson-client')
            ]);

            const topoRes = await fetch(
                'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
            );
            const topology = await topoRes.json();

            projection = d3geo.geoNaturalEarth1()
                .scale(153)
                .translate([W / 2, H / 2]);

            const ctx = canvas.getContext('2d');

            // Draw static map to canvas ONCE — pure bitmap after this, zero DOM cost
            const pathCanvas = d3geo.geoPath(projection, ctx);

            // Land fill
            ctx.beginPath();
            pathCanvas(topo.feature(topology, topology.objects.land));
            ctx.fillStyle = 'rgba(255,255,255,0.06)';
            ctx.fill();

            // Country borders
            ctx.beginPath();
            pathCanvas(topo.mesh(topology, topology.objects.countries, (a, b) => a !== b));
            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
            ctx.lineWidth = 0.5;
            ctx.stroke();

            worldReady = true;
        } catch (e) {
            mapError = true;
        }
    });

    onDestroy(() => {
        timeouts.forEach(t => clearTimeout(t));
    });

    // Project attack dots — only a handful of elements in the SVG overlay
    $: attackDots = worldReady && projection
        ? locations.map(loc => {
            const p = projection([+loc.lon, +loc.lat]);
            if (!p) return null;
            return { cx: p[0], cy: p[1], ip: loc.ip, country: loc.country, city: loc.city,
                     count: attackCounts[loc.ip] ?? 1 };
          }).filter(Boolean)
        : [];

    $: maxCount = attackDots.length ? Math.max(...attackDots.map(d => d.count)) : 1;

    function r(count) {
        return DOT_MIN_R + ((count / maxCount) * (DOT_MAX_R - DOT_MIN_R));
    }

    $: targetDot = worldReady && projection
        ? (() => { const p = projection([targetLon, targetLat]); return p ? { cx: p[0], cy: p[1] } : null; })()
        : null;

    // Ping rings — max 1 per refresh cycle, most recent attack only
    $: if (worldReady && projection && pings.length > 0) {
        const ping = pings[0];
        const p = projection([+ping.lon, +ping.lat]);
        if (p) {
            const id = ++pingIdCounter;
            activePings = [...activePings, { id, cx: p[0], cy: p[1], ip: ping.ip, country: ping.country, city: ping.city }];
            const t = setTimeout(() => { activePings = activePings.filter(x => x.id !== id); }, PING_DURATION_MS);
            timeouts.push(t);
        }
    }

    function showTooltip(e, dot) {
        const svgRect = e.currentTarget.closest('svg').getBoundingClientRect();
        tooltip = { visible: true, x: e.clientX - svgRect.left + 12, y: e.clientY - svgRect.top - 36,
                    ip: dot.ip, country: dot.country, city: dot.city };
    }

    function hideTooltip() { tooltip = { ...tooltip, visible: false }; }
</script>

<div class="map-wrap">
    {#if mapError}
        <div class="map-fallback">Map unavailable</div>
    {:else}
        <!-- Static map rendered to canvas once — no DOM nodes, no repaint cost -->
        <canvas bind:this={canvas} width={W} height={H} class="map-canvas"></canvas>

        <!-- Tiny SVG overlay — only dots + pings, not the map geometry -->
        {#if worldReady}
            <svg viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid meet" class="map-overlay" aria-hidden="true">

                <!-- Ping rings -->
                {#each activePings as ping (ping.id)}
                    <circle cx={ping.cx} cy={ping.cy} r="4" fill="none" stroke="#f97316" stroke-width="2" class="ping-ring" />
                {/each}

                <!-- Attack dots -->
                {#each attackDots as dot (dot.ip)}
                    <circle
                        cx={dot.cx} cy={dot.cy} r={r(dot.count)}
                        fill="rgba(249,115,22,0.85)" stroke="rgba(249,115,22,0.3)" stroke-width="1.5"
                        class="attack-dot"
                        on:mouseenter={(e) => showTooltip(e, dot)}
                        on:mouseleave={hideTooltip}
                    />
                {/each}

                <!-- Honeypot target -->
                {#if targetDot}
                    <circle cx={targetDot.cx} cy={targetDot.cy} r="11" fill="none"
                        stroke="rgba(34,197,94,0.2)" stroke-width="1" stroke-dasharray="3 3" />
                    <circle cx={targetDot.cx} cy={targetDot.cy} r="5" fill="#22c55e"
                        stroke="rgba(34,197,94,0.45)" stroke-width="2.5" class="target-dot" />
                {/if}
            </svg>

            <!-- Tooltip -->
            {#if tooltip.visible}
                <div class="map-tooltip" style="left:{tooltip.x}px; top:{tooltip.y}px">
                    <div class="tt-ip">{tooltip.ip}</div>
                    <div class="tt-meta">{tooltip.city} · {tooltip.country}</div>
                </div>
            {/if}

            <!-- Legend -->
            <div class="map-legend">
                <span class="legend-item"><span class="ldot orange"></span>Attacker</span>
                <span class="legend-item"><span class="ldot green"></span>Honeypot</span>
                <span class="legend-item"><span class="lring"></span>Live hit</span>
            </div>
        {:else}
            <div class="map-fallback">Loading map...</div>
        {/if}
    {/if}
</div>

<style>
    .map-wrap {
        position: relative;
        width: 100%;
        aspect-ratio: 960 / 500;
        background: #030712;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .map-canvas {
        width: 100%;
        height: 100%;
        display: block;
    }

    /* SVG overlay sits exactly on top of canvas */
    .map-overlay {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }

    .attack-dot { cursor: pointer; }
    .attack-dot:hover { opacity: 0.7; }

    .target-dot {
        animation: tpulse 2.5s ease-in-out infinite;
    }
    @keyframes tpulse {
        0%, 100% { opacity: 0.85; }
        50% { opacity: 1; }
    }

    .ping-ring {
        animation: ping-expand 2.4s ease-out forwards;
    }
    @keyframes ping-expand {
        0%   { r: 3;  opacity: 0.8; stroke-width: 1.5; }
        60%  { r: 10; opacity: 0.3; stroke-width: 1; }
        100% { r: 15; opacity: 0;   stroke-width: 0.5; }
    }

    .map-tooltip {
        position: absolute;
        pointer-events: none;
        background: rgba(3,7,18,0.94);
        border: 1px solid rgba(249,115,22,0.3);
        border-radius: 0.45rem;
        padding: 0.45rem 0.7rem;
        white-space: nowrap;
        z-index: 20;
    }
    .tt-ip   { font-family: 'Space Mono', monospace; font-size: 0.68rem; color: #f97316; margin-bottom: 0.1rem; }
    .tt-meta { font-family: 'Outfit', sans-serif; font-size: 0.65rem; color: rgba(255,255,255,0.38); }

    .map-legend {
        position: absolute;
        bottom: 0.75rem;
        right: 0.875rem;
        display: flex;
        gap: 0.875rem;
        align-items: center;
    }
    .legend-item {
        font-family: 'Space Mono', monospace;
        font-size: 0.55rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.25);
        display: flex;
        align-items: center;
        gap: 0.35rem;
    }
    .ldot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
    .ldot.orange { background: rgba(249,115,22,0.85); }
    .ldot.green  { background: #22c55e; }
    .lring { width: 9px; height: 9px; border-radius: 50%; border: 1.5px solid rgba(249,115,22,0.7); flex-shrink: 0; }

    .map-fallback {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Space Mono', monospace;
        font-size: 0.62rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.18);
    }
</style>
