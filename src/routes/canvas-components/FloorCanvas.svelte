<script lang="ts">
    import {onMount} from 'svelte';
    import {getNewCanvas} from "../services/canvas.ts";
    import {createBaseFloor} from "../services/building-components.svelte.ts";

    let {title}: { title?: string } = $props();
    let canvas;

    onMount(() => {
        let scene = getNewCanvas(canvas);
        scene.add(
            createBaseFloor(0, undefined, 300, 300),
            createBaseFloor(1, undefined, 300, 300),
            createBaseFloor(2, undefined, 300, 300),
            createBaseFloor(3, undefined, 300, 300),
        );
    })
</script>

<div class="canvas-container">
    {#if title}
        <h1 class="title">{title}</h1>
    {/if}
    <canvas bind:this={canvas}></canvas>
</div>
