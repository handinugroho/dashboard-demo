<script lang="ts">
	import PhHouse from '~icons/ph/house';
	import PhChartBar from '~icons/ph/chart-bar';
	import PhStack from '~icons/ph/stack';
	import PhCheckSquareOffset from '~icons/ph/check-square-offset';
	import PhUsers from '~icons/ph/users';
	import PhGear from '~icons/ph/gear';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div id="sidebar" class="flex flex-col justify-between px-4 w-full text-[#697586]">
	<div class="pt-8 mx-auto">
		<nav>
			<ul class="list-none space-y-4">
				<li>
					<a href="/">
						<PhHouse />
					</a>
				</li>
				<li>
					<a href="/">
						<PhChartBar />
					</a>
				</li>
				<li>
					<a href="/">
						<PhStack />
					</a>
				</li>
				<li>
					<a href="/">
						<PhCheckSquareOffset />
					</a>
				</li>
				<li>
					<a href="/">
						<PhUsers />
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="py-6">
		<div class="space-y-4 mx-auto flex flex-col items-center">
			<a href="/" class="text-center" title="Setting"><PhGear /> </a>
			<div class="border-t w-full" />
			<Avatar
				src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
				width="w-12"
				rounded="rounded-full"
			/>
		</div>
	</div>
</div>
