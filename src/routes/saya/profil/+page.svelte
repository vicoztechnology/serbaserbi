<script>
    import { navbottom, backarrow } from '../../../lib/stores/stores';
	
	import PageTransition from '$lib/components/PageTransition.svelte';
	$navbottom = 'invisible';
	$backarrow = true;

</script>
<PageTransition>
	<div class=" profil pt-20 h-screen bg-background-light dark:bg-background-dark text-on-background-lightdark:text-on-background-dark" >Profile</div>
</PageTransition>