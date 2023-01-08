<script>
    import { onMount } from 'svelte';
    import About from './pages/About.svelte';
    import Home from './pages/Home.svelte';


    import Navbar from './conponents/Navbar.svelte';
    let page;

    onMount(() => {
        page = "home";
    });
</script>

<Navbar bind:page={page} />

{#if page === "home"}
    <Home />
{:else if page === "about"}
    <About />
{/if}