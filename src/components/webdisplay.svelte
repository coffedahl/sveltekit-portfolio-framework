<script lang="ts">
	import type { WebData, Website } from '$lib/classes/websites';

	export let webdata: WebData;
</script>

<div class="flex flex-column items-center parent">
	<a href={'/web' + webdata.pageUrl}>
		<div class="background" style="background-image: url({webdata.imgUrl});" />
	</a>
	<div class="text-overlay flex total-center">
		<h1>{webdata.name}</h1>
	</div>
</div>

<style lang="scss">
	.parent {
		width: 100%;
		height: 100%;
		background-color: red;
		overflow: hidden;
		border: 1px solid black;
		a {
			width: 100%;
			height: 100%;
			.background {
				width: 100%;
				height: 100%;
				background-size: cover;
			}
		}

		&:hover > a > .background {
			transform: scale(1.2);
			transition: all 0.5s;
		}

		.text-overlay {
			width: 100%;
			height: 5vh;
			margin-top: -5vh;
			background-color: rgba(0, 0, 0, 0.4);
			h1 {
				color: white;
			}
		}
	}
</style>
