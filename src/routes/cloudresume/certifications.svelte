<script>
	import { Card } from 'flowbite-svelte';
</script>

<div class="flex justify w-full">
	<Card class="certs bg-gray-600 relative" size="xl">
		<div class="w-full max-w-screen-lg text-center">
			<svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512">
				<!-- Icon path -->
			</svg>
			<div class="ml-4">
				<!-- Added a margin to separate icon from text -->
				<h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Certs
				</h1>
				<hr />
				<h5 class="mb-2 text-xl tracking-tight text-white">
					<ul class="list-group list-group-flush font-normal">
						<li class="list-group-item bg-gray-600">
							<i class="fa-brands fa-cloudversify fa-lg" style="color: #f87e0d;"></i>
							Comptia Cloud+
						</li>
						<li class="list-group-item bg-gray-600">
							<i class="fa-brands fa-cloudversify fa-lg" style="color: #f87e0d;"></i>
							AWS Certified Cloud Practioner
						</li>
						<li class="list-group-item bg-gray-600">
							<i class="fa-brands fa-cloudversify fa-lg" style="color: #f87e0d;"></i>
							Microsoft AZ900
						</li>
						<li class="list-group-item bg-gray-600">
							<i class="fa-brands fa-linux fa-lg" style="color: #f87e0d;"></i>
							LPI Linux Essentials
						</li>
						<li class="list-group-item bg-gray-600">
							<i class="fa-solid fa-microchip fa-lg" style="color: #f87e0d;"></i>
							Comptia Security+
						</li>
						<li class="list-group-item bg-gray-600">
							<i class="fa-solid fa-microchip fa-lg" style="color: #f87e0d;"></i>
							Comptia Network+
						</li>
						<li class="list-group-item bg-gray-600">
							<i class="fa-solid fa-microchip fa-lg" style="color: #f87e0d;"></i>
							Comptia A+
						</li>
					</ul>
				</h5>
				<h2 class="cardtitles text-gray-900" style="padding-top: 1rem;">Skills</h2>
				<hr />
				<ul class="list-group list-group-flush text-white font-normal">
					<li class="list-group-item bg-gray-600">
						<i class="fa-brands fa-html5 fa-lg" style="color: #f87e0d;"></i>
						HTML & CSS
					</li>
					<li class="list-group-item bg-gray-600">
						<i class="fa-brands fa-python fa-lg" style="color: #f87e0d;"></i>
						PYTHON
					</li>
					<li class="list-group-item bg-gray-600">
						<i class="fa-solid fa-code-compare fa-lg" style="color: #f87e0d;"></i>
						CI/CD
					</li>
					<li class="list-group-item bg-gray-600">
						<i class="fa-solid fa-code fa-lg" style="color: #f87e0d;"></i>
						Terraform
					</li>
					<li class="list-group-item bg-gray-600">
						<i class="fa-solid fa-cubes fa-lg" style="color: #f87e0d;"></i>
						Software Troubleshooting
					</li>
					<li class="list-group-item bg-gray-600">
						<i class="fa-solid fa-network-wired fa-lg" style="color: #f87e0d;"></i>
						Network Administration
					</li>
					<li class="list-group-item bg-gray-600">
						<i class="fa-solid fa-users-gear fa-lg" style="color: #f87e0d;"></i>
						Tech Support
					</li>
				</ul>
				<h2 class="cardtitles text-gray-900" style="padding-top: 1rem;">Socials</h2>
				<hr />
				<ul class="list-group list-group-flush text-white font-normal">
					<li class="list-group-item bg-gray-600">
						<a
							class="icon-link underline underline-offset-2"
							style="color: white;"
							href="https://www.linkedin.com/in/stephano-s-6a022ba6/"
						>
							<i class="fa-brands fa-linkedin fa-lg" style="color: #f87e0d;"></i>
							LinkedIn
						</a>
					</li>
					<li class="list-group-item bg-gray-600">
						<a
							class="icon-link link-underline underline underline-offset-2"
							style="color: white;"
							href="https://github.com/stephanosant97"
						>
							<i class="fa-brands fa-github-alt fa-lg" style="color: #f87e0d;"></i>
							Github
						</a>
                        <h2 class="cardtitles text-gray-900 font-bold" style="padding-top: 1rem;">Education</h2>
				<hr />
				<ul class="list-group list-group-flush text-white">
					<li class="list-group-item bg-gray-600 font-normal">
                        <h5>Western Governors University, 12/2024</h5>
                        <h6>BS in Information Technology</h6>
					</li>
				</ul>
			</div>
		</div>
	</Card>
</div>
