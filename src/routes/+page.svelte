<script lang="ts">
    import Building3D from './canvas-components/Building3D.svelte';
    import HeroSection from "./HeroSection.svelte";
    import EmptyCanvas from "./canvas-components/EmptyCanvas.svelte";
    import FloorCanvas from "./canvas-components/FloorCanvas.svelte";
    import WallCanvas from "./canvas-components/WallCanvas.svelte";
    import Editor from "./canvas-components/Editor.svelte";
</script>

<div class="page">
    <HeroSection/>
    <Editor title="Editor"/>
    <FloorCanvas title="Alap"/>
    <WallCanvas title="Wall"/>
    <EmptyCanvas title="Empty"/>
    <Building3D title="Összegzés"/>
</div>
<style lang="scss">
  .page {
    max-height: 100vh;
    scroll-snap-type: y mandatory;
    overflow: auto;
  }
</style>