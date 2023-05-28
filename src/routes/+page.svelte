<script>
	import ImageCarusel from '../components/ImageCarusel.svelte';
</script>

<div class="main flex flex-column">
	<section class="banner flex total-center">
		<div class="text-box flex flex-column justify-center">
			<h1>Hi Im Coffe!</h1>
			<p>Photographer & Developer currently based in Norway</p>
		</div>
		<div>
			<img src="portrait.jpg" alt="" />
		</div>
		<div class="custom-shape-divider-top-1684967682">
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
					class="shape-fill"
				/>
			</svg>
		</div>
	</section>
	<section class="web">
		<div class="flex justify-even items-center">
			<div class="carousel">
				<ImageCarusel photos={['/images/madittbasta.png', '/images/open-sp.png']} />
			</div>
			<div class="flex flex-column">
				<h1>Photograpy</h1>
				<p>I do event and portrait shoots</p>
				<a href="/photography"><button class="btn">Check out the Images</button></a>
			</div>
		</div>
	</section>
	<section class="photograpy">
		<div class="flex justify-even items-center">
			<div class="flex flex-column">
				<div>
					<h1>Development</h1>
					<p>I create custom wesites and tools</p>
				</div>
				<a href="/web"><button class="btn">Check out my work</button></a>
			</div>
			<div class="flex flex-column items-center">
				<h3>Featured project:</h3>
				<img src="/images/open-sp.png" alt="" style="width: 30vw;" />
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	h1 {
		font-size: xx-large;
	}
	p {
		font-size: large;
	}
	button {
		font-size: large;
		margin-top: 2vh;
		width: 100%;
	}
	.banner {
		z-index: -1;
		margin-top: -15vh;
		padding-top: 15vh;
		background-color: rgb(214, 214, 214);

		img {
			border-radius: 100%;
			border: 5px solid white;
			aspect-ratio: 1/1;
			height: 250px;
			object-fit: cover;
			object-position: 0px -20px;
		}
		.text-box {
			width: 20vw;
			height: 15vh;
			margin-right: 8vw;
			margin-top: 5vh;
		}
	}

	section {
		margin-top: 3vh;
		margin-top: 3vh;
		height: 35vh;
		img {
			box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1);
		}
	}

	.custom-shape-divider-top-1684967682 {
		position: absolute;
		top: 45vh;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		svg {
			position: relative;
			display: block;
			width: calc(120% + 1.3px);
			height: 121px;
			transform: rotateY(180deg);
		}
		.shape-fill {
			fill: #d6d6d6;
		}
	}

	.carousel {
		width: 30vw;
		height: 16.875vw;
		aspect-ratio: 16/9;
		box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1);
	}
</style>
