<div class="main flex flex-column justify-even items-center">
	<h1>Admin</h1>
	<slot />
	<form method="post">
		<button class="btn logout-button">Logout</button>
	</form>
</div>

<style lang="scss">
	.menu-button {
		padding: 1.5em;
	}
	.logout-button {
		padding: 0.8em;
	}
</style>
