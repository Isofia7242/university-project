<script lang="ts">
    import Dialog from "$lib/ui-tools/dialog/Dialog.svelte";
    import {getDialogManager} from "$lib/ui-tools/dialog/dialog-manager.svelte.js";
    import {
        defaultcanvasBackground,
        defaultDepth,
        defaultfloorColor,
        defaultwallColor,
        defaultWidth
    } from "$lib/services/config.js";
    import type {BuildingConfig} from "$lib/services/scene-manager.svelte.js";
    let dialogManager = getDialogManager();

    let width: number = $state(defaultWidth);
    let depth: number = $state(defaultDepth);
    let floorColor: string = $state(defaultfloorColor);
    let wallColor: string = $state(defaultwallColor);
    let canvasBackground: string = $state(defaultcanvasBackground);

    function close(){
        dialogManager.close({width, depth, floorColor, wallColor, canvasBackground} as BuildingConfig)
    }
</script>
<Dialog title="Épület paraméterezés" closeable={false}>
    <main>
        <div class="label">Szélesség (méter):</div>
        <input type="number" bind:value={width}>

        <div class="label">Hosszúság (méter):</div>
        <input type="number" bind:value={depth}>

        <div class="label">Padló szín:</div>
        <input type="color" bind:value={floorColor} style:background-color={floorColor}>

        <div class="label">Fal szín:</div>
        <input type="color" bind:value={wallColor} style:background-color={wallColor}>

        <div class="label">Háttérszín:</div>
        <input type="color" bind:value={canvasBackground} style:background-color={canvasBackground}>

        <button class="submit" onclick={() => close()}>Tovább</button>
    </main>
</Dialog>

<style lang="scss">
  @use "../ui-tools/mixins.scss" as *;
  $border-radius: 8px;
  $input-height: 32px;


  main {
    padding: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px 10px;

    input {
      width: 100%;
      border-radius: $border-radius;
      outline: none;
      border: 1px solid black;
    }
    input, .label{
      height: $input-height;
      display: flex;
      align-items: center;
    }
    button{
      grid-column: span 2;
      outline: none;
      border: none;
      padding: 10px;
      border-radius: $border-radius;
    }
  }

  input[type="color"] {
    padding: 0;
    cursor: pointer;
  }
  input[type="number"] {
    padding: 4px;
  }

  ::-webkit-color-swatch {
    border-radius: 5px;
    outline: none;
    border: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  .submit{
    color: black;
    background-color: #71fd84;

  }
</style>