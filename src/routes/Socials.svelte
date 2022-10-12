<script>
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaTelegram from 'svelte-icons/fa/FaTelegram.svelte';
</script>

<section>
	<h2 class="mysocials">My Portfolio/Socials</h2>
	<div class="socials">
		<a href="https://github.com/Odilbek99">
			<div class="icon">
				<FaGithub />
			</div>
		</a>
		<a href="https://www.linkedin.com/in/odilbek-umaraliev-59b970252/">
			<div class="icon">
				<FaLinkedin />
			</div>
		</a>
		<a href="https://www.instagram.com/odilee7/">
			<div class="icon">
				<FaInstagram />
			</div>
		</a>
		<a href="https://t.me/@odi_lee">
			<div class="icon">
				<FaTelegram />
			</div>
		</a>
	</div>
</section>

<style>
	.icon {
		color: lightseagreen;
		width: 48px;
		height: 48px;
		margin: 0 10px;
	}
	.socials {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.mysocials {
		text-align: center;
	}
</style>
