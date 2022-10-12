<script>
	import Fact from './Fact.svelte';

	let fact = '';
	let quote = '';

	function getFact() {
		fetch('http://numbersapi.com/random/trivia?json')
			.then((response) => response.json())
			.then((data) => {
				fact = data.text;
			});
	}
	function getQuote() {
		fetch('https://api.quotable.io/random')
			.then((response) => response.json())
			.then((data) => {
				quote = data.content;
			});
	}
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="row">
	<Fact
		title="Get a random number fact:"
		bTitle="Get a fact"
		{fact}
		functionProp={() => getFact()}
	/>
	<Fact
		title="Get a random quote:"
		bTitle="Get a quote"
		fact={quote}
		functionProp={() => getQuote()}
	/>
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
