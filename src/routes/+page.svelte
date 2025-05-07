<script lang="ts">
    import HeroSection from "$lib/HeroSection.svelte";
    import Editor from "$lib/canvas-components/Editor.svelte";
    let initData = [
        [
            {
                "p1": {
                    "x": 300,
                    "y": 0
                },
                "p2": {
                    "x": 0,
                    "y": 0
                },
                "objectType": "wall",
                "level": 0
            },
            {
                "p1": {
                    "x": 300,
                    "y": 0
                },
                "p2": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "window",
                "level": 0
            },
            {
                "p1": {
                    "x": 0,
                    "y": 300
                },
                "p2": {
                    "x": 0,
                    "y": 0
                },
                "objectType": "door",
                "level": 0
            },
            {
                "p1": {
                    "x": 0,
                    "y": 300
                },
                "p2": {
                    "x": 0,
                    "y": 450
                },
                "objectType": "window",
                "level": 0
            },
            {
                "p1": {
                    "x": 0,
                    "y": 450
                },
                "p2": {
                    "x": 0,
                    "y": 600
                },
                "objectType": "wall",
                "level": 0
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 150,
                    "y": 600
                },
                "objectType": "wall",
                "level": 0
            },
            {
                "p1": {
                    "x": 150,
                    "y": 600
                },
                "p2": {
                    "x": 300,
                    "y": 600
                },
                "objectType": "door",
                "level": 0
            },
            {
                "p1": {
                    "x": 300,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 600
                },
                "objectType": "wall",
                "level": 0
            },
            {
                "p1": {
                    "x": 450,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "window",
                "level": 0
            },
            {
                "p1": {
                    "x": 450,
                    "y": 450
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "objectType": "window",
                "level": 0
            },
            {
                "p1": {
                    "x": 150,
                    "y": 450
                },
                "p2": {
                    "x": 150,
                    "y": 300
                },
                "objectType": "wall",
                "level": 0
            },
            {
                "p1": {
                    "x": 150,
                    "y": 300
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "objectType": "door",
                "level": 0
            },
            {
                "p1": {
                    "x": 150,
                    "y": 150
                },
                "p2": {
                    "x": 300,
                    "y": 150
                },
                "objectType": "window",
                "level": 0
            },
            {
                "p1": {
                    "x": 300,
                    "y": 150
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "wall",
                "level": 0
            },
            {
                "p1": {
                    "x": 600,
                    "y": 0
                },
                "p2": {
                    "x": 600,
                    "y": 300
                },
                "objectType": "wall",
                "level": 0
            },
            {
                "p1": {
                    "x": 600,
                    "y": 300
                },
                "p2": {
                    "x": 600,
                    "y": 450
                },
                "objectType": "door",
                "level": 0
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 600,
                    "y": 600
                },
                "objectType": "window",
                "level": 0
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 600,
                    "y": 450
                },
                "objectType": "window",
                "level": 0
            },
            {
                "p1": {
                    "x": 450,
                    "y": 600
                },
                "p2": {
                    "x": 600,
                    "y": 600
                },
                "objectType": "door",
                "level": 0
            },
            {
                "p1": {
                    "x": 450,
                    "y": 150
                },
                "p2": {
                    "x": 450,
                    "y": 300
                },
                "objectType": "wall",
                "level": 0
            },
            {
                "p1": {
                    "x": 450,
                    "y": 300
                },
                "p2": {
                    "x": 600,
                    "y": 300
                },
                "objectType": "door",
                "level": 0
            },
            {
                "p1": {
                    "x": 450,
                    "y": 300
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "door",
                "level": 0
            }
        ],
        [
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "floor",
                "level": 1
            }
        ]
    ];
</script>

<div class="page">
    <HeroSection/>
    <Editor title="Editor" {initData}/>
</div>

<style lang="scss">
  @use "../app" as *;
  .page {
    max-height: 100vh;
    scroll-snap-type: y mandatory;
    overflow: auto;
    background-color: $color-1;
  }
</style>