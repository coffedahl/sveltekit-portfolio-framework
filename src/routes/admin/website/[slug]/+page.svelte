<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<div class="flex flex-column">
	<h1>{data.website.name}</h1>
	<form method="post" class="flex flex-column items-center justify-even">
		<div>
			<b>Namn</b>
			<input type="text" name="name" value={data.website.name} />
		</div>
		<div>
			<b>Id</b>
			<input type="text" name="id" value={data.website.id.split(':')[1]} />
		</div>
		<div class="flex flex-column">
			<b>Image</b>
			<img style="width: 10vw" src={data.website.imgUrl} alt="" />
			<input type="file" name="image" />
		</div>
		<div>
			<b>Publik URL</b>
			<input type="text" name="publicUrl" value={data.website.publicUrl} />
		</div>
		<button>Save</button>
	</form>
</div>
