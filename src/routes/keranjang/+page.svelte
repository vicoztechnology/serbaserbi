<script>
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<PageTransition>
	<div
		class="keranjang text-on-background-light dark:text-on-background-dark transition-colors duration-1000"
	>
		<div
			class="pt-14 pl-4 pr-4 divide-y divide-outline-variant-light dark:divide-outline-variant-dark  "
		>
			<div class="pt-2 pb-2">
				<div class="flex">
					<div class="my-top">
						<input
							id="check1"
							type="checkbox"
							class="accent-primary-light dark:accent-primary-dark transition-colors duration-1000 "
							checked
						/>
					</div>
					<label for="check1" class="flex">
						<div class="flex-none my-top">
							<img
								src="https://fastly.picsum.photos/id/1071/50/50.jpg?hmac=8UEBgUSeqRWF6cy_Hgn3imi8Sjt-AZFtGtnInAiMrKA"
								alt="gambar promo"
								loading="lazy"
								class="inset-0 rounded-xl ml-4"
							/>
						</div>
						<div class="ml-4">
							<div class="font-semibold text-sm">Daster Payung 25593</div>
							<div class=" font-extrabold text-base">Rp. 5.3434</div>

							<div
								class="line-through text-on-surface-variant-light dark:text-on-surface-variant-dark transition-colors duration-1000"
							>
								Rp. 5.3434
							</div>
							<!--<div class="mt-3 flex">
				
							</div> -->
						</div>
						<br />
					</label>
				</div>
				<div class="flex justify-end mr-4 mt-4">
					<span
						><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
							><path
								class="fill-primary-light dark:fill-primary-dark transition-colors duration-1000"
								d="m10.65 19.8-1.725-1.575q-2.65-2.425-4.787-4.813Q2 11.025 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.325 0 2.5.562 1.175.563 2 1.538.825-.975 2-1.538 1.175-.562 2.5-.562 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 2.875-2.125 5.275-2.125 2.4-4.825 4.825l-1.7 1.55q-.575.525-1.35.525-.775 0-1.35-.525Z"
							/></svg
						>
					</span>
					<span class="ml-3">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
							><path
								class="fill-on-surface-variant-light dark:fill-on-surface-variant-dark transition-colors duration-1000"
								d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-5q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9Z"
							/></svg
						>
					</span>
					<span class="ml-10">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
							><path
								class="fill-on-surface-variant-light dark:fill-on-surface-variant-dark transition-colors duration-1000"
								d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3h3q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11h-3V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h3v3q0 .425.288.712.287.288.712.288Zm-7 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm0 0V5v14Z"
							/></svg
						>
					</span>
					<span class="ml-2 text-xl">2</span>
					<span class="ml-2">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
							><path
								class="fill-on-surface-variant-light dark:fill-on-surface-variant-dark transition-colors duration-1000"
								d="M8 13h8q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm-3 8q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm0 0V5v14Z"
							/></svg
						>
					</span>
				</div>
			</div>
			<div class="pt-2 pb-2">
				<div class="flex">
					<div class="my-top">
						<input
							id="check2"
							type="checkbox"
							class="accent-primary-light dark:accent-primary-dark transition-colors duration-1000 "
							checked
						/>
					</div>
					<label for="check2" class="flex">
						<div class="flex-none my-top">
							<img
								src="https://fastly.picsum.photos/id/1071/50/50.jpg?hmac=8UEBgUSeqRWF6cy_Hgn3imi8Sjt-AZFtGtnInAiMrKA"
								alt="gambar promo"
								loading="lazy"
								class="inset-0 rounded-xl ml-4"
							/>
						</div>
						<div class="ml-4">
							<div class="font-semibold text-sm">Daster Payung 25593</div>
							<div class=" font-extrabold text-base">Rp. 5.3434</div>

							<div
								class="line-through text-on-surface-variant-light dark:text-on-surface-variant-dark transition-colors duration-1000"
							>
								Rp. 5.3434
							</div>
							<!--<div class="mt-3 flex">
				
							</div> -->
						</div>
						<br />
					</label>
				</div>
				<div class="flex justify-end mr-4 mt-4">
					<span
						><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
							><path
								class="fill-primary-light dark:fill-primary-dark transition-colors duration-1000"
								d="m10.65 19.8-1.725-1.575q-2.65-2.425-4.787-4.813Q2 11.025 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.325 0 2.5.562 1.175.563 2 1.538.825-.975 2-1.538 1.175-.562 2.5-.562 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 2.875-2.125 5.275-2.125 2.4-4.825 4.825l-1.7 1.55q-.575.525-1.35.525-.775 0-1.35-.525Z"
							/></svg
						>
					</span>
					<span class="ml-3">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
							><path
								class="fill-on-surface-variant-light dark:fill-on-surface-variant-dark transition-colors duration-1000"
								d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-5q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9Z"
							/></svg
						>
					</span>
					<span class="ml-10">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
							><path
								class="fill-on-surface-variant-light dark:fill-on-surface-variant-dark transition-colors duration-1000"
								d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3h3q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11h-3V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h3v3q0 .425.288.712.287.288.712.288Zm-7 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm0 0V5v14Z"
							/></svg
						>
					</span>
					<span class="ml-2 text-xl ">2</span>
					<span class="ml-2">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
							><path
								class="fill-on-surface-variant-light dark:fill-on-surface-variant-dark transition-colors duration-1000"
								d="M8 13h8q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm-3 8q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm0 0V5v14Z"
							/></svg
						>
					</span>
				</div>
			</div>
		</div>

		<div
			class="bottom-0 pl-2 pt-2 pb-2 pr-2 xx bg-surface-light dark:bg-surface-dark flex flex-row fixed   inset-x-0 z-30"
		>
			<div class="basis-1/5 text-center">
				<input
					id="checktotal"
					type="checkbox"
					class="accent-primary-light dark:accent-primary-dark transition-colors duration-1000 "
					checked
				/>
				<div class="">
					<label
						for="checktotal"
						class="text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000"
						>Semua</label
					>
				</div>
			</div>

			<div class="basis-3/5 text-center">
				<div
					class="text-base font-bold text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000"
				>
					Total
				</div>
				<div
					class="text-base font-bold text-error-light dark:text-error-dark transition-colors duration-1000"
				>
					Rp. 3.000.000
				</div>
			</div>

			<div class="basis-1/5 text-center pr-4">
				<button
					type="button"
					class=" transition-colors duration-1000 text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark font-bold rounded-full text-sm px-5 py-3 text-center inline-flex items-center "
				>
					CheckOut
				</button>
			</div>
		</div>
	</div></PageTransition
>
