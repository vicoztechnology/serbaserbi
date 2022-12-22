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
  <br>
  <br>
<div class="flex overflow-x-scroll">
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
  <ul class="grid grid-cols-2 gap-4">
    <li>01</li>
    <li>02</li>
    <li>03</li>
    <li>04</li>
    <li>05</li>
    <li>06</li>
    <li>07</li>
    <li>08</li>
    <li>09</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
  </ul>
<style>
 
</style>