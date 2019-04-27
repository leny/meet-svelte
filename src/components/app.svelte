{#if showInfo}
    <Nested answer={42} />
    <Info {...pkg} />
{:else}
    <p>Nothing to see here!</p>
{/if}

<button on:click={toggle}>{showInfo ? 'Hide' : 'Show'} informations</button>

<script>
    import Nested from "./nested.svelte";
    import Info from "./info.svelte";

    const pkg = {
        name: "svelte",
        version: "3",
        speed: "blazing",
        url: "https://svelte.dev",
    };

    let showInfo = false;

    const toggle = () => (showInfo = !showInfo);
</script>
