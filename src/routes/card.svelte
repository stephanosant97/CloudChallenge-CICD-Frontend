<script>
    import { onMount } from 'svelte';
    let visible = false;
    let cursorOn = true;

    onMount(() => {
        setTimeout(() => (visible = true), 100);
        const blink = setInterval(() => { cursorOn = !cursorOn; }, 530);
        return () => clearInterval(blink);
    });
</script>

<div class="hero" class:visible>
    <div class="eyebrow-row">
        <img src="/me.png" alt="Stephano" class="avatar" />
        <span class="eyebrow">Hey there, I'm</span>
    </div>

    <h1 class="name">
        Stephano<br />Santos<span class="cursor" class:off={!cursorOn}>_</span>
    </h1>

    <p class="tagline">Just an IT guy<br /><em class="tagline-punch">with too many tabs open.</em></p>

    <div class="cta-row">
        <a href="/projects" class="btn-primary">
            View Projects
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </a>
        <a href="/about" class="btn-ghost">About Me</a>
    </div>

    <div class="socials">
        <a href="https://github.com/stephanosant97" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/stephano-s-6a022ba6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
        </a>
    </div>
</div>

<style>
    .hero {
        opacity: 0;
        transform: translateY(32px);
        transition: opacity 1s ease, transform 1s ease;
    }

    .hero.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .eyebrow-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
    }

    .avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 9999px;
        object-fit: cover;
        border: 1px solid rgba(249, 115, 22, 0.35);
        opacity: 0.9;
    }

    .eyebrow {
        font-family: 'Space Mono', monospace;
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #f97316;
    }

    .name {
        font-family: 'Fraunces', serif;
        font-size: clamp(4rem, 10vw, 8.5rem);
        font-weight: 900;
        line-height: 0.92;
        letter-spacing: -0.04em;
        color: white;
        margin-bottom: 1.75rem;
    }

    .cursor {
        font-family: 'Space Mono', monospace;
        color: #f97316;
        font-weight: 400;
        font-style: normal;
        opacity: 1;
        transition: opacity 0.08s;
    }

    .cursor.off {
        opacity: 0;
    }

    .tagline {
        font-family: 'Outfit', sans-serif;
        font-size: clamp(1rem, 2vw, 1.15rem);
        font-weight: 300;
        color: rgba(255, 255, 255, 0.4);
        line-height: 1.8;
        margin-bottom: 2.5rem;
        letter-spacing: 0.01em;
    }

    .tagline-punch {
        font-family: 'Fraunces', serif;
        font-style: italic;
        font-weight: 300;
        color: #f97316;
        opacity: 0.85;
    }

    .cta-row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 3rem;
    }

    .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: #f97316;
        color: white;
        padding: 0.72rem 1.75rem;
        border-radius: 9999px;
        font-family: 'Space Mono', monospace;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-decoration: none;
        transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 0 24px rgba(249, 115, 22, 0.35);
    }

    .btn-primary:hover {
        background: #ea6d09;
        transform: translateY(-2px);
        box-shadow: 0 0 40px rgba(249, 115, 22, 0.55);
    }

    .btn-primary svg {
        transition: transform 0.2s;
        flex-shrink: 0;
    }

    .btn-primary:hover svg {
        transform: translateX(3px);
    }

    .btn-ghost {
        display: inline-flex;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: rgba(255, 255, 255, 0.45);
        padding: 0.72rem 1.75rem;
        border-radius: 9999px;
        font-family: 'Space Mono', monospace;
        font-size: 0.68rem;
        font-weight: 400;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-decoration: none;
        transition: border-color 0.25s, color 0.25s, transform 0.2s;
    }

    .btn-ghost:hover {
        border-color: rgba(255, 255, 255, 0.35);
        color: white;
        transform: translateY(-2px);
    }

    .socials {
        display: flex;
        gap: 1.5rem;
    }

    .socials a {
        color: rgba(255, 255, 255, 0.22);
        font-size: 1.35rem;
        transition: color 0.2s, transform 0.2s;
        text-decoration: none;
    }

    .socials a:hover {
        color: #f97316;
        transform: translateY(-3px);
    }
</style>
