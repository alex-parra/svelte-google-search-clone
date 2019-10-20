<script>
  import { push } from 'svelte-spa-router';
  import SiteName from '~/components/SiteName.svelte';
  import SearchInput from '~/components/SearchInput.svelte';
  import { posts } from '~/store';

  let searchText = '';

  $: postsCount = $posts ? $posts.length : 0;

  const doSearch = () => {
    push('/results/' + searchText);
  };
</script>

<div class="searchHome">

  <SiteName />

  <div class="searchWrap">
    <small>Search across {postsCount || '...'} articles from HackerNews</small>
    <SearchInput bind:searchText={searchText} on:doSearch={doSearch} />

    <div class="btns">
      <button on:click={() => doSearch()}>Show results</button>
      <button>Pick for me</button>
    </div>
  </div>

</div>
