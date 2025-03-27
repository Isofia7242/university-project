<script lang="ts">
    import {onMount} from 'svelte';
    import {getNewCanvas} from "$lib/services/canvas.js";
    import {createBaseFloor, createHorizontalWall, createVerticalWall} from "$lib/services/building-components.svelte.js";

    let {title}: { title?: string } = $props();
    let canvas;

    onMount(() => {
        let scene = getNewCanvas(canvas);
        scene.add(
            createBaseFloor(0, 0x136000, 200, 200),  //base

            createHorizontalWall(-80, -40, 80),
            createHorizontalWall(-20, -80, 80),
            createHorizontalWall(20, -80, 80),
            createHorizontalWall(80, -80, 80),

            createVerticalWall(80, -80, 80),
            createVerticalWall(-80, -80, 80),
        );
    })
</script>
<div class="canvas-container">
    {#if title}
        <h1 class="title">{title}</h1>
    {/if}
    <canvas bind:this={canvas}></canvas>
</div>
