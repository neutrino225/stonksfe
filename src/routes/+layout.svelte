<!-- @format -->
<script lang="ts">
	import "../app.postcss";

	// Highlight JS
	import hljs from "highlight.js/lib/core";
	import "highlight.js/styles/github-dark.css";
	import { storeHighlightJs } from "@skeletonlabs/skeleton";
	import xml from "highlight.js/lib/languages/xml"; // for HTML
	import css from "highlight.js/lib/languages/css";
	import javascript from "highlight.js/lib/languages/javascript";
	import typescript from "highlight.js/lib/languages/typescript";

	hljs.registerLanguage("xml", xml); // for HTML
	hljs.registerLanguage("css", css);
	hljs.registerLanguage("javascript", javascript);
	hljs.registerLanguage("typescript", typescript);
	storeHighlightJs.set(hljs);

	import { fly } from "svelte/transition";

	export let data;
	import { page } from "$app/stores"; // $page
</script>
<nav class="w-full h-full flex justify-center items-center p-2">
	<ul
		class="flex justify-between items-center gap-4 py-4 px-8 bg-slate-900 rounded-full"
	>
		<li>
			<a
				href="/"
				class={$page.url.pathname === "/"
					? "text-white transition-colors duration-300 ease-linear"
					: "text-gray-400"}>Main</a
			>
		</li>
		<li>
			<a
				href="/nextStonks"
				class={$page.url.pathname === "/nextStonks"
					? "text-white transition-colors duration-300 ease-linear"
					: "text-gray-400"}>Secondary</a
			>
		</li>
	</ul>
</nav>

{#key data.url}
  <div
    in:fly={{ x: -200, duration: 300, delay: 300 }}
    out:fly={{ x: 200, duration: 300 }}
  >
    <slot />
  </div>
{/key}
