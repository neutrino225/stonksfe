<script lang="ts">
    const datapoints = ["A", "B", "C", "D", "E"];
    let selectedDatapoint = "A";
</script>

<div class="w-full h-full flex flex-col justify-start items-start gap-5">
    <h1 class="capitalize self-center text-xl font-semibold leading-7">
        Datapoints
    </h1>
    <p class="text-base">Select from the following datapoints:</p>
    <select
        class="select focus-visible:border-blue-500 "
        name="datapoint"
        id="datapoint"
        bind:value={selectedDatapoint}
    >
        {#each datapoints as datapoint}
            <option value={datapoint}>{datapoint}</option>
        {/each}
    </select>
</div>