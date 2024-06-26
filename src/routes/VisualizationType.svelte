<script lang="ts">
    import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";

    const visualizationTypes = ["Bar Chart", "Line Chart", "Map", "Table"];
    let selectedVisualizationType = "Bar Chart";
</script>

<div class="w-full h-full flex flex-col justify-start items-start gap-5">
    <h1 class="capitalize self-center text-xl font-semibold leading-7">
        Visualization Types
    </h1>
    <p class="text-base text-white">Select visualization type:</p>
    <ListBox class="w-full" active="bg-slate-800">
        {#each visualizationTypes as visualizationType}
            <ListBoxItem
                bind:group={selectedVisualizationType}
                name={visualizationType}
                class="self-start"
                value={visualizationType}>{visualizationType}</ListBoxItem
            >
        {/each}
    </ListBox>
</div>

