<script lang="ts">
    import HeroSection from "$lib/HeroSection.svelte";
    import Editor from "$lib/canvas-components/Editor.svelte";
</script>

<div class="page">
    <HeroSection/>
    <Editor title="Editor"/>
</div>
<style lang="scss">
  .page {
    max-height: 100vh;
    scroll-snap-type: y mandatory;
    overflow: auto;
  }
</style>