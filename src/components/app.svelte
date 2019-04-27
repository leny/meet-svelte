<script>
    import Nested from "./nested.svelte";
    import Info from "./info.svelte";

    const pkg = {
        name: "svelte",
        version: "3",
        speed: "blazing",
        url: "https://svelte.dev",
    };
</script>

<Nested answer="{42}" />
<Nested />

<Info {...pkg} />
