<script>
  import { onMount, createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let input = null;
  export let searchText = '';

  const doSearch = () => {
    dispatch('doSearch');
  };

  onMount(() => {
    input && input.focus();
  });
</script>

<style>
  .inputWrap {
    display: flex;
    align-items: center;
    border: 1px solid #dfe1e5;
    border-radius: 50px;
    padding: 2px 30px 2px 12px;
  }

  .inputWrap svg {
    width: 20px;
    color: #9aa0a6;
  }

  .inputWrap input {
    flex: 1;
    border: none;
    font-size: 20px;
    line-height: 1;
    padding: 0.5em 0.6em;
  }

  .inputWrap input:focus {
    outline: none;
  }

  .inputWrap:hover {
    box-shadow: 0 0 0 0.2rem rgba(144, 178, 214, 0.25);
  }

  .inputWrap:focus-within {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
</style>

<div class="inputWrap">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
    <path fill="currentColor" d="M9 3C5.68 3 3 5.68 3 9a5.99 5.99 0 0 0 9.88 4.58L18.29 19l.71-.7-5.42-5.43A5.99 5.99 0 0 0 9 3zm0 1a4.99 4.99 0 1 1 0 10A4.99 4.99 0 1 1 9 4z" />
  </svg>
  <input type="text" bind:this={input} bind:value={searchText} on:keydown={ev => ev.key === 'Enter' && doSearch()} />
</div>
