<script>
	import welcome_fallback from '$lib/images/ff.png';
	import Socials from './Socials.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>

	<h1>Hello, I am <br /> <b> Odilbek Umaraliyev </b></h1>
	<Socials />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		justify-content: center;
		align-items: center;
	}

	.welcome img {
		width: 600px;
	}
</style>
