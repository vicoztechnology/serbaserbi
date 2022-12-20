<script>
import "../app.css";
</script>

<nav class="flex px-3 py-2 bg-surface-light dark:bg-surface-dark top-0 text-on-surface-variant-light">
    <div class="basis-1/3">
        <a href="/" class="">serbserbi.id</a>
    </div>
    <div class="basis-1/3">
        <a href="/" class="">serbserbi.id</a>
    </div>
    <div class="basis-1/3 text-right ">
        <button>
            <span class="">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM7 17q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1.975q-.425 0-.7-.288Q1 3.425 1 3t.288-.713Q1.575 2 2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775-.45.275-1.025.275H8.1L7 15h11.025q.425 0 .7.287.275.288.275.713t-.288.712Q18.425 17 18 17Zm1.55-6h7Z"/></svg>
                    </span>
                    </button>
                    <button>
                        <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q2 .5 3.25 2.112Q18 7.925 18 10v7h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Zm7-7.5ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-4-5h8v-7q0-1.65-1.175-2.825Q13.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10Z"/></svg>
                                </span>
                                </button>
                                </div>

                                </nav>
                                <slot />
                                <nav class="flex xx  text-on-surface-variant-light py-3  text-center flex-row fixed inset-x-0 bottom-0 bg-surface-light dark:bg-surface-dark" >
                                    <div class="basis-1/4">
                                        <button class="bg-secondary-container-light  pt-1 px-5 rounded-full text-on-secondary-container-light">
                                            <span class="">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm0 2q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.275-.2.575-.3.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-5v-6h-2v6Zm6-8.75Z"/></svg>
                                                    </span>
                                                    </button>
                                                    <div class="text-on-secondary-container-light">Home</div>
                                                    </div>
                                                    <div class="basis-1/4 ">
                                                        <button class="bg-secondary-container-light  pt-1 px-5 rounded-full text-on-secondary-container-light">
                                                            <span class=""> <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 14h6.025q.425 0 .7-.288Q14 13.425 14 13t-.287-.713Q13.425 12 13 12H6.975q-.425 0-.7.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm0-3h10.025q.425 0 .7-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9H6.975q-.425 0-.7.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0-3h10.025q.425 0 .7-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6H6.975q-.425 0-.7.287Q6 6.575 6 7t.287.713Q6.575 8 7 8ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Zm2-2.4L5.175 16H20V4H4ZM4 4v13.175Z"/></svg> </span>
                                                                </button>
                                                                <div>Chat</div>
                                                                </div>
                                                                <div class="basis-1/4">
                                                                    <button class="bg-secondary-container-light  pt-1 px-5 rounded-full text-on-secondary-container-light">
                                                                        <span class="">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M14 11.8q.275 0 .512-.213.238-.212.288-.537.05-.325.238-.575.187-.25.562-.625.75-.75 1-1.213.25-.462.25-1.087 0-1.125-.788-1.837Q15.275 5 14 5q-.825 0-1.487.387-.663.388-1.063 1.063-.15.25-.037.525.112.275.412.4.25.1.525 0T12.825 7q.225-.3.525-.45.3-.15.65-.15.6 0 .975.337.375.338.375.913 0 .35-.2.662-.2.313-.7.788-.675.575-.9.925-.225.35-.275 1.025-.025.3.188.525.212.225.537.225Zm0 3.2q.425 0 .738-.312.312-.313.312-.738t-.312-.738Q14.425 12.9 14 12.9t-.737.312q-.313.313-.313.738t.313.738Q13.575 15 14 15Zm-6 3q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/></svg>
                                                                                </span>
                                                                                </button>
                                                                                <div>Kuis</div></div>
                                                                                <div class="basis-1/4">
                                                                                    <button class="bg-secondary-container-light pt-1 px-5 rounded-full text-on-secondary-container-light">
                                                                                        <span class="">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm6 8H6q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20ZM6 18h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z"/></svg>
                                                                                                </span>
                                                                                                </button>
                                                                                                <div>Saya</div>
                                                                                                </div>
                                                                                                </nav>
