<script lang="ts">
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import Sidebar from '../lib/components/ui/Sidebar.svelte';
</script>

<div class="layout">
	<Sidebar />
	<div id="main" class="pt-8 pb-12 px-8">
		<slot />
	</div>
</div>
