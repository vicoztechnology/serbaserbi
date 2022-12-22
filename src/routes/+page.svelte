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
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
  <div class="px-3 flex-none">
    <div><img class="rounded-full" src="https://i.picsum.photos/id/607/40/40.jpg?hmac=Ijt6LLEVa-ujGAmafGEmFSO5V2L4pRwneb8M-hwF57I" alt="image" width="40px" height="40px"></div>
    <div>Daster</div>
  </div>
 
</div>
<div class="new">

</div>

  <ul class="grid grid-cols-2 gap-4 pb-20 px-3">
    <li class="rounded-xl bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title font-bold">Sarung Wadimor PX-299393</div>
        <div class="price font-extrabold text-error-light">Rp. 15.000</div>
        <div class="diskon line-through">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star ">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M7.333 14.896 10 13.312l2.688 1.584-.709-3 2.313-1.979-3.063-.271L10 6.792 8.771 9.646l-3.063.271 2.334 1.979Zm2.667.166-3.417 2.042q-.229.125-.448.104-.218-.02-.385-.146-.167-.124-.25-.343-.083-.219-.021-.448l.896-3.813-3.021-2.562q-.187-.167-.229-.386-.042-.218.021-.427.062-.208.229-.343.167-.136.417-.157l3.958-.354 1.562-3.625q.105-.229.292-.344.188-.114.396-.114.208 0 .396.114.187.115.292.344L12.25 8.25l3.958.333q.25.021.417.167.167.146.229.354.063.208.011.417-.053.208-.24.375l-3 2.562.896 3.813q.062.229-.021.448t-.25.343q-.167.126-.385.146-.219.021-.448-.104Zm0-4Z"/></svg> </span> 
          </div>
       
        </div>
      </div>
    </li>
    <li class="rounded-xl  bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/183/250/250.jpg?hmac=7EBRoHK5JoetavOqWnoN9KKT2hlrVozE2bwQJosPriQ" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title font-bold">Daster Payung SN-012993</div>
        <div class="price font-extrabold text-error-light">Rp. 12.000</div>
        <div class="diskon line-through">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star ">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M7.333 14.896 10 13.312l2.688 1.584-.709-3 2.313-1.979-3.063-.271L10 6.792 8.771 9.646l-3.063.271 2.334 1.979Zm2.667.166-3.417 2.042q-.229.125-.448.104-.218-.02-.385-.146-.167-.124-.25-.343-.083-.219-.021-.448l.896-3.813-3.021-2.562q-.187-.167-.229-.386-.042-.218.021-.427.062-.208.229-.343.167-.136.417-.157l3.958-.354 1.562-3.625q.105-.229.292-.344.188-.114.396-.114.208 0 .396.114.187.115.292.344L12.25 8.25l3.958.333q.25.021.417.167.167.146.229.354.063.208.011.417-.053.208-.24.375l-3 2.562.896 3.813q.062.229-.021.448t-.25.343q-.167.126-.385.146-.219.021-.448-.104Zm0-4Z"/></svg> </span> 
          </div>
       
        </div>
      </div>
    </li>
    <li class="rounded-xl bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title font-bold">Sarung Wadimor PX-299393</div>
        <div class="price font-extrabold text-error-light">Rp. 15.000</div>
        <div class="diskon line-through">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star ">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M7.333 14.896 10 13.312l2.688 1.584-.709-3 2.313-1.979-3.063-.271L10 6.792 8.771 9.646l-3.063.271 2.334 1.979Zm2.667.166-3.417 2.042q-.229.125-.448.104-.218-.02-.385-.146-.167-.124-.25-.343-.083-.219-.021-.448l.896-3.813-3.021-2.562q-.187-.167-.229-.386-.042-.218.021-.427.062-.208.229-.343.167-.136.417-.157l3.958-.354 1.562-3.625q.105-.229.292-.344.188-.114.396-.114.208 0 .396.114.187.115.292.344L12.25 8.25l3.958.333q.25.021.417.167.167.146.229.354.063.208.011.417-.053.208-.24.375l-3 2.562.896 3.813q.062.229-.021.448t-.25.343q-.167.126-.385.146-.219.021-.448-.104Zm0-4Z"/></svg> </span> 
          </div>
       
        </div>
      </div>
    </li>
    <li class="rounded-xl  bg-surface-light border border-outline-light pb-3">
      <div class="rounded-xl image">
        <img class="rounded-xl" src="https://i.picsum.photos/id/183/250/250.jpg?hmac=7EBRoHK5JoetavOqWnoN9KKT2hlrVozE2bwQJosPriQ" alt="sdf sdf" width="250px" height="250px">
      </div>
      <div class="px-2">
        <div class="title font-bold">Daster Payung SN-012993</div>
        <div class="price font-extrabold text-error-light">Rp. 12.000</div>
        <div class="diskon line-through">Rp. 25.000</div>
        <div class="rating flex">
          <div class="star ">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M7.333 14.896 10 13.312l2.688 1.584-.709-3 2.313-1.979-3.063-.271L10 6.792 8.771 9.646l-3.063.271 2.334 1.979Zm2.667.166-3.417 2.042q-.229.125-.448.104-.218-.02-.385-.146-.167-.124-.25-.343-.083-.219-.021-.448l.896-3.813-3.021-2.562q-.187-.167-.229-.386-.042-.218.021-.427.062-.208.229-.343.167-.136.417-.157l3.958-.354 1.562-3.625q.105-.229.292-.344.188-.114.396-.114.208 0 .396.114.187.115.292.344L12.25 8.25l3.958.333q.25.021.417.167.167.146.229.354.063.208.011.417-.053.208-.24.375l-3 2.562.896 3.813q.062.229-.021.448t-.25.343q-.167.126-.385.146-.219.021-.448-.104Zm0-4Z"/></svg> </span> 
          </div>
       
        </div>
      </div>
    </li>
    

  </ul >
<style>
 
</style>