<script lang="ts">
	export let title: string;
	export let date: string;
	export let jobTitle: string;
	export let dep: string;
	export let inst: string;
</script>

<div class="column">
	<h2 class="title">{title}</h2>
	<span class="date"><i class="fa-regular fa-calendar" />{date}</span>
	<h3 class="jobTitle">{jobTitle}</h3>
	<p class="paragraph">{dep}</p>
	<span class="school">{inst}</span>
</div>

<style>
	.column {
		display: flex;
		flex-direction: column;
		width: 450px;
		height: 240px;
		margin-top: 50px;
		padding: 20px;
		border-radius: 20px;
		background: whitesmoke;
		line-height: 30px;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
	.title {
		font-weight: 700;
		margin-bottom: 0;
		color: lightseagreen;
		text-align: end;
	}
	.date {
		font-size: 0.8rem;
		color: gray;
		text-align: end;
	}
	.jobTitle {
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 0;
	}
	.paragraph {
		font-size: 0.9rem;
		margin-bottom: 0;
	}
	.school {
		font-size: 0.8rem;
		color: gray;
		text-align: end;
	}
</style>
