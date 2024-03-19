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

<div class="relative overflow-hidden w-screen h-screen">
	<Video
		src="/animation.mp4"
		autoplay
		playsinline
		muted
		loop
		class="video-element object-cover w-full h-full"
		trackSrc="animation.mp4"
	/>

	<div class="headingdivone absolute inset-0 z-20 border border-white border-2 p-5 bg-gray-600">
		<h1 class="heading text-xl font-bold italic">
			About
			<hr class="abouthr" />
		</h1>
		<h2 class="aboutpara">
			I'm an IT Support Specialist based out of Miami, FL. <br />
			I've bounced around the food and beverage, hospitality <br />
			and warehouse industries before finally realizing my passion <br />
			was in technology. This was a few years after tinkering <br />
			with and building my own computer and Proxmox server. <br />
			<br />
			Whoops. <br /> <br />
			I currently work in a hybrid onsite/Azure environment. <br />
			Primary duties are currently Active Directory and Office 365 administration, <br />
			as well as user support. During my free time I practice and <br />
			work on my code. I'm currently aiming for a role in the cloud/devops as I have<br /> personal experience
			working with AWS. Please feel free to check out my projects section.
		</h2>
		<h1 class="aboutpara2 font-bold">
			Find me here:<br />
			<a href="https://github.com/stephanosant97" target="_blank" rel="noopener noreferrer">
				<i class="githubicon fab fa-github fa-2xl"></i>
			</a>
			<a
				href="https://www.linkedin.com/in/stephano-s-6a022ba6/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i class="linkedinicon fab fa-linkedin-in fa-2xl"></i>
			</a>
		</h1>
	</div>
</div>

<style>
	.headingdivone {
		position: fixed;
		top: 50%; /* Center vertically */
		left: 50%; /* Center horizontally */
		transform: translate(-50%, -50%); /* Move back by half of its width and height */
		width: 90%; /* Adjust the width as needed */
		max-width: 90%; /* Adjust the maximum width as needed */
		height: 82vh;
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

	@media only screen and (max-width: 767px) {
		/* Styles for mobile devices */
		.headingdivone {
			width: 100%; /* Make it take up full width on mobile */
			max-width: 100%; /* Adjust the maximum width as needed */
			height: 89%;
			padding: 20px; /* Add padding as needed */
		}

		.heading {
			margin-right: 10px;
		}
	}

	.aboutpara {
		padding-left: 40px;
		padding-top: 35px;
		color: white;
	}

	.aboutpara2 {
		padding-left: 40px;
		padding-top: 70px;
		color: white;
	}

	.githubicon {
		padding-top: 30px;
		padding-left: 10px;
	}

	.linkedinicon {
		padding-left: 20px;
	}
</style>
