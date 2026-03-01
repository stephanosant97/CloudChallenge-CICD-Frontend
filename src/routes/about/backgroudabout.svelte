<script>
    import { onMount } from 'svelte';
    let visible = false;
    onMount(() => setTimeout(() => (visible = true), 100));
</script>

<main class="page" class:visible>
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-32 pb-16">

        <div class="page-label">01 / About</div>

        <div class="about-grid">
            <!-- Left: heading + accent + avatar -->
            <div class="left-col">
                <h1 class="page-heading">About<br />Me.</h1>
                <div class="accent-line"></div>
                <img src="/me.png" alt="Stephano" class="avatar" />
            </div>

            <!-- Right: content -->
            <div class="right-col">
                <div class="bio">
                    <p>
                        I'm an IT Support Specialist based out of Miami, FL.
                        Before landing here, I bounced around food & beverage, hospitality,
                        and warehouses — eventually realizing my real passion was technology.
                        That realization came a few years <em class="inline-punch">after</em> I'd already built
                        my own PC and a Proxmox home server from scratch.
                    </p>
                    <p class="aside">Whoops.</p>
                    <p>
                        These days I work in a hybrid onsite/Azure environment handling
                        Active Directory, Office 365, and end-user support. But my free time
                        belongs to something different — I'm actively working toward a
                        <em class="inline-punch">Cyber Analyst role</em>, sharpening my skills in
                        threat detection, security operations, and anything that keeps
                        the bad guys out. The certs, the labs, the late nights — all pointing
                        in that direction.
                    </p>
                    <p class="sign-off">Feel free to poke around the projects section.</p>
                </div>

                <div class="social-section">
                    <span class="social-label">Find me here</span>
                    <div class="socials">
                        <a href="https://github.com/stephanosant97" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/stephano-s-6a022ba6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
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

    .page-label {
        font-family: 'Space Mono', monospace;
        font-size: 0.65rem;
        font-weight: 400;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #f97316;
        margin-bottom: 2.5rem;
    }

    .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    @media (min-width: 768px) {
        .about-grid {
            grid-template-columns: 1fr 2fr;
            gap: 6rem;
        }
    }

    .left-col {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .page-heading {
        font-family: 'Fraunces', serif;
        font-size: clamp(3rem, 6vw, 6rem);
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: -0.03em;
        color: white;
    }

    .accent-line {
        width: 2.5rem;
        height: 2px;
        background: #f97316;
        border-radius: 9999px;
    }

    .avatar {
        width: 5rem;
        height: 5rem;
        border-radius: 9999px;
        object-fit: cover;
        border: 1px solid rgba(249, 115, 22, 0.25);
        opacity: 0.88;
    }

    .right-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2.5rem;
    }

    .bio {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .bio p {
        font-family: 'Outfit', sans-serif;
        font-size: clamp(0.95rem, 1.5vw, 1.05rem);
        color: rgba(255, 255, 255, 0.48);
        line-height: 1.85;
        font-weight: 300;
    }

    .inline-punch {
        font-family: 'Fraunces', serif;
        font-style: italic;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.75);
    }

    .sign-off {
        font-family: 'Space Mono', monospace !important;
        font-size: 0.72rem !important;
        letter-spacing: 0.08em;
        color: rgba(255, 255, 255, 0.22) !important;
        text-transform: uppercase;
    }

    .aside {
        font-family: 'Fraunces', serif !important;
        color: #f97316 !important;
        font-style: italic;
        font-weight: 400 !important;
        font-size: 1.3rem !important;
        letter-spacing: -0.01em;
    }

    .social-section {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .social-label {
        font-family: 'Space Mono', monospace;
        font-size: 0.6rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.22);
    }

    .socials {
        display: flex;
        gap: 1.5rem;
    }

    .socials a {
        color: rgba(255, 255, 255, 0.28);
        font-size: 1.4rem;
        transition: color 0.2s, transform 0.2s;
        text-decoration: none;
    }

    .socials a:hover {
        color: #f97316;
        transform: translateY(-2px);
    }
</style>
