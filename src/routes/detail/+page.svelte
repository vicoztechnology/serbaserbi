<script>
import Modal from './Modal.svelte';

    import {
        navbottom,
        backarrow
    } from '../../lib/stores/stores'
    import {
    Swiper,
    SwiperSlide
} from 'swiper/svelte';
import "swiper/css/pagination"
import {
    Pagination,
    Autoplay
} from "swiper";

// Import Swiper styles
import 'swiper/css';

    $navbottom = 'invisible'
    $backarrow =true
    let showModal = true;
</script>
<svelte:head>
    <title>Detail Produk</title>
    <meta name="description"
    content="detail produk serbaserbi.id">
</svelte:head>

<div class="detail  bg-background-light dark:bg-background-dark text-on-background-light
	dark:text-on-background-dark transition-colors duration-1000" > 
    <div class="pt-16 pl-2 pr-2">
        <Swiper pagination={true}
    modules={[Pagination, Autoplay]}
    spaceBetween={1}
    slidesPerView={1}
    loop={true}
    >
    <SwiperSlide class = "rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/946/500/500.jpg?hmac=e790b958XsD9Y04pYBuhTjFq7FNETblcqo1KdbSz5Tk" alt="banner1" width="500px" height="5000px"></SwiperSlide>
    <SwiperSlide class = "rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/3/500/500.jpg?hmac=1_eo6kK7TmgHDifRp6uCfrJgr7CctEIJZSez1KqbmJg" alt="banner2" width="500px" height="500px"></SwiperSlide>
    <SwiperSlide class = "rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/655/500/500.jpg?hmac=MOF0Weg8WfVekOa7sZzLsoRq5kAZIwwyk7OEvka90n4" alt="banner3" width="500px" height="500px"></SwiperSlide>
    <SwiperSlide class = "rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/360/500/500.jpg?hmac=3fvPpl_8_Y4RdnU4UJiD3xAYDNpQ4eZnAbtNBUw6d-w" alt="banner4" width="500px" height="500px"></SwiperSlide>

</Swiper>
     
    </div>
    <div class="flex mt-3 pl-4 pr-4">
       <div class="basis-1/2 text-on-background-light dark:text-on-background-dark transition-colors duration-1000 nama-produk  text-base font-bold ">
        Daster Payung 25593
       </div>

       <div class="basis-1/2 text-right  ">
           <button class="mr-2">
              <span class=""><svg class="fill-on-background-light dark:fill-on-background-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 15.575q-.2 0-.375-.063-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.712-.288.438-.012.713.263L11 12.15V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v7.15l1.875-1.875q.275-.275.713-.263.437.013.712.288.275.275.275.7 0 .425-.275.7l-3.6 3.6q-.15.15-.325.212-.175.063-.375.063ZM6 20q-.825 0-1.412-.587Q4 18.825 4 18v-2q0-.425.287-.713Q4.575 15 5 15t.713.287Q6 15.575 6 16v2h12v-2q0-.425.288-.713Q18.575 15 19 15t.712.287Q20 15.575 20 16v2q0 .825-.587 1.413Q18.825 20 18 20Z"/></svg></span>
 
           </button>
           <button class="">
              <span class="">
                 <svg class="fill-primary-light dark:fill-primary-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg>
              </span>
           </button>
       </div>
    </div>
    <div class="pr-4 pl-4 text-xl font-bold harga dark:text-error-dark text-error-light transition-colors duration-1000">Rp. 16.000</div>
    <div class="pr-4 pl-4 line-through font-bold harga dark:text-on-surface-variant-dark text-on-surface-variant-light transition-colors duration-1000">Rp. 26.000</div>
    <div class="rating mt-2 pr-4 pl-4 flex">
        <div class="star flex items-center ">
            <span><svg class="fill-primary-light dark:fill-primary-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span>
                <span class="text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000 pl-1">98.</span>&nbsp;&nbsp; Terjual (20)
        </div>

    </div>
    <div class="pb-20 mt-2 ml-2 mr-2 rounded-xl p-2 deskripsi bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000">
        <div class="judul-deskripsi font-bold text-sm pb-1">Deskripsi Produk</div>
        <hr class="border-outline-light dark:border-outline-dark">
        <div class="pt-2  text-justify">
            Daster Payung seri 25593 Produk dari Thalita. Panjang daster kurang lebi 110 cm dan lebar dada sekita 55. Daster Payung seri 25593 Produk dari Thalita. Panjang daster kurang lebi 110 cm dan lebar dada sekita 55. Daster Payung seri 25593 Produk dari Thalita. Panjang daster kurang lebi 110 cm dan lebar dada sekita 55. Daster Payung seri 25593 Produk dari Thalita. Panjang daster kurang lebi 110 cm dan lebar dada sekita 55.
        </div>
    </div>

    <div class="pl-2 pb-2 pr-2 xx flex flex-row fixed bottom-0  inset-x-0 z-30">
        <div class="basis-1/4 text-center">
            <a href="/chat" type="button" class=" transition-colors duration-1000 border-outline-light dark:border-outline-dark border shadow-lg bg-background-light dark:bg-background-dark font-medium rounded-2xl text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
             
              <svg class=" fill-on-surface-light dark:fill-on-surface-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 14h6.025q.425 0 .7-.288Q14 13.425 14 13t-.287-.713Q13.425 12 13 12H6.975q-.425 0-.7.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm0-3h10.025q.425 0 .7-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9H6.975q-.425 0-.7.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0-3h10.025q.425 0 .7-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6H6.975q-.425 0-.7.287Q6 6.575 6 7t.287.713Q6.575 8 7 8ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Zm2-2.4L5.175 16H20V4H4ZM4 4v13.175Z"/></svg>
            </a>
        </div>
        <div class="basis-1/4 text-center">
            <button on:click="{() => showModal = true}" type="button" class="shadow-lg transition-colors duration-1000 text-on-tertiary-container-light dark:text-on-tertiary-container-dark bg-tertiary-container-light dark:bg-tertiary-container-dark font-medium rounded-2xl text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                 <svg class="transition-colors duration-1000 fill-on-tertiary-container-light dark:fill-on-tertiary-container-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 9q-.425 0-.712-.288Q11 8.425 11 8V6H9q-.425 0-.712-.287Q8 5.425 8 5t.288-.713Q8.575 4 9 4h2V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2h2q.425 0 .713.287Q16 4.575 16 5t-.287.713Q15.425 6 15 6h-2v2q0 .425-.287.712Q12.425 9 12 9ZM7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM7 17q-1.15 0-1.737-.988-.588-.987-.013-1.962L6.6 11.6 3 4H2q-.425 0-.712-.288Q1 3.425 1 3t.288-.713Q1.575 2 2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7.025l3.6-6.5q.125-.225.35-.363Q19.725 4 20 4q.575 0 .863.487.287.488.012.988L17.3 11.95q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h11q.425 0 .712.287.288.288.288.713t-.288.712Q18.425 17 18 17Z"/></svg>
              
              </button>
        </div>
      
        <div class="basis-2/4 text-center">
            <button type="button" class="shadow-lg transition-colors duration-1000 text-on-primary-light dark:text-on-primary-dark bg-primary-light dark:bg-primary-dark font-bold rounded-full text-sm px-5 py-3 text-center inline-flex items-center ">
               
                Beli Sekarang
                
              </button>
        </div>
      </div>
      {#if showModal}
	<Modal on:close="{() => showModal = false}" >
<div class="inline-flex items-center">
    <img class="rounded-lg" src="https://i.picsum.photos/id/885/50/50.jpg?hmac=8EfJbEOuT71B-ujc3i_tvU3BeJ6aAGO_kWAqtkGIeKY" alt="gambar produk"/>
    <span class="pl-10">Daster Payung 25593</span>
</div>
<hr class="mt-3">
	<div class="">
        <div class="">Rp. 16.000</div>
    </div>
	</Modal>
{/if}
    
</div>