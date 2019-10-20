<script>
  import Letters from '~/components/Letters.svelte';

  const text = 'Seek&Find';
</script>

<h1 class="siteName">
  <Letters {text} />
</h1>

<style>

.siteName {
  margin: 0 0 24px;
  text-align: center;
  color: #343a40;
  font-size: 50px;
  line-height: 1;
}

.siteName :global(span:nth-child(1)) { color: #5187ED; }
.siteName :global(span:nth-child(2)) { color: #D95040; }
.siteName :global(span:nth-child(3)) { color: #F2BD42; }
.siteName :global(span:nth-child(4)) { color: #F2BD42; }
.siteName :global(span:nth-child(5)) { color: #5187ED; }
.siteName :global(span:nth-child(6)) { color: #58A55D; }
.siteName :global(span:nth-child(7)) { color: #D95040; }
.siteName :global(span:nth-child(8)) { color: rebeccapurple; }

</style>
