<script>
    import "../app.css";
    import Background from "./background.svelte";
    let menuOpen = false;
</script>

<Background />

<nav class="fixed w-full z-30 top-0 left-0">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex justify-between items-center">
        <a href="/" class="monogram">SS</a>

        <div class="hidden sm:flex items-center gap-10">
            <a href="/" class="nav-link">Home</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/projects" class="nav-link">Projects</a>
        </div>

        <button
            class="sm:hidden text-white/60 hover:text-white transition-colors focus:outline-none"
            on:click={() => (menuOpen = !menuOpen)}
            aria-label="Toggle menu"
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {#if menuOpen}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                {:else}
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                {/if}
            </svg>
        </button>
    </div>

    {#if menuOpen}
        <div class="sm:hidden bg-[#030712]/95 border-t border-white/5 px-6 py-5 flex flex-col gap-5">
            <a href="/" class="nav-link" on:click={() => (menuOpen = false)}>Home</a>
            <a href="/about" class="nav-link" on:click={() => (menuOpen = false)}>About</a>
            <a href="/projects" class="nav-link" on:click={() => (menuOpen = false)}>Projects</a>
        </div>
    {/if}
</nav>

<slot />

<style>
    .monogram {
        font-family: 'Poppins', sans-serif;
        font-size: 1.25rem;
        font-weight: 800;
        color: #f97316;
        letter-spacing: 0.05em;
    }

    .nav-link {
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.45);
        transition: color 0.2s;
        position: relative;
        padding-bottom: 4px;
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

    .nav-link:hover {
        color: rgba(255, 255, 255, 0.9);
    }

    .nav-link:hover::after {
        width: 100%;
    }
</style>
