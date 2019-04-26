<script>
    let count = 0;
    $: doubled = count * 2;

    const handleClick = () => count += 1;
</script>

<button on:click={handleClick}>
    Clicked {count} time{count > 1 ? "s" : ""}
</button>

<p>{count} &times; 2 = {doubled}</p>
