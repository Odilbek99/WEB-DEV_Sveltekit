<script lang="ts">
	export let title: string;
	export let functionProp = () => {};
	export let bTitle: string;
	export let fact: string;
</script>

<div class="number-container">
	<h2>{title}</h2>
	<button class="get-button" on:click={functionProp()}>{bTitle}</button>
	<p class="fact">
		{fact}
	</p>
</div>

<style>
	.number-container {
		height: 400px;
		flex: 1;
		background-color: white;
		border-radius: 10px;
		padding: 20px;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		margin: 20px;
	}
	.get-button {
		background-color: rgb(0, 0, 0);
		color: white;
		border-radius: 10px;
		padding: 10px;
		font-size: 20px;
		font-weight: 50;
		margin-top: 20px;
		margin-bottom: 20px;
		width: 200px;
		text-align: center;
	}
	.fact {
		font-size: 20px;
		font-weight: 500;
		color: grey;
	}
</style>
