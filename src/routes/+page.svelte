<script lang="ts">
    import HeroSection from "$lib/HeroSection.svelte";
    import Editor from "$lib/canvas-components/Editor.svelte";
    import type {SceneObject} from "$lib/services/Scene-manager.svelte.js";
    let initData: SceneObject[][] = [
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
            },
            {
                "p1": {
                    "x": 300,
                    "y": 300
                },
                "objectType": "youtube",
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
                "p3": {
                    "x": 600,
                    "y": 600
                },
                "p4": {
                    "x": 0,
                    "y": 600
                },
                "objectType": "floor",
                "level": 1
            },
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 150,
                    "y": 0
                },
                "objectType": "wall",
                "level": 1
            },
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 0,
                    "y": 150
                },
                "objectType": "wall",
                "level": 1
            },
            {
                "p1": {
                    "x": 450,
                    "y": 0
                },
                "p2": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "wall",
                "level": 1
            },
            {
                "p1": {
                    "x": 600,
                    "y": 0
                },
                "p2": {
                    "x": 600,
                    "y": 150
                },
                "objectType": "wall",
                "level": 1
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
                "objectType": "wall",
                "level": 1
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 600
                },
                "objectType": "wall",
                "level": 1
            },
            {
                "p1": {
                    "x": 150,
                    "y": 600
                },
                "p2": {
                    "x": 0,
                    "y": 600
                },
                "objectType": "wall",
                "level": 1
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 0,
                    "y": 450
                },
                "objectType": "wall",
                "level": 1
            },
            {
                "p1": {
                    "x": 150,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 600
                },
                "objectType": "window",
                "level": 1
            },
            {
                "p1": {
                    "x": 150,
                    "y": 0
                },
                "p2": {
                    "x": 450,
                    "y": 0
                },
                "objectType": "window",
                "level": 1
            },
            {
                "p1": {
                    "x": 0,
                    "y": 300
                },
                "p2": {
                    "x": 0,
                    "y": 150
                },
                "objectType": "window",
                "level": 1
            },
            {
                "p1": {
                    "x": 600,
                    "y": 300
                },
                "p2": {
                    "x": 600,
                    "y": 150
                },
                "objectType": "window",
                "level": 1
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
                "objectType": "window",
                "level": 1
            },
            {
                "p1": {
                    "x": 0,
                    "y": 450
                },
                "p2": {
                    "x": 0,
                    "y": 300
                },
                "objectType": "window",
                "level": 1
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
                "level": 1
            },
            {
                "p1": {
                    "x": 150,
                    "y": 450
                },
                "p2": {
                    "x": 300,
                    "y": 450
                },
                "objectType": "wall",
                "level": 1
            },
            {
                "p1": {
                    "x": 300,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "window",
                "level": 1
            },
            {
                "p1": {
                    "x": 450,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 300
                },
                "objectType": "door",
                "level": 1
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
                "objectType": "door",
                "level": 1
            },
            {
                "p1": {
                    "x": 150,
                    "y": 150
                },
                "p2": {
                    "x": 150,
                    "y": 300
                },
                "objectType": "window",
                "level": 1
            },
            {
                "p1": {
                    "x": 450,
                    "y": 300
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "window",
                "level": 1
            },
            {
                "p1": {
                    "x": 450,
                    "y": 150
                },
                "p2": {
                    "x": 300,
                    "y": 150
                },
                "objectType": "wall",
                "level": 1
            },
            {
                "p1": {
                    "x": 300,
                    "y": 300
                },
                "objectType": "youtube",
                "level": 1
            }
        ],
        [
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 150,
                    "y": 0
                },
                "p3": {
                    "x": 150,
                    "y": 600
                },
                "p4": {
                    "x": 0,
                    "y": 600
                },
                "objectType": "floor",
                "level": 2
            },
            {
                "p1": {
                    "x": 150,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "p3": {
                    "x": 450,
                    "y": 600
                },
                "p4": {
                    "x": 150,
                    "y": 600
                },
                "objectType": "floor",
                "level": 2
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 600
                },
                "p3": {
                    "x": 450,
                    "y": 0
                },
                "p4": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "floor",
                "level": 2
            },
            {
                "p1": {
                    "x": 150,
                    "y": 0
                },
                "p2": {
                    "x": 450,
                    "y": 0
                },
                "p3": {
                    "x": 450,
                    "y": 150
                },
                "p4": {
                    "x": 150,
                    "y": 150
                },
                "objectType": "floor",
                "level": 2
            },
            {
                "p1": {
                    "x": 150,
                    "y": 0
                },
                "p2": {
                    "x": 450,
                    "y": 0
                },
                "objectType": "wall",
                "level": 2
            },
            {
                "p1": {
                    "x": 0,
                    "y": 150
                },
                "p2": {
                    "x": 0,
                    "y": 450
                },
                "objectType": "wall",
                "level": 2
            },
            {
                "p1": {
                    "x": 150,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 600
                },
                "objectType": "wall",
                "level": 2
            },
            {
                "p1": {
                    "x": 600,
                    "y": 450
                },
                "p2": {
                    "x": 600,
                    "y": 150
                },
                "objectType": "wall",
                "level": 2
            },
            {
                "p1": {
                    "x": 0,
                    "y": 150
                },
                "p2": {
                    "x": 0,
                    "y": 0
                },
                "objectType": "window",
                "level": 2
            },
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 150,
                    "y": 0
                },
                "objectType": "window",
                "level": 2
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
                "objectType": "window",
                "level": 2
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
                "objectType": "window",
                "level": 2
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
                "objectType": "window",
                "level": 2
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
                "level": 2
            },
            {
                "p1": {
                    "x": 600,
                    "y": 150
                },
                "p2": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "window",
                "level": 2
            },
            {
                "p1": {
                    "x": 600,
                    "y": 0
                },
                "p2": {
                    "x": 450,
                    "y": 0
                },
                "objectType": "window",
                "level": 2
            },
            {
                "p1": {
                    "x": 150,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "door",
                "level": 2
            },
            {
                "p1": {
                    "x": 450,
                    "y": 150
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "objectType": "door",
                "level": 2
            },
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "objectType": "door",
                "level": 2
            },
            {
                "p1": {
                    "x": 600,
                    "y": 0
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "door",
                "level": 2
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "objectType": "door",
                "level": 2
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "door",
                "level": 2
            },
            {
                "p1": {
                    "x": 450,
                    "y": 150
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "window",
                "level": 2
            },
            {
                "p1": {
                    "x": 150,
                    "y": 150
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "objectType": "window",
                "level": 2
            },
            {
                "p1": {
                    "x": 50,
                    "y": 50
                },
                "objectType": "info",
                "level": 2
            },
            {
                "p1": {
                    "x": 50,
                    "y": 550
                },
                "objectType": "info",
                "level": 2
            },
            {
                "p1": {
                    "x": 550,
                    "y": 550
                },
                "objectType": "info",
                "level": 2
            },
            {
                "p1": {
                    "x": 550,
                    "y": 50
                },
                "objectType": "info",
                "level": 2
            }
        ],
        [
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "p3": {
                    "x": 450,
                    "y": 150
                },
                "p4": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "p3": {
                    "x": 450,
                    "y": 450
                },
                "p4": {
                    "x": 600,
                    "y": 600
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 150,
                    "y": 450
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "p3": {
                    "x": 250,
                    "y": 150
                },
                "p4": {
                    "x": 250,
                    "y": 450
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 150,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "p3": {
                    "x": 450,
                    "y": 350
                },
                "p4": {
                    "x": 150,
                    "y": 350
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 450,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "p3": {
                    "x": 350,
                    "y": 150
                },
                "p4": {
                    "x": 350,
                    "y": 450
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 450,
                    "y": 150
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "p3": {
                    "x": 150,
                    "y": 250
                },
                "p4": {
                    "x": 450,
                    "y": 250
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 250,
                    "y": 350
                },
                "p2": {
                    "x": 250,
                    "y": 250
                },
                "objectType": "door",
                "level": 3
            },
            {
                "p1": {
                    "x": 250,
                    "y": 250
                },
                "p2": {
                    "x": 350,
                    "y": 250
                },
                "objectType": "door",
                "level": 3
            },
            {
                "p1": {
                    "x": 350,
                    "y": 250
                },
                "p2": {
                    "x": 350,
                    "y": 350
                },
                "objectType": "door",
                "level": 3
            },
            {
                "p1": {
                    "x": 350,
                    "y": 350
                },
                "p2": {
                    "x": 250,
                    "y": 350
                },
                "objectType": "door",
                "level": 3
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "objectType": "wall",
                "level": 3
            },
            {
                "p1": {
                    "x": 150,
                    "y": 150
                },
                "p2": {
                    "x": 0,
                    "y": 0
                },
                "objectType": "wall",
                "level": 3
            },
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "window",
                "level": 3
            },
            {
                "p1": {
                    "x": 600,
                    "y": 0
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "wall",
                "level": 3
            },
            {
                "p1": {
                    "x": 450,
                    "y": 450
                },
                "p2": {
                    "x": 600,
                    "y": 600
                },
                "objectType": "wall",
                "level": 3
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 0,
                    "y": 600
                },
                "objectType": "window",
                "level": 3
            },
            {
                "p1": {
                    "x": 150,
                    "y": 450
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "objectType": "window",
                "level": 3
            },
            {
                "p1": {
                    "x": 450,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "window",
                "level": 3
            },
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 250,
                    "y": 250
                },
                "p3": {
                    "x": 250,
                    "y": 350
                },
                "p4": {
                    "x": 0,
                    "y": 600
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 250,
                    "y": 350
                },
                "p3": {
                    "x": 350,
                    "y": 350
                },
                "p4": {
                    "x": 600,
                    "y": 600
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 350,
                    "y": 350
                },
                "p3": {
                    "x": 350,
                    "y": 250
                },
                "p4": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 600,
                    "y": 0
                },
                "p2": {
                    "x": 350,
                    "y": 250
                },
                "p3": {
                    "x": 250,
                    "y": 250
                },
                "p4": {
                    "x": 0,
                    "y": 0
                },
                "objectType": "floor",
                "level": 3
            },
            {
                "p1": {
                    "x": 100,
                    "y": 100
                },
                "objectType": "info",
                "level": 3
            },
            {
                "p1": {
                    "x": 500,
                    "y": 100
                },
                "objectType": "info",
                "level": 3
            },
            {
                "p1": {
                    "x": 500,
                    "y": 500
                },
                "objectType": "info",
                "level": 3
            },
            {
                "p1": {
                    "x": 100,
                    "y": 500
                },
                "objectType": "info",
                "level": 3
            }
        ],
        [
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "p3": {
                    "x": 150,
                    "y": 450
                },
                "p4": {
                    "x": 0,
                    "y": 600
                },
                "objectType": "floor",
                "level": 4
            },
            {
                "p1": {
                    "x": 150,
                    "y": 150
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "p3": {
                    "x": 600,
                    "y": 0
                },
                "p4": {
                    "x": 0,
                    "y": 0
                },
                "objectType": "floor",
                "level": 4
            },
            {
                "p1": {
                    "x": 150,
                    "y": 150
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "p3": {
                    "x": 250,
                    "y": 450
                },
                "p4": {
                    "x": 250,
                    "y": 150
                },
                "objectType": "floor",
                "level": 4
            },
            {
                "p1": {
                    "x": 350,
                    "y": 150
                },
                "p2": {
                    "x": 350,
                    "y": 450
                },
                "p3": {
                    "x": 450,
                    "y": 450
                },
                "p4": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "floor",
                "level": 4
            },
            {
                "p1": {
                    "x": 150,
                    "y": 450
                },
                "p2": {
                    "x": 150,
                    "y": 350
                },
                "p3": {
                    "x": 450,
                    "y": 350
                },
                "p4": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "floor",
                "level": 4
            },
            {
                "p1": {
                    "x": 450,
                    "y": 250
                },
                "p2": {
                    "x": 150,
                    "y": 250
                },
                "p3": {
                    "x": 150,
                    "y": 150
                },
                "p4": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "floor",
                "level": 4
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
                "level": 4
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 600
                },
                "objectType": "wall",
                "level": 4
            },
            {
                "p1": {
                    "x": 600,
                    "y": 0
                },
                "p2": {
                    "x": 450,
                    "y": 0
                },
                "objectType": "wall",
                "level": 4
            },
            {
                "p1": {
                    "x": 150,
                    "y": 0
                },
                "p2": {
                    "x": 0,
                    "y": 0
                },
                "objectType": "wall",
                "level": 4
            },
            {
                "p1": {
                    "x": 450,
                    "y": 0
                },
                "p2": {
                    "x": 300,
                    "y": 0
                },
                "objectType": "window",
                "level": 4
            },
            {
                "p1": {
                    "x": 300,
                    "y": 0
                },
                "p2": {
                    "x": 150,
                    "y": 0
                },
                "objectType": "window",
                "level": 4
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
                "objectType": "window",
                "level": 4
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
                "objectType": "window",
                "level": 4
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "objectType": "window",
                "level": 4
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
                "objectType": "window",
                "level": 4
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
                "objectType": "window",
                "level": 4
            },
            {
                "p1": {
                    "x": 150,
                    "y": 150
                },
                "p2": {
                    "x": 0,
                    "y": 0
                },
                "objectType": "window",
                "level": 4
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "window",
                "level": 4
            },
            {
                "p1": {
                    "x": 450,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 300
                },
                "objectType": "window",
                "level": 4
            },
            {
                "p1": {
                    "x": 450,
                    "y": 300
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "window",
                "level": 4
            },
            {
                "p1": {
                    "x": 450,
                    "y": 150
                },
                "p2": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "window",
                "level": 4
            },
            {
                "p1": {
                    "x": 250,
                    "y": 350
                },
                "p2": {
                    "x": 250,
                    "y": 250
                },
                "objectType": "door",
                "level": 4
            },
            {
                "p1": {
                    "x": 250,
                    "y": 250
                },
                "p2": {
                    "x": 350,
                    "y": 250
                },
                "objectType": "door",
                "level": 4
            },
            {
                "p1": {
                    "x": 350,
                    "y": 250
                },
                "p2": {
                    "x": 350,
                    "y": 350
                },
                "objectType": "door",
                "level": 4
            },
            {
                "p1": {
                    "x": 350,
                    "y": 350
                },
                "p2": {
                    "x": 250,
                    "y": 350
                },
                "objectType": "door",
                "level": 4
            }
        ],
        [
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 0,
                    "y": 600
                },
                "p3": {
                    "x": 600,
                    "y": 600
                },
                "p4": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "floor",
                "level": 5
            },
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "objectType": "wall",
                "level": 5
            },
            {
                "p1": {
                    "x": 450,
                    "y": 150
                },
                "p2": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "wall",
                "level": 5
            },
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "wall",
                "level": 5
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 600,
                    "y": 600
                },
                "objectType": "wall",
                "level": 5
            },
            {
                "p1": {
                    "x": 600,
                    "y": 600
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "wall",
                "level": 5
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "objectType": "wall",
                "level": 5
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
                "objectType": "window",
                "level": 5
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
                "objectType": "window",
                "level": 5
            },
            {
                "p1": {
                    "x": 450,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 300
                },
                "objectType": "window",
                "level": 5
            },
            {
                "p1": {
                    "x": 450,
                    "y": 300
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "window",
                "level": 5
            }
        ],
        [
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "p3": {
                    "x": 450,
                    "y": 150
                },
                "p4": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "floor",
                "level": 6
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "p3": {
                    "x": 450,
                    "y": 450
                },
                "p4": {
                    "x": 600,
                    "y": 600
                },
                "objectType": "floor",
                "level": 6
            },
            {
                "p1": {
                    "x": 150,
                    "y": 150
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "objectType": "window",
                "level": 6
            },
            {
                "p1": {
                    "x": 150,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 450
                },
                "objectType": "window",
                "level": 6
            },
            {
                "p1": {
                    "x": 450,
                    "y": 450
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "objectType": "window",
                "level": 6
            },
            {
                "p1": {
                    "x": 450,
                    "y": 150
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "objectType": "window",
                "level": 6
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 600,
                    "y": 600
                },
                "objectType": "door",
                "level": 6
            },
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "door",
                "level": 6
            },
            {
                "p1": {
                    "x": 300,
                    "y": 550
                },
                "objectType": "youtube",
                "level": 6
            },
            {
                "p1": {
                    "x": 300,
                    "y": 50
                },
                "objectType": "youtube",
                "level": 6
            }
        ],
        [
            {
                "p1": {
                    "x": 0,
                    "y": 0
                },
                "p2": {
                    "x": 150,
                    "y": 150
                },
                "p3": {
                    "x": 450,
                    "y": 150
                },
                "p4": {
                    "x": 600,
                    "y": 0
                },
                "objectType": "floor",
                "level": 7
            },
            {
                "p1": {
                    "x": 0,
                    "y": 600
                },
                "p2": {
                    "x": 150,
                    "y": 450
                },
                "p3": {
                    "x": 450,
                    "y": 450
                },
                "p4": {
                    "x": 600,
                    "y": 600
                },
                "objectType": "floor",
                "level": 7
            },
            {
                "p1": {
                    "x": 150,
                    "y": 150
                },
                "p2": {
                    "x": 450,
                    "y": 150
                },
                "p3": {
                    "x": 450,
                    "y": 450
                },
                "p4": {
                    "x": 150,
                    "y": 450
                },
                "objectType": "floor",
                "level": 7
            },
            {
                "p1": {
                    "x": 300,
                    "y": 300
                },
                "objectType": "youtube",
                "level": 7
            },
            {
                "p1": {
                    "x": 300,
                    "y": 50
                },
                "objectType": "info",
                "level": 7
            },
            {
                "p1": {
                    "x": 300,
                    "y": 550
                },
                "objectType": "info",
                "level": 7
            }
        ]
    ] as SceneObject[][];
    // initData = [];
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