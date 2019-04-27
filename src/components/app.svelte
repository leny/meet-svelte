{#if showInfo}
    <Nested answer={42} />
    <Info {...pkg} />

    {#await promise}
        <p>Please wait the cats...</p>
    {:then cats}
        <ul>
            {#each cats as cat (cat.id)}
                <li>
                    <strong>{cat.name}:</strong>
                    <span>{nowYear - cat.birthYear}yo</span>
                </li>
            {/each}
        </ul>
    {:catch}
        <p>Oops.</p>
    {/await}
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

    let showInfo = false,
        promise;

    const fetchCats = async () =>
        new Promise(resolve =>
            setTimeout(() => {
                resolve([
                    {id: "skitty", name: "Skitty", birthYear: 2010},
                    {id: "pixel", name: "Pixel", birthYear: 2013},
                ]);
            }, 3000),
        );

    const nowYear = new Date().getFullYear();

    const toggle = async () => {
        showInfo = !showInfo;
        promise = fetchCats();
    };
</script>
