<script>
var count = 0

function incrementCount() {
    count++
}

</script>

<button on:click={incrementCount}>Test Button [{count}]</button>