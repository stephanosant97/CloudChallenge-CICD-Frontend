<script>
  import { Video } from 'flowbite-svelte';
  import { onMount } from 'svelte';

  let video;

  onMount(() => {
    video = document.querySelector('.video-element');
    video.addEventListener('canplaythrough', () => {
      video.muted = true;
      video.play();
    });
  });
</script>

<div class="w-screen h-screen">
  <Video
    src="/animation.mp4"
    autoplay
    playsinline
    muted
    loop
    class="video-element object-cover w-full h-full"
    trackSrc="animation.mp4"
  />
</div>
