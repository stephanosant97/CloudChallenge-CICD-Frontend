<script>
    import { Video } from 'flowbite-svelte';
  </script>


<div class="w-screen h-screen">
  <Video src="/animation.mp4" autoplay playsinline muted loop class="object-cover w-full h-full" trackSrc="animation.mp4" />
  <script>
    var video = document.currentScript.parentElement;
    video.volume = 0;
    </script>
</div>