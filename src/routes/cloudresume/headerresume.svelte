<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte';
  
  </script>
  
  
  
  

  <div class="relative px-8">
    <Navbar color="form" class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 bg-transparent flex justify-between items-center" style="border-bottom-width: 2px; border-bottom-color: #ccc;">
        <NavBrand>
            <img src="/me.png" href="/" class="me-3 h-6 sm:h-9" alt="me emoji" />
            <span class="self-center whitespace-nowrap text-xl text-orange-400 font-bold"></span>
        </NavBrand>
        <div class="flex space-x-4">
            <a href="/" class="text-orange-400 text-lg font-bold bg-transparent">Home</a>
            <a href="/about" class="text-orange-400 text-lg font-bold bg-transparent">About</a>
            <a href="/projects" class="text-orange-400 text-lg font-bold bg-transparent sm:pr-4">Projects</a>
        </div>
    </Navbar>
  </div>