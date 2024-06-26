<!-- @format -->
<script lang="ts">
    import CodeBox from "./CodeBox.svelte";
    import {selectedFilters} from "$lib/store";
    import {writable} from "svelte/store";
    import { onMount } from "svelte";

    // Local store to keep track of selected filters
    let filters = writable<string[]>([]);

    // Subscribe to the selectedFilters store
    onMount(() => {
        const unsubscribe = selectedFilters.subscribe((value) => {
            filters.set(value);
        });

        return () => {
            unsubscribe();
        };
    });

    export let exampleLink;
</script>
<div class="w-full h-full bg-slate-900 row-span-2 p-10 flex flex-col justify-start items-start gap-6">
    {#each $filters as filter}
        <div class="w-full h-max flex flex-row justify-start items-center gap-5">
            <label class="capitalize text-md font-normal" for={filter}>{filter}:</label>
            <input class="min-w-96 max-w-full bg-slate-800 rounded-lg px-4 py-2 outline-none text-white border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]" type="text" id={filter} name={filter} />
        </div>
    {/each}
</div>

<div
	class="w-full h-full flex flex-row justify-between items-center p-4 gap-10"
>
	<div class="w-full flex flex-1 justify-center items-center">
		<button class="genButton">Generate</button>
	</div>
	<CodeBox link={exampleLink} />
</div>

<style>
    .genButton {
		text-decoration: none;
		position: relative;
		border: none;
		font-size: 14px;
		font-family: inherit;
		cursor: pointer;
		color: #fff;
		width: 9em;
		height: 3em;
		line-height: 2em;
		text-align: center;
		background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
		background-size: 300%;
		border-radius: 30px;
		z-index: 1;
	}

	.genButton:hover {
		animation: ani 2s linear infinite;
		border: none;
	}

	@keyframes ani {
		0% {
			background-position: 0%;
		}

		100% {
			background-position: 400%;
		}
	}

	.genButton:before {
		content: "";
		position: absolute;
		top: -5px;
		left: -5px;
		right: -5px;
		bottom: -5px;
		z-index: -1;
		background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
		background-size: 400%;
		border-radius: 35px;
		transition: 1s;
	}

	.genButton:hover::before {
		filter: blur(20px);
	}

	.genButton:active {
		background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
	}
</style>
