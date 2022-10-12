<script>
	import ResumeItem from './ResumeItem.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="row">
	<ResumeItem
		title="Education"
		date="September 2016 - September 2020"
		jobTitle="Computer Science & Engineering"
		dep="Department of Applied Mathematics & Informatics"
		inst="Ala-Too International University"
	/>
	<ResumeItem
		title="Education"
		date="August 2021 - August 2023
    (Expected)"
		jobTitle="MSc in Data Science"
		dep="Faculty of Computer Science. Department of Data Analysis & Artificial Intelligence"
		inst="Innopolis University, Tatarstan, Russia"
	/>
	<ResumeItem
		title="Experience"
		date="September 2020 - May 2021"
		jobTitle="Math and Computer Science Program Manager"
		dep="As a head of CS club I organized numerous Python and web programming (HTML, CSS, Javascript) camps to club members for free"
		inst="Ch. Aitmatov Cambridge School, Bishkek, Kyrgyzstan"
	/>

	<ResumeItem
		title="Experience"
		date="September 2020 - May 2021"
		jobTitle="Researcher"
		dep="Currently working on this research project with my supervisor from Innopolis University. I’m investigating different approaches of abstract text summarization techniques and preparing a broad literature review about it"
		inst="Innopolis University, Tatarstan, Russia"
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
