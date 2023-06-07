<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<h1>Website admin</h1>
<section class="flex justify-even">
	<ul class="projects flex flex-column items-center">
		<h2>Your projects</h2>
		{#each data.webdata as website}
			<li class="flex justify-between">
				<b>{website.name}</b>
				<div class="flex">
					<a href={'/admin/website/' + website.pageUrl.split('/')[1]}><button>Edit</button></a>
					<form action="?/remove" method="post">
						<input type="text" value={website.id} hidden={true} name="id" />
						<button>Delete</button>
					</form>
				</div>
			</li>
		{/each}
	</ul>
	<form method="post" action="?/feature" class="featured flex flex-column items-center">
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

<style lang="scss">
	section {
		width: 100%;
		.projects {
			li {
				width: 20vw;
				background-color: rgba(0, 0, 0, 0.1);
				margin-top: 1em;
				padding: 0.2em;
				border-radius: 8px;
				b {
					margin-left: 0.5em;
				}
				button {
					margin-right: 0.5em;
					padding: 0 0.5em;
				}
			}
		}
		.featured {
			select,
			button {
				margin-top: 1em;
				padding: 0.2em;
				width: 20vw;
			}
		}
	}
</style>
