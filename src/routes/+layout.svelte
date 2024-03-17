<script>
	import '../app.css';
	import { blur } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data;
</script>


{#key data.pathname}
	<div
		in:blur={{ easing: cubicOut, duration: 350, delay: 550, amount: 10, opacity: 100 }}
		out:blur={{ easing: cubicIn, duration: 600, opacity: 100 }}
	>
		<slot />
	</div>
{/key}
