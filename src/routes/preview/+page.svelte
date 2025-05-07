<script lang="ts">
    import * as THREE from 'three';
    import {SceneManager, type SceneObject} from "$lib/services/Scene-manager.svelte.js";
    import {onMount, untrack} from "svelte";
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import {createBaseFloor} from "$lib/services/building-components.svelte.js";

    let canvas: HTMLCanvasElement;
    let scene: THREE.scene;
    let sceneManager = new SceneManager();
    let displayedLayers = $state(0);
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
            }
        ]
    ] as SceneObject[][];


    function getNewCanvas(canvas: HTMLCanvasElement){
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000020);

        const camera = new THREE.PerspectiveCamera(100, (window.innerWidth) / window.innerHeight, 10, 2000);
        const renderer = new THREE.WebGLRenderer({canvas: canvas});
        const controls = new OrbitControls(camera, renderer.domElement);

        controls.update();
        renderer.setSize(window.innerWidth, window.innerHeight);

        camera.position.set(700, 800, 300);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        return scene;
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
        displayedLayers = sceneManager.sceneObjectList.length - 1;
        $effect(() => {
            displayedLayers;
            untrack(() => {
                sceneManager.sceneObjectList.map((level, index) => {
                    if (index <= displayedLayers) {
                        level.map(object => scene.add(object.object));
                    } else {
                        level.map(object => scene.remove(object.object));
                    }
                })
            })
        })
    })

</script>

<div class="container">
    <div class="button-container">
        {#each Array(sceneManager.sceneObjectList.length) as _, index}
            <button onclick={() => {displayedLayers = index}} class:active={displayedLayers >= index}>{index}. level
            </button>
        {/each}
    </div>
    <canvas bind:this={canvas}></canvas>
</div>

<style lang="scss">
    .container{
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      .button-container{
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        button{
          border: none;
          padding: 10px;
          border-radius: 10px;
          transition: background-color 0.5s;
          &.active{
            background-color: orangered;
          }
        }
      }
    }
</style>
