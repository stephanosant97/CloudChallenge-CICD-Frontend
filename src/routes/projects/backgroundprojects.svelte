<script>
    import { Video } from 'flowbite-svelte';
    import { Kbd } from 'flowbite-svelte';
    import { Card, Button, Toggle } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    let video;

    onMount(() => {
        video = document.querySelector('.video-element');
        video.addEventListener('canplaythrough', () => {
            video.muted = true;
            video.play();
        });
    });

    let hCard = false;
</script>

<div class="relative overflow-hidden w-screen h-screen">
    <Video
        src="/animation.mp4"
        autoplay
        playsinline
        muted
        loop
        class="video-element object-cover w-full h-full hidden md:block"
        trackSrc="animation.mp4"
    />
    <div class="headingdiv absolute top-14 bottom-0 right-0 z-15 border border-white border-2 p-5 bg-gray-600 transform flex-border justify-end">
        <h1 class="heading text-xl font-bold italic">Projects
            <hr class="abouthr">  
        </h1>
        <div class="cardelement space-y-4 w-full">
        </div>
    </div>   
 </div>

<style>
    .headingdiv {
        max-width: 100%;
        overflow: auto;
    }

    .heading {
        padding-left: 40px;
        padding-top: 50px;
        color: white;
    }

    .abouthr {
        margin-left: 0px;
        margin-right: 0px;
    }

    .cardelement {
        padding-top: 20px;
        padding-left: 50px;
        padding-right: 50px;
    }

    @media only screen and (max-width: 767px) {
        .headingdiv {
            width: 100%; /* Make it take up full width on mobile */
            max-width: 100%;
            height: 100%; /* Adjust height as needed */
            padding: 8px; /* Add padding as needed */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
