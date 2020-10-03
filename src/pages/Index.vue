<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Site image" src="~/Original.png" width="400" />

    <p>
        Compete with your rivals at traditional single player games such as
        Sudoku, Codewords etc ... See if you can become overall champion.
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script lang="ts">

    console.log(`I am in the Index page`);

    export default {
      metaInfo: {
        title: 'Puzzle Bouts'
      }
    }

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
