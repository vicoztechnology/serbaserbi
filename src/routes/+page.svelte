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
<div class="px-3">
  Kategori
</div>
<div class="flex py-3 no-scrollbar overflow-x-scroll">
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image"></div>
    <div>Daster</div>
  </div>
 
</div>
<div class="new">

</div>
  <ul class="grid grid-cols-2 gap-4 pb-20 px-3">
    <li class="rounded-lg bg-surface-light">
      <div class="rounded-lg image">
        <img class="rounded-lg" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf">
      </div>
      <div class="pl-2">
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
      </div>
    </li>
    <li class="rounded-lg  bg-surface-light">
      <div class="rounded-lg image">
        <img class="rounded-lg" src="https://i.picsum.photos/id/183/250/250.jpg?hmac=7EBRoHK5JoetavOqWnoN9KKT2hlrVozE2bwQJosPriQ" alt="sdf sdf">
      </div>
      <div class="pl-2">
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
      </div>
    </li>
    <li class="rounded-lg bg-surface-light">
      <div class="rounded-lg image">
        <img class="rounded-lg" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf">
      </div>
      <div class="pl-2">
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
      </div>
    </li>
    <li class="rounded-lg  bg-surface-light">
      <div class="rounded-lg image">
        <img class="rounded-lg" src="https://i.picsum.photos/id/183/250/250.jpg?hmac=7EBRoHK5JoetavOqWnoN9KKT2hlrVozE2bwQJosPriQ" alt="sdf sdf">
      </div>
      <div class="pl-2">
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
        <div class="Name">sdfsdfsdf</div>
      </div>
    </li>
    

  </ul >
<style>
 
</style>