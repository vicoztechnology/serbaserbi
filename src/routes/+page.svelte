<script>
// @ts-nocheck

  // Import Swiper Svelte components
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import "swiper/css/pagination"
  import { Pagination, Autoplay } from "swiper";

  // Import Swiper styles
  import 'swiper/css';
  </script>

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
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
  >
    <SwiperSlide class = "py-3 px-3 rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/26/500/250.jpg?hmac=aEMDV8A-c0ciLRML8vyh9VN_ur-69jZxJjlwNbyQOEc" alt="banner1" width="500px" height="250px"></SwiperSlide>
    <SwiperSlide class = "py-3 px-3 rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/1066/500/250.jpg?hmac=pokx9pD_tKNT127IchfxrNPfCjxRtPHRK-m-b6dgrqM" alt="banner2" width="500px" height="250px"></SwiperSlide>
    <SwiperSlide class = "py-3 px-3 rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/26/500/250.jpg?hmac=aEMDV8A-c0ciLRML8vyh9VN_ur-69jZxJjlwNbyQOEc" alt="banner3" width="500px" height="250px"></SwiperSlide>
    <SwiperSlide class = "py-3 px-3 rounded-3xl"><img class="rounded-3xl" src="https://i.picsum.photos/id/1066/500/250.jpg?hmac=pokx9pD_tKNT127IchfxrNPfCjxRtPHRK-m-b6dgrqM" alt="banner4" width="500px" height="250px"></SwiperSlide>
   
    
  </Swiper>
<div class="px-3 font-extrabold">
  Kategori
</div>
<div class="flex py-3 no-scrollbar overflow-x-scroll">
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div class="pt-2 text-center">Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/900/40/40.jpg?hmac=EUjE6QnfVntL1F4XQ3Bid65_0c2TL21end0F0zZH05A" alt="image" width="40px" height="40px"></div>
    <div class="pt-2 text-center">Gamis</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/519/40/40.jpg?hmac=aiBS9v5JpuTaz-HtO491Ua6aWmNWEnaAM881fKspX1o" alt="image" width="40px" height="40px"></div>
    <div class="pt-2 text-center">Celana</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/82/40/40.jpg?hmac=daXEubMPIeHeLdu2Nr1snGuwqWZoDN-_FuKA2r5sNFU" alt="image" width="40px" height="40px"></div>
    <div class="pt-2 text-center">Gerabah</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div class="pt-2 text-center">Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div class="pt-2 text-center">Daster</div>
  </div>

</div>
<div class="flex py-1 px-3 text-on-tertiary-container-light font-extrabold bg-tertiary-container-light">
  <div class="basis-1/2"> Promo</div>
  <div class="basis-1/2  text-right"> Lihat semuanya</div>
 
</div>
<div class=" promo-content text-on-tertiary-container-light bg-tertiary-container-light flex px-3 py-3 no-scrollbar overflow-x-scroll">
  <div class="pr-3 flex-none">
    <div><img class="rounded-xl" src="https://i.picsum.photos/id/988/75/100.jpg?hmac=6d3TiNvb7sfZ6qyHN7Yf6tHz-lPtTb09Ww5JcadEiJ4" width="75px" height="100px"></div>
    <div class="pt-1">Daster</div>
    <div class="price ">Rp. 15.000</div>
    <div class="diskon line-through ">Rp. 25.000</div>
  </div>
  <div class="pr-3 flex-none">
    <div><img class="rounded-xl" src="https://i.picsum.photos/id/887/75/100.jpg?hmac=ns9nVUOu5Dc3tMCB8BSAzZSq4l6pWtuke7LugMz9JrY"  width="75px" height="100px"></div>
    <div class="pt-1">Daster</div>
    <div class="price">Rp. 15.000</div>
    <div class="diskon line-through ">Rp. 25.000</div>
  </div>
  
  <div class="pr-3 flex-none">
    <div><img class="rounded-xl" src="https://i.picsum.photos/id/988/75/100.jpg?hmac=6d3TiNvb7sfZ6qyHN7Yf6tHz-lPtTb09Ww5JcadEiJ4" width="75px" height="100px"></div>
    <div class="pt-1">Daster</div>
    <div class="price ">Rp. 15.000</div>
    <div class="diskon line-through ">Rp. 25.000</div>
  </div>
  <div class="pr-3 flex-none">
    <div><img class="rounded-xl" src="https://i.picsum.photos/id/887/75/100.jpg?hmac=ns9nVUOu5Dc3tMCB8BSAzZSq4l6pWtuke7LugMz9JrY"  width="75px" height="100px"></div>
    <div class="pt-1">Daster</div>
    <div class="price">Rp. 15.000</div>
    <div class="diskon line-through ">Rp. 25.000</div>
  </div>
 
</div>

<div class="flex py-1 px-3 font-extrabold">
  <div class="basis-1/2"> Terbaru</div>
  <div class="basis-1/2 text-right"> Lihat semuanya</div>
 
</div>
  <ul class="grid grid-cols-2 gap-4 pb-20 px-3">
    <li class="rounded-xl bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title text-sm font-bold text-on-surface-light">Sarung Wadimor PX-299393</div>
        <div class="price text-sm font-bold text-error-light">Rp. 15.000</div>
        <div class="diskon line-through text-on-surface-variant-light">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star flex items-center ">
            <span><svg class="fill-primary-light" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span> 
         <span class="text-on-surface-light pl-1">98</span>
          </div>
       
        </div>
      </div>
    </li>
    <li class="rounded-xl bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title text-sm font-bold text-on-surface-light">Sarung Wadimor PX-299393</div>
        <div class="price text-sm font-extrabold text-error-light">Rp. 15.000</div>
        <div class="diskon line-through text-on-surface-variant-light">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star flex items-center ">
            <span><svg class="fill-primary-light" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span> 
         <span class="text-on-surface-light pl-1">98</span>
          </div>
       
        </div>
      </div>
    </li>
    <li class="rounded-xl bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title text-sm font-bold text-on-surface-light">Sarung Wadimor PX-299393</div>
        <div class="price text-sm font-extrabold text-error-light">Rp. 15.000</div>
        <div class="diskon line-through text-on-surface-variant-light">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star flex items-center ">
            <span><svg class="fill-primary-light" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span> 
         <span class="text-on-surface-light pl-1">98</span>
          </div>
       
        </div>
      </div>
    </li>
    <li class="rounded-xl bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title text-sm font-bold text-on-surface-light">Sarung Wadimor PX-299393</div>
        <div class="price text-sm font-extrabold text-error-light">Rp. 15.000</div>
        <div class="diskon line-through text-on-surface-variant-light">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star flex items-center ">
            <span><svg class="fill-primary-light" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span> 
         <span class="text-on-surface-light pl-1">98</span>
          </div>
       
        </div>
      </div>
    </li>
    <li class="rounded-xl bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title text-sm font-bold text-on-surface-light">Sarung Wadimor PX-299393</div>
        <div class="price text-sm font-extrabold text-error-light">Rp. 15.000</div>
        <div class="diskon line-through text-on-surface-variant-light">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star flex items-center ">
            <span><svg class="fill-primary-light" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span> 
         <span class="text-on-surface-light pl-1">98</span>
          </div>
       
        </div>
      </div>
    </li>
    <li class="rounded-xl bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title text-sm font-bold text-on-surface-light">Sarung Wadimor PX-299393</div>
        <div class="price text-sm font-extrabold text-error-light">Rp. 15.000</div>
        <div class="diskon line-through text-on-surface-variant-light">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star flex items-center ">
            <span><svg class="fill-primary-light" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span> 
         <span class="text-on-surface-light pl-1">98</span>
          </div>
       
        </div>
      </div>
    </li>
    
    

  </ul >
<style>
 
</style>