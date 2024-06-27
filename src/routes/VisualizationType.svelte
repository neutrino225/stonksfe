<script lang="ts">
    import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";

    const visualizationTypes = ["Bar Chart", "Line Chart", "Map", "Table"];
    let selectedVisualizationType = "Bar Chart";
</script>

<div class="w-full h-full flex flex-col justify-start items-start gap-5">
    <div class="w-full h-full flex flex-col justify-start items-start gap-5 min-h-10">
        <p class="capitalize self-center text-2xl font-medium text-[#FAF9F6] leading-7">
            Visualization Types
        </p>
    </div>
    <ListBox class="w-full" active="bg-slate-800">
        {#each visualizationTypes as visualizationType}
            <ListBoxItem
                bind:group={selectedVisualizationType}
                name={visualizationType}
                class="self-start text-md"
                value={visualizationType}>{visualizationType}</ListBoxItem
            >
        {/each}
    </ListBox>
</div>

