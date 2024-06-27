<!-- @format -->
<script lang="ts">
	import ImageContainer from "../ImageContainer.svelte";

	// Local store to keep track of selected filters
	let extractedFilters: string[] = [];
	let description = "";

	const handleSubmit = (e: Event) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		const data = Object.fromEntries(formData.entries());

		alert("Form submitted!");
		// Form submission logic here

		// Reset form
		form.reset();
	};
</script>

<section class="min-h-screen mx-auto flex justify-start items-center p-12">
	<div
		class="w-full min-h-[80vh] m-auto rounded-3xl flex flex-col justify-start items-center gap-4 p-4"
	>
		<div
			class="w-full min-h-16 bg-slate-950/90 rounded-full flex justify-center items-center p-2"
		>
			<input
				class="bg-transparent px-4 py-3 outline-none w-full text-white rounded-3xl border-none focus:border-none focus:outline-none focus:ring-0 transition-all duration-300"
				name="text"
				placeholder="Enter image link here..."
				type="text"
			/>
		</div>

		<div class="w-full h-full grid grid-cols-7 gap-x-5">
			<div
				class="w-full min-h-[30rem] bg-slate-950/90 customBoxShadow rounded-xl col-span-4 p-4 flex flex-col justify-center items-center gap-4"
			>
				<p
					class="capitalize self-center font-medium text-2xl text-[#FAF9F6] leading-7"
				>
					Image Preview
				</p>
				<ImageContainer link={``} />
			</div>
			<div
				class="w-full min-h-[30rem] col-span-3 grid grid-flow-row grid-rows-3 gap-5"
			>
				<div
					class="w-full bg-slate-950/80 row-span-2 rounded-xl p-6 flex flex-col justify-center items-center"
				>
					{#if extractedFilters.length == 0}
						<p class="text-gray-200 text-normal font-medium">
							Extacted filters will appear here
						</p>
					{:else}
						<div
							class="w-full h-full flex flex-col justify-center items-center divide-y-2 divide-slate-700 gap-3"
						>
							<div>
								<p
									class="capitalize self-center text-xl font-medium leading-7 text-[#FAF9F6]"
								>
									Set filter values
								</p>
							</div>
							<div class="w-full h-full py-2">
								{#each extractedFilters as filter}
									<div
										class="w-full h-max grid grid-cols-3 justify-center items-center m-2"
									>
										<label
											class="w-auto capitalize text-md font-normal leading-6"
											for={filter}
										>
											{filter}
										</label>
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
						</div>
					{/if}
				</div>
				<form
					class="w-full bg-slate-950/80 rounded-xl flex flex-col justify-center items-center gap-4 p-2"
					method="POST"
					on:submit={handleSubmit}
				>
					<textarea
						class="w-full h-full rounded-lg bg-slate-800 focus:outline-none focus:border-none"
						rows="4"
						placeholder="Enter description here ..."
						bind:value={description}
					/>
					<button
						type="submit"
						class="mb-2 cursor-pointer flex justify-center backdrop-blur p-2 rounded-full text-white tracking-wider shadow-xl duration-500 ring-2 font-mono w-[130px] insetShadow"
					>
						Preview
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.customBoxShadow {
		box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
	}

    .insetShadow:hover {
		background-color: rgba(48, 118, 199, 0.51) !important;
		filter: drop-shadow(-4px 2px 12px #005bd1);	
		}
</style>
