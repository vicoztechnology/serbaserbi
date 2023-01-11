<script>
    import { navbottom, backarrow } from '../../../lib/stores/stores';
	import { fade } from 'svelte/transition'

	$navbottom = 'invisible';
	$backarrow = true;

</script>
<div class="pt-20 bg-background-light dark:bg-background-dark text-on-background-light
dark:text-on-background-dark" transition:fade="{{delay: 250, duration: 300}}">Profile</div>