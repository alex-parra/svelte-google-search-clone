<script>
  import { onMount } from 'svelte';
  import SiteName from '~/components/SiteName.svelte';

  let searchText = '';
  let input = null;

  onMount(() => {
    input && input.focus();
  });

</script>

<div class="searchHome">

  <SiteName />

  <div class="searchWrap">
    <div class="inputWrap">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M9 3C5.68 3 3 5.68 3 9a5.99 5.99 0 0 0 9.88 4.58L18.29 19l.71-.7-5.42-5.43A5.99 5.99 0 0 0 9 3zm0 1a4.99 4.99 0 1 1 0 10A4.99 4.99 0 1 1 9 4z" /></svg>
      <input bind:this={input} type="text" bind:value={searchText} />
    </div>

    <div class="btns">
      <button>Show results</button>
      <button>Pick for me</button>
    </div>
  </div>

</div>
