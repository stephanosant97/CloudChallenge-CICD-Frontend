<div class="fixed inset-0 bg-[#030712] overflow-hidden -z-10">
    <div class="blob blob-orange"></div>
    <div class="blob blob-purple"></div>
    <div class="blob blob-blue"></div>
    <div class="grid-overlay"></div>
</div>

<style>
    .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(90px);
        opacity: 0.35;
        will-change: transform;
    }

    .blob-orange {
        width: 700px;
        height: 700px;
        background: radial-gradient(circle, #f97316, transparent 70%);
        top: -250px;
        left: -200px;
        animation: drift1 14s ease-in-out infinite;
    }

    .blob-purple {
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, #7c3aed, transparent 70%);
        bottom: -200px;
        right: -150px;
        animation: drift2 18s ease-in-out infinite;
    }

    .blob-blue {
        width: 450px;
        height: 450px;
        background: radial-gradient(circle, #0ea5e9, transparent 70%);
        top: 45%;
        left: 55%;
        animation: drift3 11s ease-in-out infinite;
    }

    .grid-overlay {
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
        background-size: 60px 60px;
    }

    @keyframes drift1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33%       { transform: translate(120px, 80px) scale(1.1); }
        66%       { transform: translate(-60px, 160px) scale(0.95); }
    }

    @keyframes drift2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33%       { transform: translate(-100px, -80px) scale(1.15); }
        66%       { transform: translate(80px, -120px) scale(0.9); }
    }

    @keyframes drift3 {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50%       { transform: translate(-50%, -50%) scale(1.4); }
    }
</style>
