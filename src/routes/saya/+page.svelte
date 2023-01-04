<script>
    import {
        navbottom,
        backarrow
    } from '../../lib/stores/stores'
    import {slide} from 'svelte/transition'

    $navbottom = 'invisible'
    $backarrow =true
    let item 
    let x
    let showprofil = false
    let showbukualamat=false
    function showprofile(){
      showprofil=!showprofil      

    }
    function showalamat(){
        showbukualamat=!showbukualamat
    }
    </script>
    
    <div class="saya pt-5 bg-background-light dark:bg-background-dark text-on-background-light dark:text-on-background-dark">
        <div class="flex flex-row">
            <div class="basis-1/12"></div>
            <div class="basis-11/12 p-3">
                <img class="rounded-lg" src="https://i.picsum.photos/id/235/400/250.jpg?hmac=SgxReaoHiMCXQ2pQeMbo0DqTHfvGYkJIqLgZrRBmaTI">
            </div>
            </div>
        
      





        <div class="  divide-y divide-outline-variant-light dark:divide-outline-variant-dark">
        <div class="profile">
            <div class="flex flex-row">
                <div class="basis-1/12"></div>
                <div class=" basis-11/12 profile-header p-3 " on:click={showprofile}>Profile</div>
            </div>
           
{#if showprofil === true}
<div class="collapse__body p-3" transition:slide>
    <div class="flex flex-row">
        <div class="basis-1/12  m-auto mx-auto pl-1">
            <span class="material-symbols-rounded ">
                <svg class="  fill-on-background-light dark:fill-on-background-dark" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm6 8H6q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20ZM6 18h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z"/></svg>
            </span>
        </div>
        <div class="basis-11/12 ">
            <div class="relative flex flex-col">
           
                <input type="text"  id="nama" class="block px-2.5 pb-2.5 pt-4 w-full  dark:text-on-background-dark dark:bg-background-dark text-on-background-light bg-background-light rounded-md border border-outline-light appearance-none focus:outline-none focus:ring-0 focus:border-primary-light focus:dark:border-primary-dark peer" placeholder=" " />
               <label for="nama" class="absolute  dark:text-on-background-dark text-on-background-light duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-background-dark bg-background-light px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Nama Lengkap</label>
            </div>
        </div>
       
      </div>
    
   
   
   
</div>
{/if}

        </div>
        <div class="profile">
            <div class="profile-header p-3" on:click={showalamat}>Buku Alamat</div>
{#if showbukualamat === true}
<div class="collapse__body p-3"  transition:slide>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper augue mauris. Integer eu libero non lorem bibendum sodales vel accumsan massa. Morbi ut porta elit, vel 					lacinia erat. Aliquam vel lorem facilisis, laoreet odio quis, ullamcorper arcu. Nullam commodo pretium erat at dictum. Donec vehicula facilisis scelerisque. Vestibulum auctor.
</div>
{/if}

        </div>
    </div>
    
    </div>
    