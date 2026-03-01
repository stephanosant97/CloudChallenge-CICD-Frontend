<script>
    import { onMount } from 'svelte';
    import Visitorcounter from './visitorcounter.svelte';
    let visible = false;
    onMount(() => setTimeout(() => (visible = true), 100));
</script>

<main class="page" class:visible>
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-32 pb-16">

        <div class="top-row">
            <div>
                <div class="page-label">03 / Resume</div>
                <h1 class="page-heading">Cloud<br />Resume.</h1>
            </div>
            <div class="visitor-badge">
                <span class="visitor-label">Visitors</span>
                <span class="visitor-count"><Visitorcounter /></span>
            </div>
        </div>

        <!-- Experience -->
        <div class="section">
            <div class="section-header">
                <div class="section-line"></div>
                <span class="section-title">Experience</span>
                <div class="section-line"></div>
            </div>

            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-meta">Fontainebleau Development · Oct 2023 – Current</div>
                        <h3 class="timeline-role">IT Support Specialist</h3>
                        <ul class="timeline-list">
                            <li>Manage and monitor SentinelOne EDR for 286 endpoints. Proactively respond to security alerts, addressing issues ranging from suspicious downloads to malicious executables, ensuring timely threat mitigation.</li>
                            <li>Actively manage and respond to Microsoft Cloud Defender alerts for 300+ users. Actions include blocking spam/phishing emails, recovering compromised accounts, and investigating alerts related to email sending limits, impossible travel, and suspicious inbox rules.</li>
                            <li>Wrote PowerShell script that automatically enables MFA for new user accounts created in Active Directory, excluding service accounts — set to run weekly autonomously.</li>
                            <li>Active Directory administration including account creation, termination, password resets, attribute editing, group management, and more.</li>
                            <li>Spearhead KnowBe4 cybersecurity training initiatives for 250+ users, enhancing online safety awareness and practices.</li>
                            <li>Monitor ProofPoint email filter for suspicious inbound and outbound emails across 300+ users.</li>
                            <li>Support helpdesk needs for multiple sites remotely and on-premises for 300+ users.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-meta">Ballyhoo Media · Feb 2023 – Oct 2023</div>
                        <h3 class="timeline-role">Junior Network Engineer</h3>
                        <ul class="timeline-list">
                            <li>Lead the creation, setup and configuration of digital signage networks to maximize overall effectiveness.</li>
                            <li>Orchestrate the configuration and facilitation of Cradlepoints routers, ensuring reliable and secure network connections.</li>
                            <li>Responsible for the setup and management of Brightsign digital signage players, optimizing content playback and user experience.</li>
                            <li>Responsible for wrapping all creatives in a JavaScript Program that allows for automated play count tracking across all assets into an AWS DynamoDB database.</li>
                            <li>Led the setup of remote troubleshooting network based off RaspberryPi computers on all assets, leading to reduced field time, better customer experience and lower ticket counts.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-meta">Amazon · Nov 2020 – Feb 2023</div>
                        <h3 class="timeline-role">Operations Supervisor</h3>
                        <ul class="timeline-list">
                            <li>Applied the cutting-edge Dynamic Stow system and led the successful introduction of the new DA assist program at DVB7, resulting in improved efficiency.</li>
                            <li>Headed the training and mentoring of newly recruited personnel, encouraging a skilled and cohesive workforce capable of fulfilling diverse responsibilities.</li>
                            <li>Spearheaded a load-out team of associates at DBV7, driving a significant increase in on-time deliveries and ensuring satisfaction as packages reached the right destination in real-time.</li>
                            <li>Piloted a brand-new delivery station, DVB7, exhibiting exceptional leadership skills in training a new LO Process Assistant to effectively manage shifts.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Certs & Skills -->
        <div class="two-col-grid">
            <div class="section">
                <div class="section-header">
                    <div class="section-line"></div>
                    <span class="section-title">Certifications</span>
                    <div class="section-line"></div>
                </div>
                <div class="badge-grid">
                    <span class="badge">Comptia Cloud+</span>
                    <span class="badge">AWS Certified Cloud Practitioner</span>
                    <span class="badge">Microsoft AZ900</span>
                    <span class="badge">LPI Linux Essentials</span>
                    <span class="badge">Comptia Security+</span>
                    <span class="badge">Comptia Network+</span>
                    <span class="badge">Comptia A+</span>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <div class="section-line"></div>
                    <span class="section-title">Skills</span>
                    <div class="section-line"></div>
                </div>
                <div class="badge-grid">
                    <span class="badge">PowerShell</span>
                    <span class="badge">Active Directory</span>
                    <span class="badge">Microsoft Defender</span>
                    <span class="badge">SentinelOne EDR</span>
                    <span class="badge">Azure</span>
                    <span class="badge">Linux</span>
                    <span class="badge">Python</span>
                    <span class="badge">CI/CD</span>
                    <span class="badge">Network Admin</span>
                    <span class="badge">HTML & CSS</span>
                </div>
            </div>
        </div>

        <!-- Education -->
        <div class="section">
            <div class="section-header">
                <div class="section-line"></div>
                <span class="section-title">Education</span>
                <div class="section-line"></div>
            </div>
            <div class="edu-row">
                <div>
                    <div class="edu-degree">BS in Information Technology</div>
                    <div class="edu-school">Western Governors University</div>
                </div>
                <div class="edu-date">Dec 2026</div>
            </div>
        </div>

        <!-- Socials -->
        <div class="section">
            <div class="section-header">
                <div class="section-line"></div>
                <span class="section-title">Socials</span>
                <div class="section-line"></div>
            </div>
            <div class="socials-row">
                <a href="https://www.linkedin.com/in/stephano-s-6a022ba6/" target="_blank" rel="noopener noreferrer" class="social-link">
                    <i class="fab fa-linkedin-in"></i> LinkedIn
                </a>
                <a href="https://github.com/stephanosant97" target="_blank" rel="noopener noreferrer" class="social-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
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

    .top-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 2rem;
        margin-bottom: 4rem;
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
    }

    .visitor-badge {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
        padding-top: 0.5rem;
    }

    .visitor-label {
        font-family: 'Space Mono', monospace;
        font-size: 0.6rem;
        font-weight: 400;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.22);
    }

    .visitor-count {
        font-family: 'Fraunces', serif;
        font-size: 2.25rem;
        font-weight: 800;
        color: #f97316;
        line-height: 1;
        letter-spacing: -0.02em;
    }

    .section {
        margin-top: 1rem;
    }

    .section-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2.5rem;
    }

    .section-line {
        flex: 1;
        height: 1px;
        background: rgba(255, 255, 255, 0.06);
    }

    .section-title {
        font-family: 'Space Mono', monospace;
        font-size: 0.6rem;
        font-weight: 400;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.22);
        white-space: nowrap;
    }

    .timeline {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 1rem 1fr;
        gap: 1.5rem;
        padding-bottom: 3rem;
        position: relative;
    }

    .timeline-item:not(:last-child) .timeline-dot::after {
        content: '';
        position: absolute;
        top: 0.5rem;
        left: 0.4rem;
        width: 1px;
        height: calc(100% - 0.5rem);
        background: rgba(255, 255, 255, 0.06);
    }

    .timeline-dot {
        width: 0.85rem;
        height: 0.85rem;
        border-radius: 9999px;
        background: #f97316;
        border: 2px solid rgba(249, 115, 22, 0.25);
        box-shadow: 0 0 12px rgba(249, 115, 22, 0.45);
        flex-shrink: 0;
        margin-top: 0.1rem;
        position: relative;
    }

    .timeline-content {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .timeline-meta {
        font-family: 'Space Mono', monospace;
        font-size: 0.62rem;
        font-weight: 400;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.22);
        text-transform: uppercase;
    }

    .timeline-role {
        font-family: 'Fraunces', serif;
        font-size: 1.15rem;
        font-weight: 700;
        color: white;
        letter-spacing: -0.01em;
        margin-top: 0.1rem;
    }

    .timeline-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-left: 0;
        list-style: none;
        max-width: 650px;
        margin-top: 0.4rem;
    }

    .timeline-list li {
        font-family: 'Outfit', sans-serif;
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.42);
        line-height: 1.75;
        font-weight: 300;
        padding-left: 1rem;
        position: relative;
    }

    .timeline-list li::before {
        content: '·';
        position: absolute;
        left: 0;
        color: #f97316;
        font-weight: 700;
    }

    .two-col-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0;
        margin-top: 1rem;
    }

    @media (min-width: 768px) {
        .two-col-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
    }

    .badge-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .badge {
        font-family: 'Space Mono', monospace;
        font-size: 0.62rem;
        font-weight: 400;
        letter-spacing: 0.04em;
        color: rgba(255, 255, 255, 0.48);
        border: 1px solid rgba(249, 115, 22, 0.2);
        background: rgba(249, 115, 22, 0.05);
        border-radius: 9999px;
        padding: 0.3rem 0.85rem;
        transition: border-color 0.2s, color 0.2s, background 0.2s;
    }

    .badge:hover {
        border-color: rgba(249, 115, 22, 0.55);
        background: rgba(249, 115, 22, 0.1);
        color: #f97316;
    }

    .edu-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .edu-degree {
        font-family: 'Fraunces', serif;
        font-size: 1.05rem;
        font-weight: 700;
        color: white;
        letter-spacing: -0.01em;
    }

    .edu-school {
        font-family: 'Outfit', sans-serif;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.3);
        margin-top: 0.2rem;
        font-weight: 300;
    }

    .edu-date {
        font-family: 'Space Mono', monospace;
        font-size: 0.65rem;
        font-weight: 400;
        letter-spacing: 0.1em;
        color: #f97316;
        text-transform: uppercase;
        padding-top: 0.2rem;
    }

    .socials-row {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    .social-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'Space Mono', monospace;
        font-size: 0.72rem;
        font-weight: 400;
        letter-spacing: 0.06em;
        color: rgba(255, 255, 255, 0.32);
        text-decoration: none;
        transition: color 0.2s, transform 0.2s;
    }

    .social-link:hover {
        color: #f97316;
        transform: translateY(-2px);
    }
</style>
