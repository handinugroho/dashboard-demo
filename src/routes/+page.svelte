<script lang="ts">
	import PhCurrencyDollar from '~icons/ph/currency-dollar';
	import PhCalendarBlank from '~icons/ph/calendar-blank';
	import MaterialSymbolsFilterListRounded from '~icons/material-symbols/filter-list-rounded';
</script>

<div class="space-y-8">
	<div class="space-y-4">
		<div class="flex flex-row justify-between">
			<div class="">
				<h2 class="h2">Dashboard Finansialmu</h2>
				<p class="text-[#697586]">Welcome back, {'Hello'}!</p>
			</div>
			<div class="flex flex-row items-start gap-x-4">
				<button type="button" class="btn btn-sm variant-ringed rounded-md">
					<PhCurrencyDollar class="mr-2" />
					Deposit
				</button>
				<button type="button" class="btn btn-sm bg-[#155EEF] variant-ringed rounded-md text-white"
					>Kirim Uang</button
				>
			</div>
		</div>
		<div class="flex flex-row justify-between">
			<div class="btn-group variant-ringed rounded-md [&>*]:btn-sm">
				<button>24 Jam</button>
				<button>7 Hari</button>
				<button>30 Hari</button>
				<button>12 Bulan</button>
			</div>
			<div class="flex flex-row items-start gap-x-4">
				<button type="button" class="btn btn-sm variant-ringed rounded-md">
					<PhCalendarBlank class="mr-2" />
					Pilih Tanggal
				</button>
				<button type="button" class="btn btn-sm variant-ringed rounded-md">
					<MaterialSymbolsFilterListRounded class="mr-2" /> Filter
				</button>
			</div>
		</div>
	</div>
	<div class="">asd</div>
	<div class="">asd</div>
</div>
