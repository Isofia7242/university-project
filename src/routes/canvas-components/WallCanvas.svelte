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

            createHorizontalWall(0, 100, 0, 0xcc0000),
            createHorizontalWall(-100, 100, -100, 0xcc0000),
            createVerticalWall(-100, -100, 100, 0xcc0000),
            createVerticalWall(0, 100, -100, 0xcc0000),
        );
    })
</script>

<div class="canvas-container">
    {#if title}
        <h1 class="title">{title}</h1>
    {/if}
    <canvas bind:this={canvas}></canvas>
</div>
