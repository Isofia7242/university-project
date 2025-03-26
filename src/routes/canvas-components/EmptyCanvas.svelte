<script lang="ts">
    import {onMount} from 'svelte';
    import {getNewCanvas} from "../services/canvas.ts";
    import {createBaseFloor, createHorizontalWall, createVerticalWall} from "../services/building-components.svelte.ts";

    let {title}: { title?: string } = $props();
    let canvas;

    onMount(() => {
        let scene = getNewCanvas(canvas);
        scene.add(
            createBaseFloor(0, undefined, 200, 200),  //base

            createHorizontalWall(-80, -40, 80, 0x000050),
            createHorizontalWall(-20, -80, 80, 0x000050),
            createHorizontalWall(20, -80, 80, 0x000050),
            createHorizontalWall(80, -80, 80, 0x000050),

            createVerticalWall(80, -80, 80, 0x000050),
            createVerticalWall(-80, -80, 80, 0x000050),

        );
    })
</script>

<div class="canvas-container">
    {#if title}
        <h1 class="title">{title}</h1>
    {/if}
    <canvas bind:this={canvas}></canvas>
</div>
