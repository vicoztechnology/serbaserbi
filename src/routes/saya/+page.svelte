<script>
	import { navbottom, backarrow } from '../../lib/stores/stores';
	import PageTransition from '$lib/components/PageTransition.svelte';
	$navbottom = 'visible';
	$backarrow = true;
	let item;
	let x;
	let showprofil = false;
	let showbukualamat = false;
	function showprofile() {
		showprofil = !showprofil;
	}
	function showalamat() {
		showbukualamat = !showbukualamat;
	}
</script>

<style>

</style>
<svelte:head>
	<title>Profil Pengguna serbaserbi.id</title>
	<meta name="description"
    content="Profil penguna serbaserbi.id">
</svelte:head>
<PageTransition>
	<div class="saya h-screen bg-background-light dark:bg-background-dark text-on-background-lightdark:text-on-background-dark transition-colors duration-1000" >
		<div class="flex flex-row mt-16 ">
			<div class="basis-1/1">
				<img class="rounded-full" src="https://i.picsum.photos/id/454/400/300.jpg?hmac=1bl3dwhodO9L67DJhDEo6zThbt-xMAIIYkWx3oX2zrI" height="300px" width="400px" alt="gambar profil user"/>
				<div class="text-center text-lg pr-6 pl-4">Tofik Hidayat</div>
				<div class="text-center text-xl pr-6 pl-4">Classic Member</div>
				<div class="text-center pr-6 pl-4">Sejak Januari 2023</div>
			</div>
		</div>
		<div class="pt-4 divide-y-2 pl-16 pr-6 divide-outline-variant-light dark:divide-outline-variant-dark transition-colors duration-1000">
			<a href="/saya/profil/"class="pt-3 pb-3  flex">
				<div class="flex basis-1/2">Profile</div>
				<div class="flex basis-1/2 justify-end">
					<span>
						<svg class="fill-on-background-light dark:fill-on-background-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8.7 17.3q-.275-.275-.275-.7 0-.425.275-.7l3.9-3.9-3.9-3.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275-.425 0-.7-.275Z"/></svg>
					</span>
				</div>
			</a>
			<div class="pt-3 pb-3  flex">
				<div class="flex basis-1/2">Daftar Pesanan</div>
				<div class="flex basis-1/2 justify-end">
					<span>
						<svg class="fill-on-background-light dark:fill-on-background-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8.7 17.3q-.275-.275-.275-.7 0-.425.275-.7l3.9-3.9-3.9-3.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275-.425 0-.7-.275Z"/></svg>
					</span>
				</div>
			</div>
			<div class="pt-3 pb-3  flex">
				<div class="flex basis-1/2">Buku Alamat</div>
				<div class="flex basis-1/2 justify-end">
					<span>
						<svg class="fill-on-background-light dark:fill-on-background-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8.7 17.3q-.275-.275-.275-.7 0-.425.275-.7l3.9-3.9-3.9-3.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275-.425 0-.7-.275Z"/></svg>
					</span>
				</div>
			</div>
			<div class="pt-3 pb-3  flex">
				<div class="flex basis-1/2">Voucher</div>
				<div class="flex basis-1/2 justify-end">
					<span>
						<svg class="fill-on-background-light dark:fill-on-background-dark transition-colors duration-1000" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8.7 17.3q-.275-.275-.275-.7 0-.425.275-.7l3.9-3.9-3.9-3.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275-.425 0-.7-.275Z"/></svg>
					</span>
				</div>
			</div>
		</div>
	</div>
</PageTransition>
	<!--
	<div class="flex flex-row">
		<div class="basis-1/12" />
		<div class="basis-11/12 mr-10 ml-10">
			<img
				class="round"
				src="https://i.picsum.photos/id/454/400/300.jpg?hmac=1bl3dwhodO9L67DJhDEo6zThbt-xMAIIYkWx3oX2zrI" height="300px" width="400px" alt="gambar profil user"/>
			<div class="text-center text-lg pr-6 pl-4">Tofik Hidayat</div>
			<div class="text-center text-xl pr-6 pl-4">Classic Member</div>
			<div class="text-center pr-6 pl-4">Sejak Januari 2023</div>
		</div>
	</div>

	<div class=" divide-y-2 divide-outline-variant-light dark:divide-outline-variant-dark">
		<div class="profile">
			<div class="flex flex-row">
				<div class="basis-1/12" />
				<div class=" basis-11/12 profile-header pb-3 mr-10 ml-10" on:click={showprofile}>Profile</div>
			</div>

			{#if showprofil === true}
				<div class="collapse__body p-3" transition:slide>
					<div class="flex flex-row pb-3">
						<div class="basis-1/12 m-auto mx-auto pl-3">
							<span class="material-symbols-rounded ">
								<svg
									class=" fill-on-background-light dark:fill-on-background-dark"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24">
									<path
										d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0
										2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm6 8H6q-.825
										0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775
										3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20
										16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20ZM6
										18h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12
										15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825
										0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175
										10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z" />
								</svg>
							</span>
						</div>
						<div class="basis-11/12 mr-7 ml-5">
							<div class="relative flex flex-col ">

								<input
									type="text"
									id="nama"
									class="block px-2.5 pb-2.5 pt-4 w-full dark:text-on-background-dark
									dark:bg-background-dark text-on-background-light bg-background-light rounded-md
									border border-outline-light appearance-none focus:outline-none focus:ring-0
									focus:border-primary-light focus:dark:border-primary-dark peer"
									placeholder="
									" />
								<label
									for="nama"
									class="absolute dark:text-on-background-dark text-on-background-light duration-300
									transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-background-dark
									bg-background-light px-2 peer-focus:px-2 peer-placeholder-shown:scale-100
									peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
									peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
									Nama Lengkap
								</label>
							</div>
						</div>

					</div>
					<div class="flex flex-row pb-3">
						<div class="basis-1/12 m-auto mx-auto pl-3">
							<span class="material-symbols-rounded ">
								<svg
									class=" fill-on-background-light dark:fill-on-background-dark"
									xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20ZM20 8l-7.475 4.675q-.125.075-.263.112-.137.038-.262.038t-.262-.038q-.138-.037-.263-.112L4 8v10h16Zm-8 3 8-5H4ZM4 8v.25-1.475.025V6v.8-.013V8.25 8v10Z" />
								</svg>
							</span>
						</div>
						<div class="basis-11/12 mr-7 ml-5">
							<div class="relative flex flex-col ">

								<input
									type="text"
									id="email"
									class="block px-2.5 pb-2.5 pt-4 w-full dark:text-on-background-dark
									dark:bg-background-dark text-on-background-light bg-background-light rounded-md
									border border-outline-light appearance-none focus:outline-none focus:ring-0
									focus:border-primary-light focus:dark:border-primary-dark peer"
									placeholder="
									" />
								<label
									for="email"
									class="absolute dark:text-on-background-dark text-on-background-light duration-300
									transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-background-dark
									bg-background-light px-2 peer-focus:px-2 peer-placeholder-shown:scale-100
									peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
									peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
									Email akun
								</label>
							</div>
						</div>

					</div>
					<div class="flex flex-row ">
						<div class="basis-1/12 m-auto mx-auto pl-3">
							<span class="material-symbols-rounded ">
								<svg
									class=" fill-on-background-light dark:fill-on-background-dark"
									xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.95 21q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025.225 1 .65 1.975ZM19 18.95v-2.2l-2.35-.475-1.675 1.675q.975.425 1.988.675 1.012.25 2.037.325Zm-4-1.025ZM6.025 9Z" />
								</svg>
							</span>
						</div>
						<div class="basis-11/12 mr-7 ml-5">
							<div class="relative flex flex-col ">

								<input
									type="text"
									id="hp"
									class="block px-2.5 pb-2.5 pt-4 w-full dark:text-on-background-dark
									dark:bg-background-dark text-on-background-light bg-background-light rounded-md
									border border-outline-light appearance-none focus:outline-none focus:ring-0
									focus:border-primary-light focus:dark:border-primary-dark peer"
									placeholder="
									" />
								<label
									for="hp"
									class="absolute dark:text-on-background-dark text-on-background-light duration-300
									transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-background-dark
									bg-background-light px-2 peer-focus:px-2 peer-placeholder-shown:scale-100
									peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
									peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
									NO Handphone
								</label>
							</div>
						</div>

					</div>

				</div>
			{/if}

		</div>
		<div class="alamat">
			<div class="flex flex-row">
				<div class="basis-1/12" />
				<div class="basis-11/12">
					<div class="alamat-header p-3" on:click={showalamat}>Buku Alamat</div>
				</div>
			</div>

			{#if showbukualamat === true}
				<div class="collapse__body p-3" transition:slide>
					<div class="flex flex-row">
						<div class="basis-1/12 m-auto mx-auto pl-1">
							<span class="material-symbols-rounded ">
								<svg
									class=" fill-on-background-light dark:fill-on-background-dark"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24">
									<path
										d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0
										2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm6 8H6q-.825
										0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775
										3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20
										16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20ZM6
										18h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12
										15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825
										0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175
										10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z" />
								</svg>
							</span>
						</div>
						<div class="basis-11/12 ">
							<div class="relative flex flex-col mr-4">

								<input
									type="text"
									id="nama"
									class="block px-2.5 pb-2.5 pt-4 w-full dark:text-on-background-dark
									dark:bg-background-dark text-on-background-light bg-background-light rounded-md
									border border-outline-light appearance-none focus:outline-none focus:ring-0
									focus:border-primary-light focus:dark:border-primary-dark peer"
									placeholder="
									" />
								<label
									for="nama"
									class="absolute dark:text-on-background-dark text-on-background-light duration-300
									transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-background-dark
									bg-background-light px-2 peer-focus:px-2 peer-placeholder-shown:scale-100
									peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
									peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
									Nama Lengkap
								</label>
							</div>
						</div>

					</div>
				</div>
			{/if}

		</div>
	</div>
-->

