<script>

    import {
        navbottom,
        backarrow
    } from '../../lib/stores/stores'
    
    $navbottom = 'invisible'
    $backarrow =true
    </script>
    <svelte:head>
        <title>Kategori serbaserbi</title>
        <meta name="description"
        content="kategori serbaserbi.id">
    </svelte:head>

<div
	class="kategori h-screen bg-background-light dark:bg-background-dark text-on-background-light
	dark:text-on-background-dark transition-colors duration-1000" > 
    <div class="subkategori flex flex-row no-scrollbar overflow-x-scroll pt-16 pl-4 pr-4">
          <button class=" mr-2 whitespace-nowrap rounded-full pt-2 pb-2 pr-4 pl-4 bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark transition-colors duration-1000" >Payung Jumbo</button>
          <button class=" mr-2 whitespace-nowrap rounded-full pt-2 pb-2 pr-4 pl-4 bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000" >Muslim</button>
          <button class=" mr-2 whitespace-nowrap rounded-full pt-2 pb-2 pr-4 pl-4 bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000" >Payung Rotari</button>
          <button class=" mr-2 whitespace-nowrap rounded-full pt-2 pb-2 pr-4 pl-4 bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000" >Payung Rotari</button>
          <button class=" mr-2 whitespace-nowrap rounded-full pt-2 pb-2 pr-4 pl-4 bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000" >Payung Rotari</button>
          <button class=" mr-2 whitespace-nowrap rounded-full pt-2 pb-2 pr-4 pl-4 bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000" >Payung Rotari</button>
    </div>

    <div class="kategori-kontent mt-3">
        <ul class="grid grid-cols-2 gap-4 pb-20 px-3">
            <li class="rounded-xl bg-surface-light dark:bg-surface-dark border border-outline-light dark:border-outline-dark transition-colors duration-1000 pb-3">
               <a href="/detail">
                <div class="rounded-xl image">
                    <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
                </div>
                <div class="px-2">
                    <div class="title text-sm font-bold text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000">Sarung Wadimor PX-299393</div>
                    <div class="price text-sm font-bold text-error-light dark:text-error-dark transition-colors duration-1000">Rp. 15.000</div>
                    <div class="diskon line-through text-on-surface-variant-light dark:text-on-surface-variant-dark transition-colors duration-1000">Rp. 25.000</div>
                    <div class="rating flex">
                        <div class="star flex items-center ">
                            <span><svg class="fill-primary-light dark:fill-primary-dark" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span>
                                <span class="text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000 pl-1">98</span>
                        </div>
        
                    </div>
                </div>
               </a>
            </li>
            <li class="rounded-xl bg-surface-light dark:bg-surface-dark border border-outline-light dark:border-outline-dark transition-colors duration-1000 pb-3">
              <div class="rounded-xl image">
                  <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
              </div>
              <div class="px-2">
                  <div class="title text-sm font-bold text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000">Sarung Wadimor PX-299393</div>
                  <div class="price text-sm font-bold text-error-light dark:text-error-dark transition-colors duration-1000">Rp. 15.000</div>
                  <div class="diskon line-through text-on-surface-variant-light dark:text-on-surface-variant-dark transition-colors duration-1000">Rp. 25.000</div>
                  <div class="rating flex">
                      <div class="star flex items-center ">
                          <span><svg class="fill-primary-light dark:fill-primary-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span>
                              <span class="text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000 pl-1">98</span>
                      </div>
        
                  </div>
              </div>
          </li>
          <li class="rounded-xl bg-surface-light dark:bg-surface-dark border border-outline-light dark:border-outline-dark transition-colors duration-1000 pb-3">
            <div class="rounded-xl image">
                <img class="rounded-xl" src="https://i.picsum.photos/id/967/250/250.jpg?hmac=w4BZ7zddVJJIVjh_jvvaya9W4rHv923O1gXJoTa36Iw" alt="sdf sdf" width="250px" height="250px">
            </div>
            <div class="px-2">
                <div class="title text-sm font-bold text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000" >Sarung Wadimor PX-299393</div>
                <div class="price text-sm font-bold text-error-light dark:text-error-dark transition-colors duration-1000">Rp. 15.000</div>
                <div class="diskon line-through text-on-surface-variant-light dark:text-on-surface-variant-dark transition-colors duration-1000">Rp. 25.000</div>
                <div class="rating flex">
                    <div class="star flex items-center ">
                        <span><svg class="fill-primary-light dark:fill-primary-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8.833 16.438-1.291-1.167q-2.334-2.104-4.104-4.083-1.771-1.98-1.771-4.376 0-1.958 1.323-3.291 1.322-1.333 3.302-1.333 1.125 0 2.083.468.958.469 1.625 1.198.646-.729 1.604-1.198.958-.468 2.084-.468 1.979 0 3.312 1.333 1.333 1.333 1.333 3.291 0 2.396-1.802 4.396t-4.26 4.23l-1.104 1q-.479.458-1.157.447-.677-.01-1.177-.447Z"/></svg> </span>
                            <span class="text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000 pl-1">98</span>
                    </div>
        
                </div>
            </div>
        </li>
                               
        </ul >
    </div>
    
</div>