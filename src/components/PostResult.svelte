<script>
  import SvgComment from '~/components/SvgComment.svelte';
  import SvgClock from '~/components/SvgClock.svelte';

  export let post = null;
</script>

<style>
  .post {
    text-align: left;
    padding: 20px;
  }

  .post h2 {
    margin: 0;
    font-weight: normal;
    font-size: 22px;
  }

  .post h2 small {
    display: block;
    font-size: 14px;
    color: #888;
  }

  .post .infos {
    margin: 0;
    display: flex;
  }

  .post .infos span {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: #444;
  }

  .post .infos span :global(svg) {
    width: 16px;
    margin-right: 7px;
  }

  .post .infos span + span {
    margin-left: 20px;
  }
</style>

{#if post}
  <article class="post">
    <h2>
      <small>{post.domain}</small>
      <a href={post.url} target="_blank">{post.title}</a>
    </h2>
    <p class="infos">
      <span class="user">@ {post.user}</span>
      <span class="timeAgo"><SvgClock /> {post.time_ago}</span>
      <span class="commentsCount"><SvgComment /> {post.comments_count}</span>
    </p>
  </article>
{/if}
