{#if showInfo}
    <Nested answer={42} />
    <Info {...pkg} />

    <ul>
        {#each cats as cat (cat.id)}
            <li>
                <strong>{cat.name}:</strong>
                <span>{nowYear - cat.birthYear}yo</span>
            </li>
        {/each}
    </ul>
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

    const cats = [
        {id: "skitty", name: "Skitty", birthYear: 2010},
        {id: "pixel", name: "Pixel", birthYear: 2013},
    ];

    const nowYear = new Date().getFullYear();
</script>
