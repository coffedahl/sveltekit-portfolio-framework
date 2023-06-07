<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	let image: string;
</script>

<div class="flex flex-column items-center">
	<h1>{data.website.name}</h1>
	<form method="post" class="flex flex-column items-center justify-even">
		<div class="form-field flex flex-column">
			<b>Namn</b>
			<input type="text" name="name" value={data.website.name} />
		</div>
		<div class="form-field flex flex-column">
			<b>Id</b>
			<input type="text" name="id" value={data.website.id.split(':')[1]} />
		</div>
		<div class="form-field flex flex-column">
			<b>Image</b>
			{#if image}
				<img style="width: 10vw" src={image} alt="" />
			{:else}
				<img style="width: 10vw" src={data.website.imgUrl} alt="" />
			{/if}
			<input type="file" name="image" bind:value={image} />
		</div>
		<div class="form-field flex flex-column">
			<b>Publik URL</b>
			<input type="text" name="publicUrl" value={data.website.publicUrl} />
		</div>
		<button>Save</button>
	</form>
</div>

<style lang="scss">
	.form-field {
		width: 20vw;
		margin-top: 1em;
	}
	input {
		padding: 0.2em;
		width: 19.5vw;
	}
	button {
		margin-top: 2em;
		padding: 0.2em;
		width: 20vw;
	}
</style>
