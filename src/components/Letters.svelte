<script>
  export let text = '';

  const letters = text.split('');
</script>

{#each letters as letter}
  <span>{letter}</span>
{/each}
