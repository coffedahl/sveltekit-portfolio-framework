<script lang="ts">
	import { Website } from '$lib/classes/websites';
	import type { WebsiteData } from '$lib/types/types';
	import Webdisplay from '../../components/webdisplay.svelte';
	const array: Website[] = [
		new Website('http://localhost:5173', '/coffedahl', 'Coffe Dahl', ''),
		new Website('https://www.jdtekevent.se', '/jdtek', 'JDTEK', ''),
		new Website(
			'https://www.madittbasta.se',
			'/madittbasta',
			'Må ditt bästa',
			'/images/madittbasta.png'
		),
		new Website('https://kjell.coffedahl.com', '/open-sp', 'Open-SP', '/images/open-sp.png')
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
