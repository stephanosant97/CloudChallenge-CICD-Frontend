<script>
    import { Video } from 'flowbite-svelte';
    import { Kbd } from 'flowbite-svelte';
    import { Card, Button, Toggle } from 'flowbite-svelte';
    let hCard = false;
  </script>

<div class="relative overflow-hidden w-screen h-screen">
    <Video src="/animation.mp4" autoplay muted loop class="object-cover w-full h-full" trackSrc="animation.mp4" />
    <div class="headingdivone absolute inset-20 z-20 border border-white border-2 p-5 bg-gray-600">
        <h1 class="heading text-xl font-bold italic">Projects
            <hr class="abouthr">  
        </h1>
        <div class="cardelement space-y-4 w-full">
            <!-- Use an <a> tag for navigation -->
            <a href="/cloudresume" class="pointer-events-none">
                <Card img="/cloudchallenge.png" size="xs" reverse={hCard} class="bg-black p-4 hover:bg-black pointer-events-auto">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white italic">Cloud Resume Challenge</h5>
                    <p class="mb-3 font-normal text-gray-300 leading-tight italic">The challenge revolves around constructing a static website on the cloud platform of choice to host a resume and incorporating a visitor counter.</p>
                    <Kbd class="px-2 py-1.5">Python</Kbd>
                    <Kbd class="px-2 py-1.5">Js</Kbd>
                    <Kbd class="px-2 py-1.5">HTML</Kbd>
                    <Kbd class="px-2 py-1.5">CSS</Kbd>
                </Card>
            </a>
        </div>
    </div>   
</div>

<style>
    .headingdivone {
        max-width: 100%; /* Adjust the value as needed */
        overflow: auto; /* Enable overflow scrolling if needed */
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

    /* Desktop padding */
    .cardelement {
        padding-top: 20px;
        padding-left: 50px;
        padding-right: 50px;
    }

    /* Mobile padding */
    @media only screen and (max-width: 767px) {
        .cardelement {
            padding-top: 10px;
            padding-left: 20px;
            padding-right: 20px;
        }
    }
</style>
