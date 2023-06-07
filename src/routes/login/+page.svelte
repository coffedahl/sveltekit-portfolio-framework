<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div class="main flex flex-column total-center">
	{#if form?.fail}
		<div class="popup"><b>Invalid username or password</b></div>
	{/if}
	<form method="post" class="flex flex-column">
		<input type="text" name="username" placeholder="Username" class="input" />
		<input type="password" name="password" placeholder="Password" class="input" />
		<button class="btn">Login</button>
	</form>
</div>

<style lang="scss">
	.popup {
		background-color: rgba(255, 0, 0, 0.5);
        padding: 0.5em;
        width: 19vw;
        border-radius: 8px;
	}
	form {
		width: 20vw;
		input,
		button {
			margin-top: 1vh;
		}
	}
</style>
