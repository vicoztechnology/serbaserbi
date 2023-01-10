<script>
// @ts-nocheck


import "../app.css";
import "@fontsource/roboto-flex"
import {browser} from '$app/environment'
	import { backarrow, navbottom } from "$lib/stores/stores";
   

  
    let backarrowstatus;
    let bottomstatus;
    navbottom.subscribe(value => {
        bottomstatus = value
    })
    backarrow.subscribe(value => {
        backarrowstatus = value
    })

    console.log(bottomstatus)
let darkMode = true;

if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
           
            darkMode = true
			
		} else {
			document.documentElement.classList.remove('dark');
           
            darkMode =false
			
		}
	}
function handle() {
    darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');

}
</script>

<nav class="flex xx item-center inset-x-0 z-10 fixed px-3 py-3 bg-surface-light dark:bg-surface-dark top-0 text-on-surface-light dark:text-on-surface-dark">
    <div class="basis-1/3 item-center" >
        {#if backarrowstatus===false}
       <a href="/" class="font-extrabold">serbserbi.id</a>
       {/if }
        
   {#if backarrowstatus===true}
   <button onclick="history.back()" name="btn-back">
    <span>
        <svg class="fill-on-surface-light dark:fill-on-surface-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m10.875 19.3-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288.413-.012.713.288.3.275.313.687.012.413-.288.713L7.4 11h11.175q.425 0 .713.287.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7.012.425-.288.7-.275.3-.7.3-.425 0-.725-.3Z"/></svg>
    </span>
</button>
   {/if}
        
    </div>
    <div class="basis-1/3 item-center">
        <a href="/" class="item-center"></a>
    </div>
    <div class="basis-1/3 text-right" >
        <button on:click={handle} class="mr-2"name="btn-dark-mode">
            <span >
              {#if darkMode===false}
                <svg class="fill-on-surface dark:fill-on-surface-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05 4.575 6q-.3-.275-.288-.7.013-.425.288-.725.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7 0 .4-.275.7-.275.3-.687.287-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712 0-.413.275-.688.275-.3.688-.287.412.012.712.287L19.425 18q.3.275.288.7-.013.425-.288.725-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688.012-.412.287-.712L18 4.575q.275-.3.7-.288.425.013.725.288.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275.412 0 .687.275.3.275.288.688-.013.412-.288.712L6 19.425q-.275.3-.7.287-.425-.012-.725-.287Z"/></svg>
              {/if}
              {#if darkMode===true}
              <svg class="fill-on-surface dark:fill-on-surface-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 21q-3.775 0-6.388-2.613Q3 15.775 3 12q0-3.45 2.25-5.988Q7.5 3.475 11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375Q11.1 6.7 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q.775 0 1.538-.225.762-.225 1.362-.625.525-.35 1.075-.038.55.313.475.988-.35 3.45-2.937 5.725Q15.425 21 12 21Z"/></svg>
              {/if}
             </span>

        </button>
        <button class="mr-2" name="btn-keranjang">
            <span class="relative inline-block" >
                <svg class="fill-on-surface dark:fill-on-surface-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM7 17q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1.975q-.425 0-.7-.288Q1 3.425 1 3t.288-.713Q1.575 2 2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775-.45.275-1.025.275H8.1L7 15h11.025q.425 0 .7.287.275.288.275.713t-.288.712Q18.425 17 18 17Zm1.55-6h7Z"/></svg>
              <span class="pl-1 pr-1 rounded-lg bg-error-light dark:bg-error-dark text-on-error-light dark:text-on-error-dark absolute top-0 right-0 inline-flex transform translate-x-1/2 -translate-y-1/2 ">99</span>
           
            </span>
        </button>
        <button class="mr-2" name="btn-notifikasi">
            <span class="relative inline-block">
                <svg class="fill-on-surface dark:fill-on-surface-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q2 .5 3.25 2.112Q18 7.925 18 10v7h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Zm7-7.5ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-4-5h8v-7q0-1.65-1.175-2.825Q13.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10Z"/></svg>
                <span class="pl-1 pr-1 rounded-lg bg-error-light dark:bg-error-dark text-on-error-light dark:text-on-error-dark absolute top-0 right-0 inline-flex transform translate-x-1/2 -translate-y-1/2 ">79</span>
            </span>
        </button>

    </div>
</nav>
<div class="pt-10">
<slot />
</div>
<nav class="flex xx  {bottomstatus} py-3  text-center flex-row fixed inset-x-0 bottom-0 bg-surface-light dark:bg-surface-dark" >
    <a href="/" class="basis-1/4">
        <button name="btn-home" class="bg-secondary-container-light dark:bg-secondary-container-dark py-1 px-5 rounded-full ">
            <span> 
                <svg class="fill-on-secondary-container-light dark:fill-on-secondary-container-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm0 2q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.275-.2.575-.3.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-5v-6h-2v6Zm6-8.75Z"/></svg>
            </span>
        </button>
        <div class="text-on-surface-light dark:text-on-surface-dark font-bold">Home</div>
    </a>
    <a href="/chat" class="basis-1/4 ">
        <button name="btn-chat" class="bg-surface-light dark:bg-surface-dark py-1 px-5 rounded-full ">
           <span class="material-symbols-rounded"> 
            <svg class="fill-on-surface-light dark:fill-on-surface-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 14h6.025q.425 0 .7-.288Q14 13.425 14 13t-.287-.713Q13.425 12 13 12H6.975q-.425 0-.7.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm0-3h10.025q.425 0 .7-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9H6.975q-.425 0-.7.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0-3h10.025q.425 0 .7-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6H6.975q-.425 0-.7.287Q6 6.575 6 7t.287.713Q6.575 8 7 8ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Zm2-2.4L5.175 16H20V4H4ZM4 4v13.175Z"/></svg>
           </span>
        </button>
        <div class="text-on-surface dark:text-on-surface-dark">Chat</div>
    </a>
    <a href="/live"class="basis-1/4">
        <button name="btn-live" class="bg-surface-light dark:bg-surface-dark  py-1 px-5 rounded-full ">
            <span class="material-symbols-rounded"> 
                <svg class="fill-on-surface-light dark:fill-on-surface-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m11.05 14.5 4.15-2.65q.225-.15.338-.375.112-.225.112-.475 0-.25-.112-.475-.113-.225-.338-.375L11.05 7.5q-.5-.325-1.025-.05-.525.275-.525.875v5.35q0 .6.525.875t1.025-.05ZM9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Zm-5-4h16V5H4v12Zm0 0V5v12Z"/></svg>
            </span>
        </button>
        <div class="text-on-surface dark:text-on-surface-dark">Live</div></a>
    <a href="/saya" class="basis-1/4">
        <button name="btn-saya" class="bg-surface-light dark:bg-surface-dark py-1 px-5 rounded-full ">
            <span class="material-symbols-rounded">
                <svg class="fill-on-surface-light dark:fill-on-surface-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm6 8H6q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20ZM6 18h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z"/></svg>
            </span>
        </button>
        <div class="text-on-surface dark:text-on-surface-dark">Saya</div>
    </a>
</nav>

