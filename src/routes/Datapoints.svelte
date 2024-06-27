<script lang="ts">
    const datapoints = ["A", "B", "C", "D", "E"];
    let selectedDatapoint = "A";
</script>

<div class="w-full h-full flex flex-col justify-start items-start gap-5">
    <div class="w-full min-h-10 flex flex-col justify-start items-start gap-5">
        <p class="capitalize self-center font-medium text-[#FAF9F6] text-2xl leading-7">
            Datapoints
        </p>
    </div>
    <select
        class="bg-slate-800 w-full outline-none border-none rounded-md focus-visible:border-blue-500 "
        name="datapoint"
        id="datapoint"
        bind:value={selectedDatapoint}
    >
        {#each datapoints as datapoint}
            <option value={datapoint}>{datapoint}</option>
        {/each}
    </select>
</div>