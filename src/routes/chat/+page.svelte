<script>

import {
    navbottom,
    backarrow
} from '../../lib/stores/stores'

$navbottom = 'invisible'
$backarrow =true
</script>
<svelte:head>
    <title>Chat dengan admin serbaserbi</title>
    <meta name="description"
    content="chat dengan admin serbaserbi.id">
</svelte:head>
<div class="chat text-on-background-light dark:text-on-background-dark transition-colors duration-1000">
<div class="isi mt-16">
   


    <div class="m-1 p-1 rounded-full float-right pl-4 pr-4  bg-primary-container-light dark:bg-primary-container-dark dark:text-on-primary-container-dark text-on-primary-container-light transition-colors duration-1000">
        <p class="float-right ">
            Selamat siang kak, ada yang bisa kami bantu?
        </p>
        <p class="text-right text-xs">17.00</p>
    </div>
    <div class="m-1 float-left pl-4 pr-4 dark:bg-surface-variant-dark dark:text-on-surface-variant-dark bg-surface-variant-light text-on-surface-variant-light transition-colors duration-1000 p-1 rounded-full">
        <p class="float-right  ">
            Selamat siang kak, ada yang bisa kami bantu?
        </p>
        <p class="text-right text-xs">17.00</p>
    </div>
    
    <div class="m-1 p-1 rounded-full float-right pl-4 pr-4  bg-primary-container-light dark:bg-primary-container-dark dark:text-on-primary-container-dark text-on-primary-container-light transition-colors duration-1000">
        <p class="float-right ">
            Selamat siang kak, ada yang bisa kami bantu?
        </p>
        <p class="text-right text-xs">17.00</p>
    </div>
</div>
<div class="input_chat xx flex flex-row fixed inset-x-0 bottom-0 p-3 items-center">
<textarea aria-label="text isi pesan" id="isipesan" class="basis-5/6 bg-surface-light dark:bg-surface-dark rounded-full text-on-surface-light dark:text-on-surface-dark transition-colors duration-1000 p-2 "></textarea>
<div class="basis-1/6 text-center ">
    <button id="btn-sent" aria-label="tombol kirim">
<span class="">
    <svg class="fill-primary-light dark:fill-primary-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M5 33.333V23.208L17.833 20 5 16.75V6.667L36.667 20Z"/></svg>

</span>
</button>
</div>
</div>

</div>

