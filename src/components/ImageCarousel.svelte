<script lang="ts">
	//Property list of photos
	export let photos: string[];
	//Variable for wich photo is going to be shown
	let index = 0;

	/**
	 * Funtion for calling next photo
	 */
	function next() {
		index = (index + 1) % photos.length;
	}
	/**
	 * Function for calling previous photo
	 */
	function previous() {
		if (index == 0) {
			//If at start reset to last index
			index = photos.length - 1;
		} else {
			index = index + -1;
		}
	}
</script>

<div class="flex">
	<button on:click={previous} style="margin-right: -5%;"><i class="fas fa-arrow-left" /></button>
	{#each [photos[index]] as src}
		<img {src} alt="" />
	{/each}
	<button on:click={next} style="margin-left:-5%;"><i class="fas fa-arrow-right" /></button>
</div>

<style lang="scss">
	div {
		background-color: black;
	}
	img {
		width: 100%;
	}
	button {
		width: 5%;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.05);
		border: none;
		&:hover {
			background-color: rgba(0, 0, 0, 0.25);
		}
	}
</style>
