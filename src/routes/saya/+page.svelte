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
        <div class=" content-center rounded-lg m-2 p-3 bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark" >
            <div class="foto-profil">
                <img class=" mx-auto rounded-full content-center" src="https://i.picsum.photos/id/1079/75/75.jpg?hmac=ZCBw0_Rd88C37DDZ2ung7knglCmJzCm2rlSxMcZd7sI" alt="foto-profil">

            </div>
            <div class="nama-user text-center ">Tofik Hidayat</div>
            <div class="member-user text-lg  font-sermibold text-center">Classic Member</div>
            <div class="sejak-user text-center  text-on-surface-variant-light dark:text-on-surface-variant-dark">Sejak Januari 2023</div>
        
        </div>
        <div class="divide-y divide-outline-variant-light dark:divide-outline-variant-dark">
        <div class="profile">
            <div class="profile-header p-3" on:click={showprofile}>Profile</div>
{#if showprofil === true}
<div class="collapse__body p-3" transition:slide>
    <div class="relative">
        <input type="text"  id="nama" class="block px-2.5 pb-2.5 pt-4 w-full  dark:text-on-background-dark dark:bg-background-dark text-on-background-light bg-background-light rounded-md border border-outline-light appearance-none focus:outline-none focus:ring-0 focus:border-primary-light focus:dark:border-primary-dark peer" placeholder=" " />
       <label for="nama" class="absolute  dark:text-on-background-dark text-on-background-light duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-background-dark bg-background-light px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Nama Lengkap</label>
    </div>
    <div class="relative mt-2">
        <input type="text"  id="alamat" class="block px-2.5 pb-2.5 pt-4 w-full  dark:text-on-background-dark dark:bg-background-dark text-on-background-light bg-background-light rounded-md border border-outline-light appearance-none focus:outline-none focus:ring-0 focus:border-primary-light focus:dark:border-primary-dark peer" placeholder=" " />
       <label for="alamat" class="absolute  dark:text-on-background-dark text-on-background-light duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-background-dark bg-background-light px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email akun</label>
    </div>
    <div class="relative mt-2">
        <input type="text"  id="no-hp" class="block px-2.5 pb-2.5 pt-4 w-full  dark:text-on-background-dark dark:bg-background-dark text-on-background-light bg-background-light rounded-md border border-outline-light appearance-none focus:outline-none focus:ring-0 focus:border-primary-light focus:dark:border-primary-dark peer" placeholder=" " />
       <label for="no-hp" class="absolute  dark:text-on-background-dark text-on-background-light duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-background-dark bg-background-light px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Nomor HP</label>
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
    