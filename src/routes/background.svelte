<script>
    import { onMount } from 'svelte';

    let canvas;

    onMount(() => {
        const ctx = canvas.getContext('2d');
        let W = (canvas.width  = window.innerWidth);
        let H = (canvas.height = window.innerHeight);

        const COUNT      = 85;
        const MAX_DIST   = 145;
        const SPEED      = 0.28;
        const HOT_CHANCE = 0.14; // ~14% of nodes glow orange

        const nodes = Array.from({ length: COUNT }, () => ({
            x:      Math.random() * W,
            y:      Math.random() * H,
            vx:     (Math.random() - 0.5) * SPEED,
            vy:     (Math.random() - 0.5) * SPEED,
            r:      Math.random() * 1.4 + 0.5,
            hot:    Math.random() < HOT_CHANCE,
            pulse:  Math.random() * Math.PI * 2   // phase offset for pulse
        }));

        const onResize = () => {
            W = canvas.width  = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', onResize);

        let frame;
        let t = 0;

        const tick = () => {
            ctx.clearRect(0, 0, W, H);
            t += 0.012;

            // Move nodes
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > W) { n.vx *= -1; n.x = Math.max(0, Math.min(W, n.x)); }
                if (n.y < 0 || n.y > H) { n.vy *= -1; n.y = Math.max(0, Math.min(H, n.y)); }
            }

            // Draw edges
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i], b = nodes[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist >= MAX_DIST) continue;

                    const proximity = 1 - dist / MAX_DIST;
                    const isHot = a.hot || b.hot;
                    const alpha = proximity * (isHot ? 0.22 : 0.1);

                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = isHot
                        ? `rgba(249,115,22,${alpha})`
                        : `rgba(148,163,184,${alpha})`;
                    ctx.lineWidth = proximity * 0.8;
                    ctx.stroke();
                }
            }

            // Draw nodes
            for (const n of nodes) {
                const pulseScale = n.hot ? 1 + 0.18 * Math.sin(t * 2.2 + n.pulse) : 1;
                const r = n.r * pulseScale;

                if (n.hot) {
                    // Glow ring
                    const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5);
                    glow.addColorStop(0,   'rgba(249,115,22,0.25)');
                    glow.addColorStop(1,   'rgba(249,115,22,0)');
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
                    ctx.fillStyle = glow;
                    ctx.fill();

                    // Core dot
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(249,115,22,0.9)';
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(148,163,184,0.4)';
                    ctx.fill();
                }
            }

            frame = requestAnimationFrame(tick);
        };

        tick();

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', onResize);
        };
    });
</script>

<div class="fixed inset-0 bg-[#030712] overflow-hidden -z-10">
    <!-- Aurora blobs sit behind the constellation -->
    <div class="blob blob-orange"></div>
    <div class="blob blob-purple"></div>
    <div class="blob blob-blue"></div>

    <!-- Constellation canvas -->
    <canvas bind:this={canvas} class="constellation"></canvas>

    <!-- Texture + vignette on top -->
    <div class="grain"></div>
    <div class="vignette"></div>
</div>

<style>
    .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(110px);
        opacity: 0.22;
        will-change: transform;
    }

    .blob-orange {
        width: 780px;
        height: 780px;
        background: radial-gradient(circle, #f97316, #ea580c 35%, transparent 70%);
        top: -280px;
        left: -220px;
        animation: drift1 16s ease-in-out infinite;
    }

    .blob-purple {
        width: 640px;
        height: 640px;
        background: radial-gradient(circle, #7c3aed, #6d28d9 35%, transparent 70%);
        bottom: -220px;
        right: -160px;
        animation: drift2 20s ease-in-out infinite;
    }

    .blob-blue {
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, #0ea5e9, #0284c7 35%, transparent 70%);
        top: 45%;
        left: 55%;
        animation: drift3 13s ease-in-out infinite;
    }

    .constellation {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .grain {
        position: absolute;
        inset: -50%;
        width: 200%;
        height: 200%;
        opacity: 0.035;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 300px 300px;
        animation: grain 7s steps(10) infinite;
        pointer-events: none;
    }

    .vignette {
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(3,7,18,0.7) 100%);
        pointer-events: none;
    }

    @keyframes grain {
        0%   { transform: translate(0,0); }
        10%  { transform: translate(-2%,-3%); }
        20%  { transform: translate(3%,1%); }
        30%  { transform: translate(-1%,4%); }
        40%  { transform: translate(2%,-2%); }
        50%  { transform: translate(-3%,2%); }
        60%  { transform: translate(1%,-4%); }
        70%  { transform: translate(3%,3%); }
        80%  { transform: translate(-2%,1%); }
        90%  { transform: translate(1%,-1%); }
        100% { transform: translate(0,0); }
    }

    @keyframes drift1 {
        0%, 100% { transform: translate(0,0) scale(1); }
        33%       { transform: translate(130px,90px) scale(1.12); }
        66%       { transform: translate(-70px,170px) scale(0.93); }
    }

    @keyframes drift2 {
        0%, 100% { transform: translate(0,0) scale(1); }
        33%       { transform: translate(-110px,-90px) scale(1.18); }
        66%       { transform: translate(90px,-130px) scale(0.88); }
    }

    @keyframes drift3 {
        0%, 100% { transform: translate(-50%,-50%) scale(1); }
        50%       { transform: translate(-50%,-50%) scale(1.45); }
    }
</style>
