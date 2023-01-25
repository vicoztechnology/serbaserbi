<script>
import PageTransition from '$lib/components/PageTransition.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>
<div class="notifikasi  text-on-background-light dark:text-on-background-dark transition-colors duration-1000 mt-20">
    <div class="flex xx justify-center inset-x-0 z-10 fixed  bg-surface-light dark:bg-surface-dark top-12 text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000 border-b border-surface-variant-light dark:border-surface-variant-dark"> 
        <div class="basis-1/2 content-center text-center border-b-2 border-primary-light dark:border-primary-dark">
            <div id="tab" class="bg-gray-100 w-full focus:text-teal-500 hover:text-teal-500 flex py-1 justify-center">
                <a class="w-full" href="/notifikasi">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto fill-primary-light dark:fill-primary-dark" height="24" width="24"><path d="M14.25 21.4q-.575.575-1.425.575-.85 0-1.425-.575l-8.8-8.8q-.275-.275-.437-.65Q2 11.575 2 11.15V4q0-.825.588-1.413Q3.175 2 4 2h7.15q.425 0 .8.162.375.163.65.438l8.8 8.825q.575.575.575 1.412 0 .838-.575 1.413ZM6.5 8q.625 0 1.062-.438Q8 7.125 8 6.5t-.438-1.062Q7.125 5 6.5 5t-1.062.438Q5 5.875 5 6.5t.438 1.062Q5.875 8 6.5 8Z"/></svg>
                                <span class="text-primary-light dark:text-primary-dark font-bold">Promo</span>
                </a>
              </div>
              
        </div>
        <div class="basis-1/2 content-center text-center">
            <div id="tab" class="bg-gray-100 w-full focus:text-teal-500 hover:text-teal-500 flex py-1 justify-center">
                <a class="w-full" href="/notifikasi/info">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto fill-on-surface-variant-light dark:fill-on-surface-variant-dark" height="24" width="24"><path d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/></svg>
                  <span class="text-on-surface-variant-light dark:text-on-surface-variant-dark">Informasi</span>
                </a>
              </div>
              
        </div>
    </div>

</div>
<PageTransition pathname={data.pathname}>
    <slot />
</PageTransition>
<style></style>