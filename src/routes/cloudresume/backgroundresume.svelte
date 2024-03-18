<script>
	import { Video } from 'flowbite-svelte';
	import Visitorcounter from './visitorcounter.svelte';
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import Certifications from './certifications.svelte';
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
	<div class="flex justify-end">
		<div
			class="headingdiv absolute top-14 bottom-0 right-0 z-15 border border-white border-2 p-5 bg-gray-600 transform flex-border"
		>
			<h1 class="heading text-xl font-bold italic">
				Cloud Resume <span class="block sm:inline-block float-right">
					Visitor Counter : <Visitorcounter />
				</span>
				<hr class="abouthr" />
				<h1
					class="expheader underline underline-offset-2 italic"
					style="padding-bottom: 5px; padding-top: 15px"
				>
					Experience
				</h1>
				<div class="relative pt-7 pl-4">
					<Timeline order="vertical" class="experience">
						<TimelineItem
							class="titleitems"
							title="IT Support Specialist"
							date="Fontainebleau Development, Oct 2023 - Current"
						>
							<svelte:fragment slot="icon">
								<span
									class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="32"
										width="32"
										viewBox="0 0 512 512"
										><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
											fill="#f87e0d"
											d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
										/></svg
									>
								</span>
							</svelte:fragment>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Supports and maintains in-house audio-visual equipment, desktops and notebooks <br
								/>
								(both Windows and MacOS), specialty systems, and peripherals.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Performs diagnostics and repairs to ensure all hardware and
								<br /> equipment are performing optimally.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Provides support to end users in troubleshooting problems in a fast-paced and
								constantly evolving environment.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Supports basic helpdesk needs for multiple sites remotely and on-premises.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Provides server administration as well as Office 365 administration.
							</p>
						</TimelineItem>
						<TimelineItem title="Junior Network Engineer" date="Ballyhoo Media, 02/2023 - 10/2023">
							<svelte:fragment slot="icon">
								<span
									class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="32"
										width="32"
										viewBox="0 0 512 512"
										><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
											fill="#f87e0d"
											d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
										/></svg
									>
								</span>
							</svelte:fragment>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Lead the creation, setup and configuration of digital signage networks to maximize
								overall effectiveness.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Orchestrate the configuration and facilitation of Cradlepoints routers,<br /> ensuring
								reliable and secure network connections.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Responsible for the setup and management of Brightsign digital signage players,<br
								/>
								optimizing content playback and user experience.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Responsible for wrapping all creatives in a JavaScript Program that allows for
								automated play count<br /> tracking across all assets into an AWS DynamoDB database.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Led the setup of remote troubleshooting network based off RaspberryPi computers on
								all assets,<br /> leading to reduced field time, better customer experience and lower
								ticket counts.
							</p>
						</TimelineItem>
						<TimelineItem title="Operations Supervisor" date="Amazon, 11/20 - 02/2023">
							<svelte:fragment slot="icon">
								<span
									class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="32"
										width="32"
										viewBox="0 0 512 512"
										><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
											fill="#f87e0d"
											d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
										/></svg
									>
								</span>
							</svelte:fragment>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Applied the cutting-edge Dynamic Stow system and led the successful introduction of
								the<br /> new DA assist program at DVB7, resulting in improved efficiency.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Headed the training and mentoring of newly recruited personnel, encouraging a<br />
								skilled and cohesive workforce capable of fulfilling diverse responsibilities.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Spearheaded a load-out team of associates at DBV7, driving a significant increase
								in on-time deliveries<br /> and ensuring satisfaction as packages reached the right destination
								in real-time.
							</p>
							<p class="expdescription mb-4 text-base font-normal text-white">
								•Piloted a brand-new delivery station, DVB7, exhibiting exceptional leadership
								skills<br /> in training a new LO Process Assistant to effectively manage shifts.
							</p>
						</TimelineItem>
						<TimelineItem>
							<svelte:fragment slot="icon">
								<span
									class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="32"
										width="32"
										viewBox="0 0 512 512"
										><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
											fill="#f87e0d"
											d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
										/></svg
									>
								</span></svelte:fragment
							>
							<p class="mb-4 text-base font-normal text-gray-600">.</p>
						</TimelineItem>
					</Timeline>
					<Certifications />
				</div>
			</h1>
		</div>
	</div>
</div>

<style>
	.headingdiv {
		max-width: 100%;
		overflow: auto;
	}

	.heading {
		padding-left: 15px;
		padding-top: 50px;
		color: white;
	}

	.headingdiv::-webkit-scrollbar {
		width: 13px; /* Width of the scrollbar */
	}

	.headingdiv::-webkit-scrollbar-track {
		background: #f87e0d; /* Background color of the track */
	}

	.headingdiv::-webkit-scrollbar-thumb {
		background-color: black; /* Color of the scrollbar thumb */
		border-radius: 2px; /* Rounded corners */
	}

	.headingdiv::-webkit-scrollbar-thumb:hover {
		background-color: #333; /* Color of the scrollbar thumb on hover */
	}
</style>
