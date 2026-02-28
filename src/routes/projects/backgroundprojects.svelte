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
                </div>
                <div class="card-body">
                    <div class="card-number">001</div>
                    <h2 class="card-title">Cloud Resume Challenge</h2>
                    <p class="card-desc">
                        A static website hosted on the cloud to display a resume,
                        complete with a serverless visitor counter backed by AWS Lambda,
                        DynamoDB, and API Gateway.
                    </p>
                    <div class="tags">
                        <span class="tag">Python</span>
                        <span class="tag">JavaScript</span>
                        <span class="tag">HTML</span>
                        <span class="tag">CSS</span>
                    </div>
                    <div class="card-cta">
                        View Project <span class="arrow">→</span>
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
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #f97316;
        margin-bottom: 1rem;
    }

    .page-heading {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(3rem, 6vw, 5.5rem);
        font-weight: 800;
        line-height: 1;
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
        border: 1px solid rgba(255, 255, 255, 0.07);
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.03);
        overflow: hidden;
        transition: border-color 0.3s, background 0.3s, transform 0.3s;
        cursor: pointer;
    }

    .project-card:hover {
        border-color: rgba(249, 115, 22, 0.3);
        background: rgba(249, 115, 22, 0.04);
        transform: translateY(-4px);
    }

    .card-image {
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background: rgba(255,255,255,0.03);
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        transition: opacity 0.3s, transform 0.3s;
    }

    .project-card:hover .card-image img {
        opacity: 1;
        transform: scale(1.03);
    }

    .card-body {
        padding: 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        flex: 1;
    }

    .card-number {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.2em;
        color: #f97316;
    }

    .card-title {
        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
        font-weight: 700;
        color: white;
        line-height: 1.2;
    }

    .card-desc {
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.45);
        line-height: 1.75;
        font-weight: 300;
        flex: 1;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.25rem;
    }

    .tag {
        font-size: 0.65rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 9999px;
        padding: 0.2rem 0.65rem;
    }

    .card-cta {
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: #f97316;
        margin-top: 0.5rem;
        transition: gap 0.2s;
    }

    .arrow {
        display: inline-block;
        transition: transform 0.2s;
    }

    .project-card:hover .arrow {
        transform: translateX(4px);
    }
</style>
