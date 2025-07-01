<script lang="ts">
    import Editor from "$lib/canvas-components/Editor.svelte";
    import {createContext} from "$lib/services/create-context.js";
    import DialogContainer from "$lib/ui-tools/dialog/DialogContainer.svelte";

    createContext();
</script>

<div class="page">
    <Editor/>
</div>

<DialogContainer/>

<style lang="scss">
  @use "../app" as *;
  .page {
    max-height: 100vh;
    scroll-snap-type: y mandatory;
    overflow: auto;
    background-color: $color-1;
  }
</style>