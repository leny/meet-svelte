<script>
    let count = 0, doubled;

    $: if (count >= 10) {
        alert(`count is dangerously high!`);
        count = 9;
    }

    const handleClick = () => count += 1;
</script>

<button on:click={handleClick}>
    Clicked {count} time{count > 1 ? "s" : ""}
</button>
