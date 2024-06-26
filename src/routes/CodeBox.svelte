<!-- @format -->
<script lang="ts">
	import { clipboard } from "@skeletonlabs/skeleton";

	let isCopied = false;

	function copyToClipboard() {
		isCopied = true;
		setTimeout(() => {
			isCopied = false;
		}, 2000);
	}

	export let link: string;
</script>

<div
	class="relative w-full rounded-lg flex flex-col justify-start items-start gap-4 bg-[#131212] p-4 hoverShadow"
>
	<div class="w-full h-full flex flex-row justify-between items-center">
		<span class="text-gray-400">Code:</span>
		<button
			on:click={copyToClipboard}
			use:clipboard={link}
			class="bg-transparent hover:bg-white/30 text-gray-300 p-1 rounded-md"
			data-clipboard-target="#code"
		>
			{#if !isCopied}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					{...$$props}
				>
					<path
						fill="currentColor"
						d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 7h10V5h2v14H5V5h2z"
					/>
				</svg>
			{:else}
				<svg
					class="text-green-500 animate-tick"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 16 16"
					{...$$props}
				>
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="m2.75 8.75l3.5 3.5l7-7.5"
						class="tick-path"
					/>
				</svg>
			{/if}
		</button>
	</div>
	<code class="code text-wrap overflow-hidden text-sm p-2" lang="xml"
		>{link}</code
	>
</div>

<style>
	.animate-tick .tick-path {
		stroke-dasharray: 22;
		stroke-dashoffset: 22;
		animation: tick-draw 1s forwards;
	}

	@keyframes tick-draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	.hoverShadow:hover {
		box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
	}

	.hoverShadow {
		transition: all 0.3s ease-in-out;
	}
</style>
