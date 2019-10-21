<script>
  import { onDestroy } from 'svelte';
  import { push } from 'svelte-spa-router';
  import { posts } from '~/store';
  import SiteName from '~/components/SiteName.svelte';
  import SearchInput from '~/components/SearchInput.svelte';
  import PostResult from '~/components/PostResult.svelte';

  export let params = {};
  const { query } = params;
  let searchText = query || '';

  const doSearch = () => {
    push(`/results/${searchText}`);
  };

  $: searchRegex = new RegExp(searchText, 'i');
  $: _posts = $posts.filter(post => {
    if( searchText.trim().length ) {
      return searchRegex.test(post.title);
    }
    return true;
  });
</script>

<style>
  .searchResults {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .searchResults header {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    box-shadow: 0 0 4px #bbb;
    background-color: #fff;
  }
  .searchResults :global(.siteName) {
    font-size: 30px;
    margin: 0 30px 0 0;
    flex: 0 0 auto;
  }
  .searchResults :global(.inputWrap) {
    flex: 1;
    max-width: 400px;
  }
  .searchResults :global(.inputWrap input) {
    font-size: 18px !important;
    padding: .3em .5em !important;
  }
  .searchResults .noResults {
    padding: 5vh 20px;
    color: #999;
    font-size: 30px;
  }
  .searchResults .resultsInfo {
    text-align: left;
    font-size: 12px;
    color: #999;
    padding: 10px 20px;
  }
  .searchResults .posts {
    flex: 1 1 auto;
    overflow: auto;
    overscroll-behavior: contain;
  }
</style>

<div class="searchResults">

  <header>
    <SiteName />
    <SearchInput bind:searchText={searchText} on:doSearch={doSearch} />
  </header>

  <div class="posts">
    {#if _posts.length === 0}
      <div class="noResults">No results matched your search.</div>
    {:else}
      <div class="resultsInfo">Found {_posts.length} matches.</div>
    {/if}

    {#each _posts as post (post.id)}
      <PostResult {post} />
    {/each}
  </div>

</div>
