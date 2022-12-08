<script>
  import "../app.postcss";
</script>

<svelte:head>
  <!-- Google fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=Monda:wght@400;700&family=Rubik:wght@300;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="wrapper bg-theme-black min-h-screen w-screen p-2">
  <slot />
</div>