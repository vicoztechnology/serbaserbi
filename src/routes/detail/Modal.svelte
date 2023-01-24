<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
    import { fly } from 'svelte/transition';
	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background xx z-40  inset-x-0 " on:click={close}></div>

<div class="modal xx pl-6 pr-6 pt-6 bg-surface-light dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark rounded-t-3xl p-3" role="dialog" aria-modal="true" bind:this={modal} transition:fly="{{ y: 200, duration: 500 }}">
	
	
	<slot></slot>
	

	<!-- svelte-ignore a11y-autofocus -->
	<!--<button autofocus on:click={close}>close modal</button>-->
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100% ;
		background: rgba(0,0,0,0.3);
		margin:auto;
	}

	.modal {
        z-index: 99;
		position: fixed;
	    bottom: 0;
		width: 100%;
		
	
		overflow: auto;
	
		
	}

	button {
		display: block;
	}
</style>