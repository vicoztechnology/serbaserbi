<script>

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
</script>
<svelte:head>
    <title>Detail Produk</title>
    <meta name="description"
    content="detail produk serbaserbi.id">
</svelte:head>

<div class="detail h-screen  bg-background-light dark:bg-background-dark text-on-background-light
	dark:text-on-background-dark transition-colors duration-1000 pr-2 pl-2" > 
    <div class="pt-16 ">
        <Swiper 
    pagination={true}
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
    <div class="flex mt-3 pl-2 pr-2">
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
    <div class="pr-2 pl-2 text-xl font-bold harga dark:text-error-dark text-error-light transition-colors duration-1000">Rp. 16.000</div>
    <div class="pr-2 pl-2 line-through font-bold harga dark:text-on-surface-variant-dark text-on-surface-variant-light transition-colors duration-1000">Rp. 26.000</div>
    <div class="rating mt-2pr-2 pl-2 flex">
        <div class="star flex items-center ">
            <span><svg class="fill-primary-light dark:fill-primary-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span>
                <span class="text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000 pl-1">98.</span>&nbsp;&nbsp; Terjual (20)
        </div>

    </div>
    <div class="rounded-xl p-2 deskripsi bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000">
        <div class="judul-deskripsi font-bold text-sm pb-1">Deskripsi Produk</div>
        <hr class="border-outline-light dark:border-outline-dark">
        <div class="pt-2  text-justify">
            Daster Payung seri 25593 Produk dari Thalita. Panjang daster kurang lebi 110 cm dan lebar dada sekita 55. Daster Payung seri 25593 Produk dari Thalita. Panjang daster kurang lebi 110 cm dan lebar dada sekita 55. Daster Payung seri 25593 Produk dari Thalita. Panjang daster kurang lebi 110 cm dan lebar dada sekita 55. Daster Payung seri 25593 Produk dari Thalita. Panjang daster kurang lebi 110 cm dan lebar dada sekita 55.
        </div>
    </div>
    
</div>