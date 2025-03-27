<script lang="ts">
    import {onMount} from 'svelte';
    import {getNewCanvas} from "$lib/services/canvas.js";
    import {createBaseFloor, createWall, type Point} from "$lib/services/building-components.svelte.js";
    import * as THREE from 'three';

    let {title}: { title?: string } = $props();
    let canvas: HTMLCanvasElement;
    let editor: HTMLDivElement;
    let points: Point[] = $state([]);
    let x: number = $state(0);
    let y: number = $state(0);
    let shiftPressed = $state(false);
    let scene;
    let sceneObjectList: { object: any, p1: Point, p2: Point }[] = $state([]);
    let selectedCard = $state();

    function handleMouseMove(event) {
        if (!editor) return;
        const rect = editor.getBoundingClientRect();
        let roundValue = 50;
        x = Math.round((event.clientX - rect.left) / roundValue) * roundValue;
        y = Math.round((event.clientY - rect.top) / roundValue) * roundValue;
    }


    function placePoint() {
        points.push({x: x, y: y})
    }

    onMount(() => {
        scene = getNewCanvas(canvas);
        scene.add(
            createBaseFloor(0, undefined, 1500, 1500),
        )
        $effect(() => {
            if (points.length === 2) {
                let wall = createWall(points[0], points[1]);
                sceneObjectList.push({object: wall, p1: points[0], p2: points[1]});
                scene.add(
                    wall
                )
                points = [];
            }
        })
    })

    function removeObject(sceneObject) {
        if (!sceneObject) return;

        // Remove from scene
        scene.remove(sceneObject);

        // Dispose geometry
        if (sceneObject.geometry) {
            sceneObject.geometry.dispose();
        }

        // Dispose material(s)
        if (sceneObject.material) {
            if (Array.isArray(sceneObject.material)) {
                sceneObject.material.forEach(mat => mat.dispose());
            } else {
                sceneObject.material.dispose();
            }
        }

        // Dispose textures if available
        if (sceneObject.material?.map) {
            sceneObject.material.map.dispose();
        }
    }

    function modifyWall(index: number, point1: Point, point2: Point) {
        let wall = sceneObjectList[index].object;
        removeObject(wall);
        let modifiedWall = createWall(point1, point2);
        sceneObjectList[index] = {object: modifiedWall, p1: point1, p2: point2};
        scene.add(
            modifiedWall
        )
    }

    function deleteWall(index) {
        removeObject(sceneObjectList[index].object);
        sceneObjectList.splice(index, 1);
        sceneObjectList = [...sceneObjectList];
    }
</script>
<div class="editor-container">
    {#if title}
        <h1 class="title">{title}</h1>
    {/if}
    <div class="split-screen">
        <canvas bind:this={canvas}></canvas>
        <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions, a11y_no_noninteractive_element_interactions -->
        <div class="editor" bind:this={editor} onclick={() => {placePoint()}}
             onmousemove={handleMouseMove}>
            <div class="tooltip">
                <p>x: {x}</p>
                <p>y: {y}</p>
            </div>
            {#each sceneObjectList as wall, index}
                <div class="point" class:selected={selectedCard === index}
                     style="--x: {wall.p1.x}px; --y: {wall.p1.y}px">
                    {#if index === selectedCard}
                        p1
                    {/if}
                </div>
                <div class="point" class:selected={selectedCard === index}
                     style="--x: {wall.p2.x}px; --y: {wall.p2.y}px">
                    {#if index === selectedCard}
                        p2
                    {/if}
                </div>
            {/each}
            {#if points[0]}
                <div class="point temporary" style="--x: {points[0].x}px; --y: {points[0].y}px"></div>
            {/if}
            <div class="point cursor" style="--x: {x}px; --y: {y}px"></div>
        </div>
        <div class="object-container">
            {#each sceneObjectList as wall, index}
                {@const point1 = {x: wall.p1.x, y: wall.p1.y}}
                {@const point2 = {x: wall.p2.x, y: wall.p2.y}}
                <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions, a11y_no_noninteractive_element_interactions -->
                <div class="card" onmouseenter={() => {selectedCard = index}} onfocus={() => {selectedCard = index}}>
                    <p class="card-title">Wall {index + 1}</p>
                    <div class="p-input">
                        <p>Point1: </p>
                        <input type="number" max="999" bind:value="{point1.x}"
                               onchange={() => modifyWall(index, point1, point2)}>
                        <input type="number" max="999" bind:value="{point1.y}"
                               onchange={() => modifyWall(index, point1, point2)}>
                    </div>
                    <div class="p-input">
                        <p>Point2: </p>
                        <input type="number" max="999" bind:value="{point2.x}"
                               onchange={() => modifyWall(index, point1, point2)}>
                        <input type="number" max="999" bind:value="{point2.y}"
                               onchange={() => modifyWall(index, point1, point2)}>
                    </div>
                    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions, a11y_no_noninteractive_element_interactions -->
                    <div class="icon-container" onclick={() => deleteWall(index)}>
                        <svg viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                        </svg>
                    </div>
                </div>
            {/each}
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

      .editor {
        max-width: 600px;
        max-height: 600px;
        width: 100%;
        border: 1px solid black;
        background: url("/grid-background.svg");
        position: relative;

        .tooltip {
          width: 100px;
          position: absolute;
          font-weight: bold;
          top: -90px;
          right: 0;
          text-align: start;
          font-size: 30px;
          color: white;

          p {
            margin: 0;
          }
        }

        .point {
          --width: 14px;
          position: absolute;
          top: calc(var(--y) - var(--width) / 2);
          left: calc(var(--x) - var(--width) / 2);
          width: var(--width);
          border-radius: 100%;
          aspect-ratio: 1;
          background-color: rgba(193, 0, 0, 0.4);

          &.cursor {
            --width: 20px;
            background-color: #c50000;
          }

          &.temporary {
            --width: 20px;
            background-color: #d500bc;
          }

          &.selected {
            --width: 26px;
            background-color: orangered;
            text-align: center;
          }
        }

      }

      .object-container {
        width: 400px;
        height: 100%;
        background-color: #0008;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px;
        overflow: auto;

        .card {
          width: 100%;
          background-color: #000a;
          padding: 15px;
          color: white;
          position: relative;
          border-radius: 10px;
          font-size: 20px;

          p.card-title {
            padding: 0 10px;
            margin: 0;
            font-weight: bold;
            font-size: 24px;
          }

          .p-input {
            padding: 10px;
            display: flex;
            border-bottom: 1px solid black;
            color: #eee;

            p {
              padding: 0;
              margin: 0 5px 0 0;
            }

            input {
              color: #eee;
              width: 100%;
              border: 1px solid transparent;
              outline: none;
              background: transparent;
              font-size: 20px;
              border-radius: 10px;
              padding: 0 8px;
            }
          }

          .icon-container {
            position: absolute;
            right: 10px;
            top: 10px;
            width: 40px;
            height: 40px;
            fill: #cc0000;
            padding: 10px;
            background: #000f1d;
            border-bottom-left-radius: 10px;
            cursor: pointer;
            transition: scale 0.3s;

            svg {
              width: 100%;
              background: transparent;
              height: 100%;
            }

            &:hover {
              fill: red;
              scale: 1.05;
            }
          }
        }

        &::-webkit-scrollbar {
          display: none; /* WebKit (Chrome, Safari) */
        }
      }

      canvas {
        max-height: calc(100vh - 89px);
        max-width: 50dvw;
      }
    }
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"]:focus {
    border: 1px solid black !important;
  }
</style>

