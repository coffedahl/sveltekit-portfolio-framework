<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<h1>Website admin</h1>
<section class="flex">
	<ul>
		<h2>Your projects</h2>
		{#each data.webdata as website}
			<li class="flex">
				<p>{website.name}</p>
				<button>Edit</button><button>Delete</button>
			</li>
		{/each}
	</ul>
	<form method="post">
		<h2>Featured project</h2>
		<select name="feature">
			{#each data.webdata as website}
				{#if website.id == data.featured.id}
					<option value={website.id} selected={true}>{website.name}</option>
				{:else}
					<option value={website.id}>{website.name}</option>
				{/if}
			{/each}
		</select>
		<button>Save</button>
	</form>
</section>
