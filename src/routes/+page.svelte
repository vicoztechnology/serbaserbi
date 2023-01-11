<script>
// @ts-nocheck

      import {navbottom, backarrow} from '../lib/stores/stores'

$navbottom='visible'
// @ts-nocheck

// Import Swiper Svelte components
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
import { fade } from 'svelte/transition'


$navbottom = 'visible'
$backarrow = false
</script>
<svelte:head>
    <title>Serbaserbi Sahabat Reseller</title>
    <meta name="description"
    content="serbaserbi.id: temukan harga termurah untuk Daster, Mukena, Gamis, Kulot, Celana pendek">
</svelte:head>
<div class="" transition:fade="{{delay: 250, duration: 300}}">
<div class="mt-1">
<Swiper
    pagination={true}
    modules={[Pagination, Autoplay]}
    spaceBetween={1}
    slidesPerView={1}
    loop={true}
    autoplay={{
    delay:2500,
    disableOnInteraction:false,
    }}

    >
    <SwiperSlide class = "py-3 px-3 rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/26/500/250.jpg?hmac=aEMDV8A-c0ciLRML8vyh9VN_ur-69jZxJjlwNbyQOEc" alt="banner1" width="500px" height="250px"></SwiperSlide>
    <SwiperSlide class = "py-3 px-3 rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/1066/500/250.jpg?hmac=pokx9pD_tKNT127IchfxrNPfCjxRtPHRK-m-b6dgrqM" alt="banner2" width="500px" height="250px"></SwiperSlide>
    <SwiperSlide class = "py-3 px-3 rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/26/500/250.jpg?hmac=aEMDV8A-c0ciLRML8vyh9VN_ur-69jZxJjlwNbyQOEc" alt="banner3" width="500px" height="250px"></SwiperSlide>
    <SwiperSlide class = "py-3 px-3 rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/1066/500/250.jpg?hmac=pokx9pD_tKNT127IchfxrNPfCjxRtPHRK-m-b6dgrqM" alt="banner4" width="500px" height="250px"></SwiperSlide>

</Swiper>
</div>
<div class="px-3 font-extrabold text-on-background-light dark:text-on-background-dark">
    Kategori
</div>
<div class="flex py-3 no-scrollbar overflow-x-scroll text-on-background-light dark:text-on-background-dark">
    <div class="px-3 flex-none">
        <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image1" width="40px" height="40px"></div>
        <div class="pt-2 text-center">Daster</div>
    </div>
    <div class="px-3 flex-none">
        <div><img class="rounded-full" src="https://i.picsum.photos/id/900/40/40.jpg?hmac=EUjE6QnfVntL1F4XQ3Bid65_0c2TL21end0F0zZH05A" alt="image2" width="40px" height="40px"></div>
        <div class="pt-2 text-center">Gamis</div>
    </div>
    <div class="px-3 flex-none">
        <div><img class="rounded-full" src="https://i.picsum.photos/id/519/40/40.jpg?hmac=aiBS9v5JpuTaz-HtO491Ua6aWmNWEnaAM881fKspX1o" alt="image3" width="40px" height="40px"></div>
        <div class="pt-2 text-center">Celana</div>
    </div>
    <div class="px-3 flex-none">
        <div><img class="rounded-full" src="https://i.picsum.photos/id/82/40/40.jpg?hmac=daXEubMPIeHeLdu2Nr1snGuwqWZoDN-_FuKA2r5sNFU" alt="image4" width="40px" height="40px"></div>
        <div class="pt-2 text-center">Gerabah</div>
    </div>
    <div class="px-3 flex-none">
        <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image5" width="40px" height="40px"></div>
        <div class="pt-2 text-center">Daster</div>
    </div>


</div>
<div class="flex py-1 px-3 bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-background-dark font-extrabold ">
    <div class="basis-1/2"> Promo</div>
    <div class="basis-1/2  text-right"> Lihat semuanya</div>

</div>
<div class=" promo-content bg-surface-light dark:bg-surface-dark flex px-3 py-2 no-scrollbar overflow-x-scroll">
    <div class="flex-none text-on-tertiary-container-light dark:text-on-tertiary-container-dark bg-tertiary-container-light dark:bg-tertiary-container-dark rounded-xl mr-2">
        <div><img class="rounded-xl" src="https://i.picsum.photos/id/928/100/125.jpg?hmac=CL0GU-EKGfYFlTJAO6UT1LeLBzZUuJJOx46KFW7J3-k" width="100px" height="125px" alt="promo1"></div>
        <div class="px-1 pb-2">
            <div class="pt-1">Daster</div>
            <div class="price ">Rp. 15.000</div>
            <div class="diskon line-through ">Rp. 25.000</div>
        </div>
    </div>
    <div class="flex-none text-on-tertiary-container-light dark:text-on-tertiary-container-dark  dark:bg-tertiary-container-dark bg-tertiary-container-light rounded-xl mr-2">
        <div><img class="rounded-xl" src="https://i.picsum.photos/id/797/100/125.jpg?hmac=Jp458S5p49U-lYoCAKhIbulHdtiBryjflYV5SJ3C0lA" width="100px" height="125px" alt="promo1"></div>
        <div class="px-1 pb-2">
            <div class="pt-1">Daster</div>
            <div class="price ">Rp. 15.000</div>
            <div class="diskon line-through ">Rp. 25.000</div>
        </div>
    </div>
    <div class="flex-none text-on-tertiary-container-light dark:text-on-tertiary-container-dark bg-tertiary-container-light dark:bg-tertiary-container-dark rounded-xl mr-2">
        <div><img class="rounded-xl" src="https://i.picsum.photos/id/347/100/125.jpg?hmac=cZzkK19O2njZenWInoBtOJ9Qs8Ehb6o-vCdNNhdfg78" width="100px" height="125px" alt="promo3"></div>
        <div class="px-1 pb-2">
            <div class="pt-1">Daster</div>
            <div class="price ">Rp. 15.000</div>
            <div class="diskon line-through ">Rp. 25.000</div>
        </div>
    </div>
    <div class="flex-none text-on-tertiary-container-light dark:text-on-tertiary-container-dark bg-tertiary-container-light dark:bg-tertiary-container-dark rounded-xl mr-2">
        <div><img class="rounded-xl" src="https://i.picsum.photos/id/866/100/125.jpg?hmac=y60j2O9JI84iCxClNCjW3z3ALAMkIj3SlYDnKD-jzbs" width="100px" height="125px" alt="promo4"></div>
        <div class="px-1 pb-2">
            <div class="pt-1">Daster</div>
            <div class="price ">Rp. 15.000</div>
            <div class="diskon line-through ">Rp. 25.000</div>
        </div>
    </div>

</div>

<div class="flex py-1 px-3 font-extrabold text-on-background-light dark:text-on-background-dark">
    <div class="basis-1/2"> Terbaru</div>
    <div class="basis-1/2 text-right"> Lihat semuanya</div>

</div>
<ul class="grid grid-cols-2 gap-4 pb-20 px-3">
    <li class="rounded-xl bg-surface-light dark:bg-surface-dark border border-outline-light dark:border-outline-dark pb-3">
        <div class="rounded-xl image">
            <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
        </div>
        <div class="px-2">
            <div class="title text-sm font-bold text-on-surface-light dark:text-on-surface-dark ">Sarung Wadimor PX-299393</div>
            <div class="price text-sm font-bold text-error-light dark:text-error-dark ">Rp. 15.000</div>
            <div class="diskon line-through text-on-surface-variant-light dark:text-on-surface-variant-dark">Rp. 25.000</div>
            <div class="rating flex">
                <div class="star flex items-center ">
                    <span><svg class="fill-primary-light dark:fill-primary-dark" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span>
                        <span class="text-on-surface-light pl-1">98</span>
                </div>

            </div>
        </div>
    </li>
    <li class="rounded-xl bg-surface-light dark:bg-surface-dark border border-outline-light dark:border-outline-dark pb-3">
      <div class="rounded-xl image">
          <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
          <div class="title text-sm font-bold text-on-surface-light dark:text-on-surface-dark ">Sarung Wadimor PX-299393</div>
          <div class="price text-sm font-bold text-error-light dark:text-error-dark ">Rp. 15.000</div>
          <div class="diskon line-through text-on-surface-variant-light dark:text-on-surface-variant-dark">Rp. 25.000</div>
          <div class="rating flex">
              <div class="star flex items-center ">
                  <span><svg class="fill-primary-light dark:fill-primary-dark" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span>
                      <span class="text-on-surface-light pl-1">98</span>
              </div>

          </div>
      </div>
  </li>
  <li class="rounded-xl bg-surface-light dark:bg-surface-dark border border-outline-light dark:border-outline-dark pb-3">
    <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
    </div>
    <div class="px-2">
        <div class="title text-sm font-bold text-on-surface-light dark:text-on-surface-dark ">Sarung Wadimor PX-299393</div>
        <div class="price text-sm font-bold text-error-light dark:text-error-dark ">Rp. 15.000</div>
        <div class="diskon line-through text-on-surface-variant-light dark:text-on-surface-variant-dark">Rp. 25.000</div>
        <div class="rating flex">
            <div class="star flex items-center ">
                <span><svg class="fill-primary-light dark:fill-primary-dark" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span>
                    <span class="text-on-surface-light pl-1">98</span>
            </div>

        </div>
    </div>
</li>
                       
</ul >
</div>

