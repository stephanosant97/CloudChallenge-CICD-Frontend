<script>
    import { onMount } from 'svelte';
    let visible = false;
    onMount(() => setTimeout(() => (visible = true), 100));
</script>

<main class="page" class:visible>
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-32 pb-16">

        <div class="page-label">02 / Projects</div>
        <h1 class="page-heading">AWS<br />Honeypot.</h1>

        <p class="page-intro">
            A cloud-hosted deception environment built to capture and analyze real-world attack behavior —
            SSH brute-force attempts, port scans, and credential stuffing — all logged, parsed, and surfaced
            through a live dashboard backed by serverless AWS infrastructure.
        </p>

        <!-- Status badge -->
        <div class="status-row">
            <span class="status-dot"></span>
            <span class="status-text">Trap active · collecting live attack data</span>
        </div>
        <a href="/honeypot/dashboard" class="dashboard-cta">View Live Dashboard →</a>

        <!-- Architecture -->
        <div class="section">
            <div class="section-header">
                <div class="section-line"></div>
                <span class="section-title">Architecture</span>
                <div class="section-line"></div>
            </div>

            <div class="arch-grid">
                <div class="arch-card">
                    <div class="arch-icon">EC2</div>
                    <h3 class="arch-name">Honeypot Host</h3>
                    <p class="arch-desc">
                        AWS EC2 instance running Cowrie, a medium-interaction SSH/Telnet honeypot.
                        Exposes port 22 to the internet and emulates a real Linux shell for attackers.
                    </p>
                </div>
                <div class="arch-card">
                    <div class="arch-icon">λ</div>
                    <h3 class="arch-name">Log Ingestion</h3>
                    <p class="arch-desc">
                        Cowrie JSON logs are shipped via a Python Lambda function that parses events,
                        extracts attacker IPs, commands, and credentials, and writes records to DynamoDB.
                    </p>
                </div>
                <div class="arch-card">
                    <div class="arch-icon">DB</div>
                    <h3 class="arch-name">Storage</h3>
                    <p class="arch-desc">
                        DynamoDB stores structured attack events with timestamps, source IPs, session IDs,
                        and attempted commands. Raw logs are archived in S3 for long-term retention.
                    </p>
                </div>
                <div class="arch-card">
                    <div class="arch-icon">API</div>
                    <h3 class="arch-name">Data API</h3>
                    <p class="arch-desc">
                        API Gateway + Lambda expose a REST endpoint that the dashboard polls to fetch
                        recent attack events, top offending IPs, and session statistics.
                    </p>
                </div>
            </div>
        </div>

        <!-- What it captures -->
        <div class="section">
            <div class="section-header">
                <div class="section-line"></div>
                <span class="section-title">What Gets Captured</span>
                <div class="section-line"></div>
            </div>

            <div class="capture-list">
                <div class="capture-item">
                    <span class="capture-label">SSH Brute Force</span>
                    <p class="capture-desc">Automated credential stuffing attempts against port 22. Cowrie logs every username/password pair tried.</p>
                </div>
                <div class="capture-item">
                    <span class="capture-label">Port Scanning</span>
                    <p class="capture-desc">Reconnaissance sweeps across common ports. Security groups and logs reveal scanner tooling signatures.</p>
                </div>
                <div class="capture-item">
                    <span class="capture-label">Shell Commands</span>
                    <p class="capture-desc">When attackers believe they've gained access, every command they run inside the fake shell is recorded verbatim.</p>
                </div>
                <div class="capture-item">
                    <span class="capture-label">Malware Downloads</span>
                    <p class="capture-desc">Any files attackers attempt to pull down are captured and stored for analysis — common payloads include cryptominers and botnets.</p>
                </div>
            </div>
        </div>

        <!-- Tech stack -->
        <div class="section">
            <div class="section-header">
                <div class="section-line"></div>
                <span class="section-title">Stack</span>
                <div class="section-line"></div>
            </div>
            <div class="stack-tags">
                <span class="stack-tag">AWS EC2</span>
                <span class="stack-tag">Cowrie</span>
                <span class="stack-tag">AWS Lambda</span>
                <span class="stack-tag">API Gateway</span>
                <span class="stack-tag">DynamoDB</span>
                <span class="stack-tag">Python</span>
                <span class="stack-tag">SvelteKit</span>
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
        margin-bottom: 1rem;
    }

    .page-heading {
        font-family: 'Fraunces', serif;
        font-size: clamp(3rem, 6vw, 6rem);
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: -0.03em;
        color: white;
        margin-bottom: 2rem;
    }

    .page-intro {
        font-family: 'Outfit', sans-serif;
        font-size: 1.05rem;
        color: rgba(255,255,255,0.45);
        line-height: 1.8;
        font-weight: 300;
        max-width: 680px;
        margin-bottom: 2rem;
    }

    /* Status row */
    .status-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
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
        font-size: 0.68rem;
        letter-spacing: 0.08em;
        color: rgba(255,255,255,0.35);
        text-transform: uppercase;
    }
    .dashboard-cta {
        display: inline-flex;
        align-items: center;
        font-family: 'Space Mono', monospace;
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #f97316;
        text-decoration: none;
        border: 1px solid rgba(249,115,22,0.45);
        border-radius: 0.5rem;
        padding: 0.8rem 1.75rem;
        margin-bottom: 4rem;
        transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
    }
    .dashboard-cta:hover {
        background: rgba(249,115,22,0.07);
        border-color: rgba(249,115,22,0.75);
        box-shadow: 0 0 18px rgba(249,115,22,0.12);
    }

    /* Section */
    .section {
        margin-bottom: 4.5rem;
    }
    .section-header {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        margin-bottom: 2.5rem;
    }
    .section-line {
        flex: 1;
        height: 1px;
        background: rgba(255,255,255,0.07);
    }
    .section-title {
        font-family: 'Space Mono', monospace;
        font-size: 0.6rem;
        font-weight: 700;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.3);
        white-space: nowrap;
    }

    /* Architecture grid */
    .arch-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }
    @media (min-width: 640px) {
        .arch-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1024px) {
        .arch-grid { grid-template-columns: repeat(4, 1fr); }
    }

    .arch-card {
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 0.75rem;
        background: rgba(255,255,255,0.02);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        transition: border-color 0.3s, background 0.3s;
    }
    .arch-card:hover {
        border-color: rgba(249,115,22,0.2);
        background: rgba(249,115,22,0.02);
    }
    .arch-icon {
        font-family: 'Space Mono', monospace;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: #f97316;
        margin-bottom: 0.25rem;
    }
    .arch-name {
        font-family: 'Fraunces', serif;
        font-size: 1.05rem;
        font-weight: 700;
        color: white;
        line-height: 1.2;
    }
    .arch-desc {
        font-family: 'Outfit', sans-serif;
        font-size: 0.82rem;
        color: rgba(255,255,255,0.35);
        line-height: 1.7;
        font-weight: 300;
    }

    /* Capture list */
    .capture-list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    @media (min-width: 768px) {
        .capture-list { grid-template-columns: repeat(2, 1fr); }
    }
    .capture-item {
        border-left: 2px solid rgba(249,115,22,0.25);
        padding-left: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }
    .capture-label {
        font-family: 'Space Mono', monospace;
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #f97316;
    }
    .capture-desc {
        font-family: 'Outfit', sans-serif;
        font-size: 0.875rem;
        color: rgba(255,255,255,0.38);
        line-height: 1.7;
        font-weight: 300;
    }

    /* Stack tags */
    .stack-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
    }
    .stack-tag {
        font-family: 'Space Mono', monospace;
        font-size: 0.62rem;
        font-weight: 400;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.4);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 9999px;
        padding: 0.35rem 0.85rem;
        transition: border-color 0.2s, color 0.2s;
    }
    .stack-tag:hover {
        border-color: rgba(249,115,22,0.35);
        color: #f97316;
    }
</style>
