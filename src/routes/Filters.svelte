<!-- @format -->
<script lang="ts">
	import { selectedFilters as sF } from "$lib/store";
	import { filter } from "@skeletonlabs/skeleton";
	import { onMount } from "svelte";

	const filters = [
		{ name: "State", value: "state" },
		{ name: "Engagement", value: "engagement" },
		{ name: "Color", value: "color" },
		{ name: "Age", value: "age" },
		{ name: "Gender", value: "gender"},
		{ name: "Employment Status", value: "employmentStatus" }
	];

	// Reactive variable to store selected filters from the store
	let selectedFilters: string[] = [];

	// Subscribe to the store to get updates
	onMount(() => {
		const unsubscribe = sF.subscribe((filters) => {
			selectedFilters = filters;
		});

		return () => {
			unsubscribe();
		};
	});

	// Function to handle select changes
	function handleSelectChange(event: Event) {
		const selectElement = event.target as HTMLSelectElement;
		const selectedValue = selectElement.value;
		const selectedFilter = filters.find(
			(filter) => filter.value === selectedValue
		);

		if (selectedValue === "Add filter") return;

		if (selectedFilter && !selectedFilters.includes(selectedFilter.value)) {
			sF.addFilter(selectedFilter);
		}
	}

	function removeFilter(value: string) {
		return () => {
			sF.removeFilter(value);
		};
	}
</script>

<div class="w-full h-full flex flex-col justify-center items-center gap-5 divide-y divide-slate-800">
	<div class="min-h-10">
		<p class="self-center text-2xl font-medium leading-7">Filters</p>
	</div>
	<div class="w-full">
		<div class="w-full h-full flex flex-col justify-start items-start gap-5">
			<div class="flex flex-col gap-2 w-full">
				<select
					class="bg-slate-800 w-full outline-none border-none rounded-md p-2 focus-visible:border-blue-500"
					on:change={handleSelectChange}
					value="Add filter"
				>
					<option value="Add filter" selected>Add filter</option>
					{#each filters as filter}
						{#if selectedFilters.includes(filter.value)}
							null
						{:else}
							<option value={filter.value}>{filter.name}</option>
						{/if}
					{/each}
				</select>
			</div>
		</div>
	</div>
	<div
		class="w-full h-full flex flex-col justify-center items-center p-4 border-slate-800 rounded-b-xl"
	>
		{#if selectedFilters.length === 0}
			<p class="text-sm">No filters selected</p>
		{:else}
			<div class="flex flex-row justify-start items-center gap-3 flex-wrap">
				{#each selectedFilters as filterValue}
					<div
						data-dismissible="chip"
						class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-slate-800 p-3 font-sans text-xs font-bold uppercase text-white"
					>
						<span class="mr-5">{filterValue}</span>
						<button
							data-dismissible-target="chip"
							class="!absolute top-2/4 right-1 mx-px h-5 max-h-[32px] w-5 max-w-[32px] -translate-y-2/4 select-none rounded-md text-center align-middle py-1.5 px-3 font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							type="button"
							on:click={removeFilter(filterValue)}
						>
							<span
								class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									class="w-4 h-4"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							</span>
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	/* Custom styles for chips */
	[data-dismissible="chip"]:nth-child(odd) {
		background-color: rgb(51 65 85); /* bg-slate-700 */
	}

	[data-dismissible="chip"]:nth-child(even) {
		background-color: rgb(219 39 119);
	}

	/* Additional contrast variations */
	[data-dismissible="chip"]:nth-child(3n) {
		background-color: rgb(124 58 237); /* bg-violet-600 */
	}

	[data-dismissible="chip"]:nth-child(4n) {
		background-color: rgb(34 197 94); /* bg-green-500 */
	}
</style>
