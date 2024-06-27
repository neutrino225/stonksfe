<!-- @format -->
<script lang="ts">
	import { selectedFilters } from "$lib/store";
	import { writable } from "svelte/store";
	import { onMount } from "svelte";
	import { CodeBlock } from "@skeletonlabs/skeleton";

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

<div
	class="w-full h-full bg-white/10 row-span-2 p-4 flex flex-col justify-start items-start gap-2 divide-y divide-slate-800 rounded-lg"
>
	<p
		class="capitalize self-center text-xl font-medium leading-7 text-[#FAF9F6]"
	>
		Set filter values
	</p>
	{#if $filters.length === 0}
		<div class="w-full h-full flex justify-center items-center">
			<p class="text-sm font-poppins font-light">No filters selected</p>
		</div>
	{/if}
	{#if $filters.length > 0}
		<div
			class="w-full h-full py-4 flex flex-col justify-start items-start gap-2"
		>
			{#each $filters as filter}
				<div class="w-full h-max grid grid-cols-3 justify-center items-center">
					<label
						class="w-auto capitalize text-md font-normal leading-6"
						for={filter}>{filter}</label
					>
					<input
						placeholder={`Enter ${filter}`}
						class="w-full bg-white/10 rounded-lg px-4 py-2 col-span-2 outline-none text-white border-2 focus:bg-white/20 focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
						type="text"
						id={filter}
						name={filter}
					/>
				</div>
			{/each}
		</div>
		<div class="w-full h-max self-end flex justify-center items-center p-2">
			<button
				on:click={() => {
					alert("Preview");
				}}
				class="cursor-pointer flex justify-center backdrop-blur p-2 rounded-full text-white tracking-wider shadow-xl duration-500 ring-2 font-mono w-[130px] insetShadow"
			>
				Preview
			</button>
		</div>
	{/if}
</div>

<div
	class="w-full h-full flex flex-row justify-center items-center p-4 gap-10 row-span-1"
>
	<CodeBlock language="html" code={exampleLink} />
	<div class="w-full flex flex-1 justify-center items-center">
		<button class="genButton" on:click={() => alert("genrate link!")}
			>Generate</button
		>
	</div>
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

	.insetShadow:hover {
		background-color: rgba(48, 118, 199, 0.51) !important;
		filter: drop-shadow(-4px 2px 12px #005bd1);	
		}
</style>
