<script>
import "../app.css";
</script>

<nav>
    <a href="/">Homed</a>
    <a href="/chat">Chat</a>
    <a href="/settings">Settings</a>
</nav>
<slot />
<nav class="flex xx  py-3 text-center flex-row fixed inset-x-0 bottom-0 bg-surface-light dark:bg-surface-dark" >
    <div class="basis-1/4">
        <button class="bg-secondary-container-light  pt-1 px-5 rounded-full text-on-secondary-container-light">
            <span class="material-symbols-rounded"> home </span>
        </button>
        <div class="text-on-secondary-container-light">Home</div>
    </div>
    <div class="basis-1/4 ">
        <button class="bg-secondary-container-light  pt-1 px-5 rounded-full text-on-secondary-container-light">
            <span class="material-symbols-rounded"> chat </span>
        </button>
        <div>Chat</div>
    </div>
    <div class="basis-1/4">
        <button class="bg-secondary-container-light  pt-1 px-5 rounded-full text-on-secondary-container-light">
            <span class="material-symbols-rounded"> quiz </span>
        </button>
        <div>Kuis</div></div>
    <div class="basis-1/4">
        <button class="bg-secondary-container-light pt-1 px-5 rounded-full text-on-secondary-container-light">
            <span class="material-symbols-rounded"> person </span>
        </button>
        <div>Saya</div>
    </div>
</nav>
