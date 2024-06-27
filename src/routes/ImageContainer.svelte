<!-- @format -->
<script lang="ts">
	export let link: string;
</script>
<div
	class="imgContainer overflow-hidden bg-white/10 flex justify-center items-center"
>
	{#if link}
		<img src={link} alt="Generated" class="w-full h-full object-contain" />
	{/if}
</div>
<style>
</style>
