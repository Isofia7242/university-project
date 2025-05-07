<script lang="ts">
    import HeroSection from "$lib/HeroSection.svelte";
    import Editor from "$lib/canvas-components/Editor.svelte";
</script>

<div class="page">
    <HeroSection/>
    <Editor title="Editor"/>
</div>

<style lang="scss">
  @use "../app" as *;
  .page {
    max-height: 100vh;
    scroll-snap-type: y mandatory;
    overflow: auto;
    background-color: $color-1;
  }
</style>