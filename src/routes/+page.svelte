<script>
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

<style>
 
</style>