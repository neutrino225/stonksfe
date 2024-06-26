<!-- @format -->
<script lang="ts">
	import Datapoints from "./Datapoints.svelte";
	import VisualizationType from "./VisualizationType.svelte";
	import Filters from "./Filters.svelte";
	import Generation from "./Generation.svelte";
	import ImageContainer from "./ImageContainer.svelte";

	import { writable } from 'svelte/store';

	const selectedFilters = writable([]);

	selectedFilters.subscribe(value => {
		console.log(value);
	});

	const exampleLink = `<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`;

</script>

<section class="min-h-screen mx-auto flex justify-center items-center p-12">
	<div
		class="w-full min-h-[80vh] m-auto rounded-3xl grid grid-cols-7 gap-4 p-4 "
	>
		<div class="w-full max-h-96 bg-slate-950/90 rounded-xl p-5 col-span-2 shadow-2xl">
			<Datapoints />
		</div>

		<div class="w-full max-h-96 bg-slate-950/90 rounded-xl p-5 col-span-2">
			<VisualizationType />
		</div>

		<div
			class="w-full max-h-96 bg-slate-950/90 rounded-xl p-5 col-span-3 customBoxShadow"
		>
			<Filters />
		</div>

		<div class="w-full min-h-[30rem] bg-slate-950/90 customBoxShadow rounded-xl col-span-4 p-4 flex flex-col justify-center items-center gap-4">
			<p class="capitalize self-center font-medium text-2xl leading-7">Preview Image</p>
			<ImageContainer link={``} />
		</div>
		<div
			class="w-full min-h-96 bg-slate-950/90 rounded-xl col-span-3 grid grid-flow-row grid-rows-3 gap-2 p-4"
		>
			<Generation {exampleLink}/>
		</div>
	</div>
</section>

<style>
	.customBoxShadow{
		box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
	}
</style>
