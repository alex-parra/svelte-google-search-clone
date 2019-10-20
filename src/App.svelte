<script>
  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<div class="appRoot">

  <main>
    <Router {routes} />
  </main>
  <footer>Made by Alex Parra on Oct 19<sup>th</sup>, 2019</footer>

</div>
