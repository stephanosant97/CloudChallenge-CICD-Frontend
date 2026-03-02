<script>
    import { onMount, onDestroy } from 'svelte';
    import AttackMap from './AttackMap.svelte';

    const API_BASE = 'https://v67rvlxkx0.execute-api.us-east-2.amazonaws.com';

    let stats = null;
    let recentAttacks = [];
    let loading = true;
    let error = null;
    let refreshInterval;
    let visible = false;

    // Map state
    let seenAttackIds = new Set();
    let pings = [];
    let attackCounts = {};
    let mapLocations = [];

    async function fetchStats() {
        try {
            const [statsRes, recentRes] = await Promise.all([
                fetch(`${API_BASE}/api/honeypot/stats`),
                fetch(`${API_BASE}/api/honeypot/recent`)
            ]);
            stats = await statsRes.json();
            const freshAttacks = await recentRes.json();

            // Detect new attacks for map ping animations
            const newPings = [];
            for (const attack of freshAttacks) {
                if (!seenAttackIds.has(attack.id)) {
                    seenAttackIds.add(attack.id);
                    if (attack.lat != null && attack.lon != null) {
                        newPings.push({
                            ip: attack.src_ip,
                            lat: +attack.lat,
                            lon: +attack.lon,
                            country: attack.country,
                            city: attack.city
                        });
                    }
                }
            }
            pings = newPings;
            recentAttacks = freshAttacks;

            // Build map data from stats
            attackCounts = Object.fromEntries((stats.top_ips ?? []).map(r => [r.ip, r.count]));
            mapLocations = stats.locations ?? [];

            loading = false;
        } catch (e) {
            error = 'Failed to load attack data.';
            loading = false;
        }
    }

    function formatTime(ts) {
        const d = new Date(ts);
        const date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${date} · ${time}`;
    }

    function eventColor(type) {
        if (type.includes('failed')) return '#ef4444';
        if (type.includes('success')) return '#22c55e';
        return '#f97316';
    }

    onMount(() => {
        setTimeout(() => (visible = true), 100);
        fetchStats();
        refreshInterval = setInterval(fetchStats, 30000);
    });

    onDestroy(() => {
        clearInterval(refreshInterval);
    });
</script>

<svelte:head>
    <title>Attack Dashboard | Stephano Sant</title>
</svelte:head>

<main class="page" class:visible>
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-32 pb-16">

        <a href="/honeypot" class="back-link">← Back to Project</a>

        <div class="page-label">Honeypot / Dashboard</div>
        <h1 class="page-heading">Attack<br />Dashboard.</h1>
        <p class="page-intro">
            Real SSH attack data captured by a Cowrie honeypot on AWS EC2. Refreshes every 30 seconds.
        </p>

        <div class="status-row">
            <span class="status-dot"></span>
            <span class="status-text">Live · auto-refresh every 30s</span>
        </div>

        {#if loading}
            <div class="state-msg">Loading attack data...</div>
        {:else if error}
            <div class="state-msg error">{error}</div>
        {:else}

            <!-- Attack Map with stat overlay -->
            <div class="card map-card">
                <h2 class="card-heading map-heading">
                    Live Attack Origin Map
                    <span class="map-badge">{stats.unique_ips} active source{stats.unique_ips === 1 ? '' : 's'}</span>
                </h2>
                <div class="map-stat-wrapper">
                    <div class="stat-overlay">
                        <div class="stat-chip">
                            <div class="stat-chip-label">Total Attacks</div>
                            <div class="stat-chip-value">{stats.total_attacks.toLocaleString()}</div>
                        </div>
                        <div class="stat-chip">
                            <div class="stat-chip-label">Unique IPs</div>
                            <div class="stat-chip-value">{stats.unique_ips.toLocaleString()}</div>
                        </div>
                        <div class="stat-chip">
                            <div class="stat-chip-label">Countries</div>
                            <div class="stat-chip-value">{stats.countries.length}</div>
                        </div>
                        <div class="stat-chip">
                            <div class="stat-chip-label">Top Password</div>
                            <div class="stat-chip-value mono">{stats.top_passwords[0]?.password || '—'}</div>
                        </div>
                    </div>
                    <AttackMap locations={mapLocations} {attackCounts} {pings} />
                </div>
            </div>

            <!-- Live Feed -->
            <div class="card">
                <h2 class="card-heading feed-heading">
                    Live Attack Feed
                    <span class="pulse-dot"></span>
                </h2>
                <div class="feed">
                    {#each recentAttacks as attack}
                        <div class="feed-row">
                            <span class="feed-time">{formatTime(attack.timestamp)}</span>
                            <span class="feed-ip mono">{attack.src_ip}</span>
                            <span class="feed-country">{attack.country}</span>
                            <span class="feed-event" style="color: {eventColor(attack.event_type)}">
                                {attack.event_type.replace('cowrie.', '')}
                            </span>
                            {#if attack.username}
                                <span class="feed-creds mono">{attack.username}/{attack.password}</span>
                            {/if}
                            {#if attack.command}
                                <span class="feed-input mono">$ {attack.command}</span>
                            {/if}
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Top IPs + Top Passwords -->
            <div class="two-col">
                <div class="card">
                    <h2 class="card-heading">Top Attacking IPs</h2>
                    <table>
                        <thead>
                            <tr><th>IP Address</th><th>Attempts</th></tr>
                        </thead>
                        <tbody>
                            {#each stats.top_ips as row}
                                <tr>
                                    <td class="mono">{row.ip}</td>
                                    <td class="orange">{row.count}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>

                <div class="card">
                    <h2 class="card-heading">Top Passwords Tried</h2>
                    <table>
                        <thead>
                            <tr><th>Password</th><th>Attempts</th></tr>
                        </thead>
                        <tbody>
                            {#each stats.top_passwords as row}
                                <tr>
                                    <td class="mono">{row.password}</td>
                                    <td class="orange">{row.count}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Top Usernames + Country Breakdown -->
            <div class="two-col">
                <div class="card">
                    <h2 class="card-heading">Top Usernames Tried</h2>
                    <table>
                        <thead>
                            <tr><th>Username</th><th>Attempts</th></tr>
                        </thead>
                        <tbody>
                            {#each stats.top_usernames as row}
                                <tr>
                                    <td class="mono">{row.username}</td>
                                    <td class="orange">{row.count}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>

                <div class="card">
                    <h2 class="card-heading">Top Countries</h2>
                    <table>
                        <thead>
                            <tr><th>Country</th><th>Attacks</th></tr>
                        </thead>
                        <tbody>
                            {#each stats.countries.slice(0, 10) as row}
                                <tr>
                                    <td>{row.code}</td>
                                    <td class="orange">{row.count}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>

        {/if}
    </div>
</main>

<style>
    .page {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.9s ease, transform 0.9s ease;
    }
    .page.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .back-link {
        display: inline-block;
        font-family: 'Space Mono', monospace;
        font-size: 0.62rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.3);
        text-decoration: none;
        margin-bottom: 2rem;
        transition: color 0.2s;
    }
    .back-link:hover { color: #f97316; }

    .page-label {
        font-family: 'Space Mono', monospace;
        font-size: 0.65rem;
        font-weight: 400;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #f97316;
        margin-bottom: 1rem;
    }

    .page-heading {
        font-family: 'Fraunces', serif;
        font-size: clamp(3rem, 6vw, 5rem);
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: -0.03em;
        color: white;
        margin-bottom: 1.5rem;
    }

    .page-intro {
        font-family: 'Outfit', sans-serif;
        font-size: 1rem;
        color: rgba(255,255,255,0.4);
        line-height: 1.75;
        font-weight: 300;
        max-width: 580px;
        margin-bottom: 1.75rem;
    }

    /* Status */
    .status-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 3rem;
    }
    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #22c55e;
        box-shadow: 0 0 8px #22c55e;
        animation: pulse-green 2s ease-in-out infinite;
        flex-shrink: 0;
    }
    @keyframes pulse-green {
        0%, 100% { box-shadow: 0 0 6px #22c55e; }
        50% { box-shadow: 0 0 14px #22c55e, 0 0 24px rgba(34,197,94,0.3); }
    }
    .status-text {
        font-family: 'Space Mono', monospace;
        font-size: 0.65rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.3);
    }

    /* State messages */
    .state-msg {
        font-family: 'Outfit', sans-serif;
        font-size: 1rem;
        color: rgba(255,255,255,0.3);
        text-align: center;
        padding: 5rem 0;
    }
    .state-msg.error { color: #ef4444; }

    /* Stat overlay on map */
    .map-stat-wrapper {
        position: relative;
    }
    .stat-overlay {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;
        background: rgba(3,7,18,0.78);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-bottom: 1px solid rgba(255,255,255,0.07);
        border-radius: 0.5rem 0.5rem 0 0;
        padding: 0.75rem 1.25rem;
    }
    .stat-chip {
        padding: 0.25rem 0.75rem;
        border-right: 1px solid rgba(255,255,255,0.06);
    }
    .stat-chip:first-child { padding-left: 0; }
    .stat-chip:last-child { border-right: none; }
    .stat-chip-label {
        font-family: 'Space Mono', monospace;
        font-size: 0.5rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.25);
        margin-bottom: 0.2rem;
    }
    .stat-chip-value {
        font-family: 'Fraunces', serif;
        font-size: 1.35rem;
        font-weight: 700;
        color: #f97316;
        line-height: 1;
    }
    .stat-chip-value.mono {
        font-family: 'Space Mono', monospace;
        font-size: 0.7rem;
        word-break: break-all;
        padding-top: 0.25rem;
        display: block;
    }
    @media (max-width: 640px) {
        .stat-overlay { grid-template-columns: repeat(2, 1fr); }
        .stat-chip:nth-child(2) { border-right: none; }
    }

    /* Cards */
    .card {
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 0.875rem;
        padding: 1.75rem;
        margin-bottom: 1.5rem;
    }
    .card-heading {
        font-family: 'Fraunces', serif;
        font-size: 1.1rem;
        font-weight: 700;
        color: white;
        margin-bottom: 1.25rem;
    }
    .feed-heading {
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    /* Two column layout */
    .two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }
    @media (max-width: 768px) {
        .two-col { grid-template-columns: 1fr; }
    }

    /* Tables */
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th {
        text-align: left;
        font-family: 'Space Mono', monospace;
        font-size: 0.58rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.25);
        padding-bottom: 0.6rem;
        border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    td {
        font-family: 'Outfit', sans-serif;
        font-size: 0.875rem;
        color: rgba(255,255,255,0.6);
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .mono { font-family: 'Space Mono', monospace; font-size: 0.78rem; }
    .orange { color: #f97316; font-weight: 600; }

    /* Live feed */
    .feed {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        max-height: 400px;
        overflow-y: auto;
    }
    .feed-row {
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: 0.3rem 0;
        border-bottom: 1px solid rgba(255,255,255,0.04);
        flex-wrap: wrap;
        font-size: 0.8rem;
    }
    .feed-time    { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.2); min-width: 130px; }
    .feed-ip      { font-family: 'Space Mono', monospace; font-size: 0.72rem; color: rgba(255,255,255,0.6); min-width: 130px; }
    .feed-country { font-family: 'Outfit', sans-serif; color: rgba(255,255,255,0.3); min-width: 100px; }
    .feed-creds   { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.2); }
    .feed-input   { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: rgba(249,115,22,0.55); max-width: 340px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    /* Map card */
    .map-card { margin-bottom: 1.5rem; }
    .map-heading {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        margin-bottom: 0.875rem;
    }
    .map-badge {
        font-family: 'Space Mono', monospace;
        font-size: 0.58rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: rgba(249,115,22,0.6);
        font-weight: 400;
    }

    /* Pulse dot in feed heading */
    .pulse-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #22c55e;
        animation: blink 1.5s ease-in-out infinite;
        display: inline-block;
    }
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.2; }
    }
</style>
