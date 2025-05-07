<script lang="ts">
    import {onMount, untrack} from 'svelte';
    import {getNewCanvas} from "$lib/services/canvas.js";
    import {createBaseFloor, type Point} from "$lib/services/building-components.svelte.js";
    import * as THREE from 'three';
    import {type ObjectType, SceneManager, type SceneObject} from "$lib/services/Scene-manager.svelte.js";

    let {title, initData}: { title?: string, initData: SceneObject[][] } = $props();
    let canvas: HTMLCanvasElement;
    let editor: HTMLDivElement;
    let points: Point[] = $state([]);
    let x: number = $state(0);
    let y: number = $state(0);
    let shiftPressed = $state(false);
    let scene: THREE.scene;
    let sceneManager = new SceneManager();
    let selectedCard = $state();
    let options: ObjectType[] = ["wall", "door", "window", "stairs", "floor"];
    let selectedObjectType: ObjectType = $state(options[0]);
    let selectedObjectLevel: number = $state(0);
    let isCanvasExpanded = $state(false);

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
        sceneManager.scene = scene;
        initData.map(level => {
            level.map(ob => {
                if (ob.objectType === "floor") {
                    sceneManager.addFloorToScene(ob.p1, ob.p2, ob.objectType, ob.level, ob.p3!, ob.p4!)
                } else {
                    sceneManager.addObjectToScene(ob.p1, ob.p2, ob.objectType, ob.level)
                }
            })
        })
        $effect(() => {
            points.length;
            untrack(() => {
                if (points.length === 2 && selectedObjectType != "floor") {
                    sceneManager.addObjectToScene(points[0], points[1], selectedObjectType, selectedObjectLevel);
                    points = [];
                } else if (points.length === 4) {
                    sceneManager.addFloorToScene(points[0], points[1], selectedObjectType, selectedObjectLevel, points[2], points[3]);
                    points = [];
                }
            })
        })
        $effect(() => {
            selectedObjectType;
            untrack(() => {
                points = [];
            })
        })
    })

    function copyToClipboard() {
        const stripped = sceneManager.sceneObjectList.map(row =>
            row.map(({object, ...rest}) => rest)
        );
        navigator.clipboard.writeText(JSON.stringify(stripped, null, 2))
            .then(() => alert("Copied!"))
            .catch(() => alert("Failed to copy"));
    }

</script>
<div class="editor-container">
    <div class="title">
        {#if title}
            {@const levels = sceneManager.sceneObjectList.length}
            <div class="tooltip">
                <p>x: {x}</p>
                <p>y: {y}</p>
            </div>
            <select bind:value={selectedObjectType}>
                {#each options as option}
                    <option>{option}</option>
                {/each}
            </select>
            <select bind:value={selectedObjectLevel}>
                {#each Array(levels) as _, index}
                    <option value={index}>{index}. szint</option>
                {/each}
                <option value={levels}>{levels}. szint</option>
            </select>
        {/if}
    </div>

    <div class="split-screen">
        <button class="close" onclick={() => copyToClipboard()}>Copy to clipboard</button>
        <canvas bind:this={canvas} class:expanded={isCanvasExpanded}></canvas>
        <div role="none" class="editor" bind:this={editor} onclick={() => {placePoint()}}
             onmousemove={handleMouseMove}>
            {#each sceneManager.sceneObjectList as level, levelIndex}
                {@const activeLevel = levelIndex === selectedObjectLevel}
                {#each level as wall, index}
                    {@const selected = selectedCard === index && activeLevel}
                    <div class="point" class:faded={!activeLevel} class:selected={selected}
                         style="--x: {wall.p1.x}px; --y: {wall.p1.y}px">
                        {#if selected}
                            p1
                        {/if}
                    </div>
                    <div class="point" class:faded={!activeLevel} class:selected={selected}
                         style="--x: {wall.p2.x}px; --y: {wall.p2.y}px">
                        {#if selected}
                            p2
                        {/if}
                    </div>
                {/each}
            {/each}
            {#if points[0]}
                <div class="point temporary" style="--x: {points[0].x}px; --y: {points[0].y}px"></div>
            {/if}
            <div class="point cursor" style="--x: {x}px; --y: {y}px"></div>
        </div>
        <div class="object-container">
            {#each sceneManager.sceneObjectList as level, levelIndex}
                {@const activeLevel = levelIndex === selectedObjectLevel}
                {#if activeLevel}
                    <button class="delete-level"
                            onclick={() => {if(window.confirm("Are you sure?"))sceneManager.removeLevel(levelIndex)}}>
                        Delete {levelIndex}. level
                    </button>
                    {#each level as wall, index}
                        <!--{@const point1 = {x: wall.p1.x, y: wall.p1.y}}-->
                        <!--{@const point2 = {x: wall.p2.x, y: wall.p2.y}}-->
                        <div role="none" class="card" onmouseenter={() => {selectedCard = index}}
                             onfocus={() => {selectedCard = index}}>
                            <p class="card-title">{wall.objectType} {index + 1}</p>
                            <!--                            <div class="p-input">-->
                            <!--                                <p>Point1: </p>-->
                            <!--                                <input type="number" max="999" bind:value="{point1.x}"-->
                            <!--                                       onchange={() => sceneManager.modifyObject(index, point1, point2, selectedObjectLevel)}>-->
                            <!--                                <input type="number" max="999" bind:value="{point1.y}"-->
                            <!--                                       onchange={() => sceneManager.modifyObject(index, point1, point2, selectedObjectLevel)}>-->
                            <!--                            </div>-->
                            <!--                            <div class="p-input">-->
                            <!--                                <p>Point2: </p>-->
                            <!--                                <input type="number" max="999" bind:value="{point2.x}"-->
                            <!--                                       onchange={() => sceneManager.modifyObject(index, point1, point2, selectedObjectLevel)}>-->
                            <!--                                <input type="number" max="999" bind:value="{point2.y}"-->
                            <!--                                       onchange={() => sceneManager.modifyObject(index, point1, point2, selectedObjectLevel)}>-->
                            <!--                            </div>-->
                            <div role="none" class="icon-container"
                                 onclick={() => sceneManager.removeObject(index, selectedObjectLevel)}>
                                <svg viewBox="0 0 448 512">
                                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                </svg>
                            </div>
                        </div>
                    {/each}
                {/if}
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

    .title {
      display: flex;
      justify-content: end;
      align-items: center;
      padding: 0 20px;

      .tooltip {
        width: 100px;
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

      select {
        padding: 10px;
        height: max-content;
        outline: none;
        border-radius: 10px;
        font-size: 20px;
        width: 150px;
        text-align: center;
      }
    }

    .split-screen {
      max-height: calc(100vh - 89px);
      width: 100%;
      display: flex;
      flex-direction: row;
      position: relative;

      .close, .expand {
        position: absolute;
        top: 0;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        margin: 10px;
        z-index: 3;
        border: none;
        outline: none;
      }

      .editor {
        max-width: 600px;
        max-height: 600px;
        width: 100%;
        border: 1px solid black;
        background: url("/grid-background.svg");
        position: relative;

        .point {
          --width: 14px;
          position: absolute;
          top: calc(var(--y) - var(--width) / 2);
          left: calc(var(--x) - var(--width) / 2);
          width: var(--width);
          border-radius: 100%;
          aspect-ratio: 1;
          background-color: rgba(193, 0, 0, 0.5);

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

          &.faded {
            opacity: 0.6;
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
        padding: 15px 40px 15px 15px;
        overflow: auto;
        box-sizing: border-box;

        .delete-level {
          box-sizing: border-box;
          border: none;
          border-radius: 10px;
          padding: 15px;
          font-weight: bold;
          font-size: 16px;
          width: 320px;
          background-color: #dc3454;
        }

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
            //width: 40px;
            //height: 40px;
            width: 20px;
            height: 20px;
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

        &.expanded {
          max-width: calc(100vw - 18px);
          width: 100vw;
          position: absolute;
          z-index: 2;
          top: 0;
        }
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

