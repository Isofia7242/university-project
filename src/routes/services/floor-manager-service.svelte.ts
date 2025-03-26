import {createBaseFloor, createHorizontalWall, createVerticalWall} from "./building-components.svelte.js";

export type Floor = {
    level: number,
    wallHeight: number,
    width: number,
    depth: number,
    floorColor: number | string,
    buildingComponents: {
        type: "wall" | "stairs" | "door" | "window",
        color: "string"
    }[],
}

export class FloorManager {
    floors: Floor[] = $state([]);
    scene;

    constructor(scene) {
        this.scene = scene;
    }

    addFloor(width: number = 300, depth: number = 300, floorColor: string, level: number = this.floors.length) {
        this.scene.add(
            createBaseFloor(level, floorColor, width, depth)
        )
    }
    addVerticalWall(floorIndex: number) {
        this.scene.add(
            createHorizontalWall(-80, -40, 80, 0x000050),
            createHorizontalWall(-20, -80, 80, 0x000050),
            createHorizontalWall(20, -80, 80, 0x000050),
            createHorizontalWall(80, -80, 80, 0x000050),
        )
    }
}