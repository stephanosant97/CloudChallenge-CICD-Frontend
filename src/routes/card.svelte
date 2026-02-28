<script>
    import { onMount } from 'svelte';
    let visible = false;
    onMount(() => setTimeout(() => (visible = true), 100));
</script>

<div class="hero" class:visible>
    <div class="avatar-row">
        <img src="/me.png" alt="Stephano" class="avatar" />
        <span class="eyebrow">Hey there, I'm</span>
    </div>

    <h1 class="name">Stephano<br />Santos</h1>

    <p class="tagline">Aspiring DevOps Engineer —<br />building things on the cloud.</p>

    <div class="cta-row">
        <a href="/projects" class="btn-primary">View Projects</a>
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
        transform: translateY(28px);
        transition: opacity 0.9s ease, transform 0.9s ease;
    }

    .hero.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .avatar-row {
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
        border: 2px solid rgba(249, 115, 22, 0.4);
    }

    .eyebrow {
        font-size: 0.85rem;
        font-weight: 500;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #f97316;
    }

    .name {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(3.5rem, 9vw, 7.5rem);
        font-weight: 800;
        line-height: 1;
        letter-spacing: -0.03em;
        color: white;
        margin-bottom: 1.5rem;
    }

    .tagline {
        font-size: clamp(1rem, 2vw, 1.2rem);
        font-weight: 300;
        color: rgba(255, 255, 255, 0.45);
        line-height: 1.7;
        margin-bottom: 2.5rem;
    }

    .cta-row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 3rem;
    }

    .btn-primary {
        background: #f97316;
        color: white;
        padding: 0.75rem 2rem;
        border-radius: 9999px;
        font-weight: 600;
        font-size: 0.875rem;
        letter-spacing: 0.02em;
        transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
    }

    .btn-primary:hover {
        background: #ea6d09;
        transform: translateY(-2px);
        box-shadow: 0 0 30px rgba(249, 115, 22, 0.5);
    }

    .btn-ghost {
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: rgba(255, 255, 255, 0.6);
        padding: 0.75rem 2rem;
        border-radius: 9999px;
        font-weight: 600;
        font-size: 0.875rem;
        letter-spacing: 0.02em;
        transition: border-color 0.2s, color 0.2s, transform 0.2s;
    }

    .btn-ghost:hover {
        border-color: rgba(255, 255, 255, 0.4);
        color: white;
        transform: translateY(-2px);
    }

    .socials {
        display: flex;
        gap: 1.5rem;
    }

    .socials a {
        color: rgba(255, 255, 255, 0.3);
        font-size: 1.4rem;
        transition: color 0.2s, transform 0.2s;
    }

    .socials a:hover {
        color: #f97316;
        transform: translateY(-2px);
    }
</style>
