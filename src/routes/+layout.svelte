<script>
    import "../app.css";
    import Background from "./background.svelte";
    import { onMount } from 'svelte';

    let menuOpen = false;
    let scrolled = false;

    // Custom cursor refs
    let dot, ring;
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let hovering = false;

    onMount(() => {
        // Scroll-aware nav
        const onScroll = () => { scrolled = window.scrollY > 40; };
        window.addEventListener('scroll', onScroll, { passive: true });

        // Custom cursor — track mouse
        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.opacity  = '1';
            ring.style.opacity = '1';
            dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
        };

        const onLeave = () => {
            dot.style.opacity  = '0';
            ring.style.opacity = '0';
        };

        // Grow ring on interactive elements
        const onEnterInteractive = () => { hovering = true; };
        const onLeaveInteractive = () => { hovering = false; };

        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', onEnterInteractive);
            el.addEventListener('mouseleave', onLeaveInteractive);
        });

        window.addEventListener('mousemove', onMove);
        document.addEventListener('mouseleave', onLeave);

        // Smooth ring lerp loop
        let frame;
        const lerp = (a, b, t) => a + (b - a) * t;
        const tick = () => {
            ringX = lerp(ringX, mouseX, 0.1);
            ringY = lerp(ringY, mouseY, 0.1);
            const size = hovering ? 36 : 28;
            const offset = size / 2;
            ring.style.width  = `${size}px`;
            ring.style.height = `${size}px`;
            ring.style.transform = `translate(${ringX - offset}px, ${ringY - offset}px)`;
            frame = requestAnimationFrame(tick);
        };
        tick();

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
        };
    });
</script>

<!-- Custom cursor elements -->
<div class="cursor-dot"  bind:this={dot}></div>
<div class="cursor-ring" bind:this={ring}></div>

<Background />

<nav class:scrolled>
    <div class="nav-inner">
        <a href="/" class="monogram">SS</a>

        <div class="nav-links">
            <a href="/" class="nav-link">Home</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/projects" class="nav-link">Projects</a>
        </div>

        <button
            class="hamburger"
            on:click={() => (menuOpen = !menuOpen)}
            aria-label="Toggle menu"
        >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {#if menuOpen}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                {:else}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                {/if}
            </svg>
        </button>
    </div>

    {#if menuOpen}
        <div class="mobile-menu">
            <a href="/" class="nav-link" on:click={() => (menuOpen = false)}>Home</a>
            <a href="/about" class="nav-link" on:click={() => (menuOpen = false)}>About</a>
            <a href="/projects" class="nav-link" on:click={() => (menuOpen = false)}>Projects</a>
        </div>
    {/if}
</nav>

<slot />

<style>
    /* ── Custom cursor ── */
    :global(*) { cursor: none !important; }

    .cursor-dot {
        position: fixed;
        top: 0;
        left: 0;
        width: 6px;
        height: 6px;
        background: #f97316;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        box-shadow: 0 0 8px rgba(249,115,22,0.9), 0 0 16px rgba(249,115,22,0.4);
        transition: opacity 0.2s;
        will-change: transform;
    }

    .cursor-ring {
        position: fixed;
        top: 0;
        left: 0;
        width: 28px;
        height: 28px;
        border: 1px solid rgba(249,115,22,0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
        transition: opacity 0.2s, width 0.2s ease, height 0.2s ease, border-color 0.2s;
        will-change: transform;
    }

    /* ── Nav ── */
    nav {
        position: fixed;
        width: 100%;
        z-index: 30;
        top: 0;
        left: 0;
        border-bottom: 1px solid transparent;
        transition: background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease;
    }

    nav.scrolled {
        background: rgba(3, 7, 18, 0.72);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom-color: rgba(255, 255, 255, 0.055);
    }

    .nav-inner {
        max-width: 80rem;
        margin: 0 auto;
        padding: 1.5rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (min-width: 640px) {
        .nav-inner { padding: 1.5rem 2.5rem; }
    }

    .monogram {
        font-family: 'Space Mono', monospace;
        font-size: 0.85rem;
        font-weight: 700;
        color: #f97316;
        letter-spacing: 0.06em;
        text-decoration: none;
    }

    .nav-links {
        display: none;
        align-items: center;
        gap: 2.5rem;
    }

    @media (min-width: 640px) {
        .nav-links { display: flex; }
    }

    .nav-link {
        font-family: 'Space Mono', monospace;
        font-size: 0.65rem;
        font-weight: 400;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.35);
        transition: color 0.25s;
        position: relative;
        padding-bottom: 4px;
        text-decoration: none;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: #f97316;
        transition: width 0.3s ease;
    }

    .nav-link:hover { color: rgba(255, 255, 255, 0.88); }
    .nav-link:hover::after { width: 100%; }

    .hamburger {
        display: block;
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.4);
        padding: 0;
        transition: color 0.2s;
    }

    @media (min-width: 640px) {
        .hamburger { display: none; }
    }

    .hamburger:hover { color: white; }

    .mobile-menu {
        background: rgba(3, 7, 18, 0.92);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
</style>
