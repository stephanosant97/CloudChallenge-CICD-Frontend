<script>
    import { onMount } from 'svelte';
    let visible = false;
    onMount(() => setTimeout(() => (visible = true), 100));
</script>

<main class="page" class:visible>
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-32 pb-16">

        <div class="page-label">02 / Projects</div>
        <h1 class="page-heading">Projects.</h1>

        <div class="projects-grid">
            <a href="/cloudresume" class="project-card">
                <div class="card-image">
                    <img src="/cloudchallenge.png" alt="Cloud Resume Challenge" />
                    <span class="card-number">001</span>
                </div>
                <div class="card-body">
                    <h2 class="card-title">Cloud Resume Challenge</h2>
                    <p class="card-desc">
                        A static website hosted on the cloud to display a resume,
                        complete with a serverless visitor counter backed by AWS Lambda,
                        DynamoDB, and API Gateway.
                    </p>
                    <div class="card-footer">
                        <div class="tags">
                            <span class="tag">Python</span>
                            <span class="tag">JavaScript</span>
                            <span class="tag">HTML</span>
                            <span class="tag">CSS</span>
                        </div>
                        <div class="card-cta">
                            View <span class="arrow">→</span>
                        </div>
                    </div>
                </div>
            </a>
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
        margin-bottom: 1rem;
    }

    .page-heading {
        font-family: 'Fraunces', serif;
        font-size: clamp(3rem, 6vw, 6rem);
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: -0.03em;
        color: white;
        margin-bottom: 3.5rem;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    @media (min-width: 768px) {
        .projects-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .project-card {
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 0.875rem;
        background: rgba(255, 255, 255, 0.02);
        overflow: hidden;
        text-decoration: none;
        transition: border-color 0.35s, background 0.35s, transform 0.35s, box-shadow 0.35s;
        cursor: pointer;
    }

    .project-card:hover {
        border-color: rgba(249, 115, 22, 0.25);
        background: rgba(249, 115, 22, 0.03);
        transform: translateY(-5px);
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(249, 115, 22, 0.08);
    }

    .card-image {
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background: rgba(255,255,255,0.02);
        position: relative;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.72;
        transition: opacity 0.35s, transform 0.5s;
    }

    .project-card:hover .card-image img {
        opacity: 0.9;
        transform: scale(1.04);
    }

    /* Number badge overlaid on image */
    .card-number {
        position: absolute;
        top: 0.875rem;
        right: 0.875rem;
        font-family: 'Space Mono', monospace;
        font-size: 0.6rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        color: rgba(255, 255, 255, 0.55);
        background: rgba(3, 7, 18, 0.65);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        padding: 0.28rem 0.6rem;
        border-radius: 9999px;
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .card-body {
        padding: 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
        flex: 1;
    }

    .card-title {
        font-family: 'Fraunces', serif;
        font-size: 1.4rem;
        font-weight: 800;
        color: white;
        line-height: 1.15;
        letter-spacing: -0.02em;
    }

    .card-desc {
        font-family: 'Outfit', sans-serif;
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.38);
        line-height: 1.75;
        font-weight: 300;
        flex: 1;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 1rem;
        margin-top: 0.25rem;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
    }

    .tag {
        font-family: 'Space Mono', monospace;
        font-size: 0.58rem;
        font-weight: 400;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 9999px;
        padding: 0.2rem 0.6rem;
    }

    .card-cta {
        font-family: 'Space Mono', monospace;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        color: #f97316;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }

    .arrow {
        display: inline-block;
        transition: transform 0.2s;
    }

    .project-card:hover .arrow {
        transform: translateX(5px);
    }
</style>
