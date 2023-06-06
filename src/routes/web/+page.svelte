<script lang="ts">
	import Webdisplay from '../../components/webdisplay.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<div class="main">
	<section class="flex">
		{#each data.webList as i}
			<div class="site">
				<Webdisplay webdata={i} />
			</div>
		{/each}
	</section>
</div>

<style lang="scss">
	section {
		flex-wrap: wrap;
		.site {
			width: 30%;
			aspect-ratio: 2/1;
			margin-left: 2.5%;
			margin-top: 2.5%;
		}
	}
</style>
