<script lang="ts">
    import { selectedFilters as sF } from '$lib/store';
	import { filter } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
    
    const filters = [
        { name: "Filter 1", value: "filter1" },
        { name: "Filter 2", value: "filter2" },
        { name: "Filter 3", value: "filter3" },
        { name: "Filter 4", value: "filter4" },
        { name: "Filter 5", value: "filter5" },
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

<div class="w-full h-full flex flex-col justify-center items-center gap-5">
    <h1 class="capitalize self-center text-xl font-semibold leading-7">
        Filters
    </h1>
    <div class="w-full">
        <div
            class="w-full h-full flex flex-col justify-start items-start gap-5"
        >
            <p class="text-base">Choose filters</p>
            <div class="flex flex-col gap-2 w-full">
                <select
                    class="select w-full p-2 focus-visible:border-blue-500"
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
        class="w-full h-full flex flex-col justify-center items-center border-t-2 p-4 border-slate-800 rounded-b-xl mt-8"
    >
        {#if selectedFilters.length === 0}
            <p class="text-base">No filters selected</p>
        {:else}
            <div class="flex flex-row justify-start items-center gap-3 flex-wrap">
                {#each selectedFilters as filterValue}
                    <button class="py-2 px-2 bg-slate-800 rounded-lg text-sm flex flex-row justify-center items-center gap-1" on:click={removeFilter(filterValue)}>
                        <p class="text-base">{filterValue}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" {...$$props}>
                            <path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z" />
                        </svg>
                    </button>
                {/each}
            </div>
        {/if}
    </div>
</div>
