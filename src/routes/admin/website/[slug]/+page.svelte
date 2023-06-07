<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	$: website = data.website;
</script>

<div class="flex flex-column">
	<h1>{website.name}</h1>
	<form method="post" class="flex flex-column items-center justify-even">
		<input type="text" name="name" value={website.name} />
		<input type="text" name="id" value={website.id.split(':')[1]} />
		<input type="file" name="image" value={website.imgUrl} />
		<input type="text" name="publicUrl" value={website.pubUrl} />
		<button>Save</button>
	</form>
</div>
