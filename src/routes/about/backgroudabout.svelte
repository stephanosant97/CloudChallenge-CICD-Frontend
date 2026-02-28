<script>
    import { onMount } from 'svelte';
    let visible = false;
    onMount(() => setTimeout(() => (visible = true), 100));
</script>

<main class="page" class:visible>
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-32 pb-16">

        <div class="page-label">01 / About</div>

        <div class="about-grid">
            <!-- Left: heading -->
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
                        I've bounced around the food and beverage, hospitality,
                        and warehouse industries before finally realizing my passion
                        was in technology — a few years after tinkering with and
                        building my own computer and Proxmox server.
                    </p>
                    <p class="aside">Whoops.</p>
                    <p>
                        I currently work in a hybrid onsite/Azure environment.
                        Primary duties include Active Directory and Office 365
                        administration, as well as user support. During my free time
                        I practice and work on my code. I'm currently aiming for a
                        role in cloud/DevOps, with personal experience working with AWS.
                        Feel free to check out my projects section.
                    </p>
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
        font-size: 0.7rem;
        font-weight: 600;
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
            gap: 5rem;
        }
    }

    .left-col {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .page-heading {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(3rem, 6vw, 5.5rem);
        font-weight: 800;
        line-height: 1;
        letter-spacing: -0.03em;
        color: white;
    }

    .accent-line {
        width: 3rem;
        height: 3px;
        background: #f97316;
        border-radius: 9999px;
    }

    .avatar {
        width: 5rem;
        height: 5rem;
        border-radius: 9999px;
        object-fit: cover;
        border: 2px solid rgba(249, 115, 22, 0.3);
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
        font-size: clamp(0.95rem, 1.5vw, 1.05rem);
        color: rgba(255, 255, 255, 0.55);
        line-height: 1.85;
        font-weight: 300;
    }

    .aside {
        color: #f97316 !important;
        font-style: italic;
        font-weight: 400 !important;
    }

    .social-section {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .social-label {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.3);
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
