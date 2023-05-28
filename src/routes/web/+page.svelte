<script lang="ts">
	import type { WebsiteData } from '$lib/types';
	import Webdisplay from './components/webdisplay.svelte';
	const array: WebsiteData[] = [
		{ name: 'Coffe Dahl', imgUrl: '', pageurl: '/coffedahl' },
		{ name: 'JDTEK', imgUrl: '', pageurl: '/jdtek'},
		{ name: 'Må ditt bästa', imgUrl: '/images/madittbasta.png', pageurl: '/madittbasta' },
		{ name: 'Open-SP', imgUrl: '/images/open-sp.png', pageurl: '/open-sp' }
	];
</script>

<div class="main">
	<section class="flex">
		{#each array as i}
			<div class="site">
				<Webdisplay webdata={i} />
			</div>
		{/each}
	</section>
</div>

<style>
	.site {
		width: 30%;
		aspect-ratio: 2/1;
		margin-left: 2.5%;
		margin-top: 2.5%;
	}
	section{
		flex-wrap: wrap;
	}
</style>
