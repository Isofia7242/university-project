<script lang="ts">
    import {onMount} from 'svelte';
    import {getNewCanvas} from "../services/canvas.js";
    import {FloorManager} from "../services/floor-manager-service.svelte.js";

    let {title}: { title?: string } = $props();
    let canvas;
    let fm;

    onMount(() => {
        let scene = getNewCanvas(canvas);
        fm = new FloorManager(scene);
        fm.addFloor();
        fm.addFloor();
        fm.addFloor();
        fm.addVerticalWall();

    })
</script>

<div class="editor-container">
    {#if title}
        <h1 class="title">{title}</h1>
    {/if}
    <div class="split-screen">
        <canvas bind:this={canvas}></canvas>
        <div class="editor">
            <div class="checked"></div>
        </div>
    </div>
</div>
<style lang="scss">
  .editor-container {
    scroll-snap-align: center;
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .split-screen {
      max-height: calc(100vh - 89px);
      width: 100%;
      display: flex;
      flex-direction: row;
      background-color: green !important;

      .editor {
        padding: 20px;
        max-height: calc(100vh - 89px);
        max-width: 50dvw;
        width: 100%;
        .checked {
          height: 100%;
          width: 100%;
          background-color: rgba(0,0,0,.5);
        }
      }

      canvas {
        max-height: calc(100vh - 89px);
        max-width: 50dvw;
      }
    }
  }
</style>

