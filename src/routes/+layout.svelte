<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	import { page } from '$app/stores';  // $page
</script>


<nav class="w-full h-full flex justify-center items-center p-2">
	<ul class="flex justify-between items-center gap-4 py-4 px-8 bg-[#131212] rounded-full">
		<li>
			<a href="/" class="{$page.url.pathname === '/' ? 'text-white' : 'text-gray-400'}">Main</a>
		</li>
		<li>
			<a href="/nextStonks" class="{$page.url.pathname === '/nextStonks' ? 'text-white' : 'text-gray-400'}">Secondary</a>
		</li>
	</ul>
</nav>

<slot />
