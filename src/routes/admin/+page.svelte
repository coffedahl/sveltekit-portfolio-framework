<script lang="ts">
	import { Website } from '$lib/classes/websites';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<div class="menu">
	<a href="/admin/website"><button class="btn menu-button">Manage websites</button></a>
	<a href="/admin/photo"><button class="btn menu-button">Manage photos</button></a>
</div>
