<script>
  import { onDestroy } from 'svelte';
  import SiteName from '~/components/SiteName.svelte';
  import SearchInput from '~/components/SearchInput.svelte';
  import PostResult from '~/components/PostResult.svelte';
  import { posts } from '~/store';

  export let params = {};
  const { query } = params;
  let searchText = query || '';

  const doSearch = () => { /* nothing to do */ };

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
    {#each _posts as post (post.id)}
      <PostResult {post} />
    {/each}
  </div>

</div>
