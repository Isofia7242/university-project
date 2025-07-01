import {createFloor, createWall, type Point} from "./building-components.svelte.js";
import type {Mesh, Scene} from "three";
import type {BuildingConfig} from "$lib/services/scene-manager.svelte.js";

export type ObjectType = "wall" | "stairs" | "floor" | "base";

export type Floor = {
    level: number,
    // wallHeight: number,
    // width: number,
    // depth: number,
    buildingComponents: Array<{ type: ObjectType, mesh: Mesh }>,
}

export class FloorManager {
    floors: Floor[] = $state([]);
    scene: Scene;

    private canvasBackground: string;
    private width: number;
    private depth: number;
    private floorColor: string;
    private wallColor: string;


    constructor(config: BuildingConfig, scene: Scene) {
        this.scene = scene;

        this.canvasBackground = config.canvasBackground;
        this.width = config.width;
        this.depth = config.depth;
        this.floorColor = config.floorColor;
        this.wallColor = config.wallColor;
        this.addFloor(500);
        this.addFloor();
        this.addWall({x: 0, y: 0}, {x: config.width, y: 0});
        this.addWall({x: 0, y: 0}, {x: 0, y: config.depth});
        this.addWall({x: config.width, y: 0}, {x: config.width, y: config.depth});
        this.addWall({x: 0, y: config.depth}, {x: config.width, y: config.depth});
    }


    addFloor(allowance?: number, width: number = this.width, depth: number = this.depth) {
        let level = this.floors.length;
        this.floors.push({level: level, buildingComponents: []})

        if (level === 0){
            let baseFloor = createFloor(0, width, depth, this.floorColor, allowance);
            this.addToScene("base", baseFloor)
        }
        else{
            let floor = createFloor(level, width, depth, this.floorColor);
            this.addToScene("floor", floor)
        }
    }

    addWall(p1: Point, p2: Point) {
        let wall = createWall(p1, p2, this.wallColor);
        this.addToScene("wall", wall)
    }
    private addToScene(type: ObjectType, mesh: Mesh, level: number = 0){
        this.floors[level].buildingComponents.push({type, mesh});
        this.scene?.add(mesh);
    }

    // addFloorToScene(p1: Point, p2: Point, objectType: ObjectType, level: number, p3: Point, p4: Point) {
    //     if (level === this.buildingElements.length)this.buildingElements.push([]);
    //     let newObject: Mesh;
    //
    //     if (objectType === "floor") {
    //         newObject = createFloor(p1, p2, p3, p4);
    //     }
    //     newObject.position.y += level * defaultWallHeight;
    //     this.buildingElements[level].push({object: newObject, p1, p2, p3, p4, objectType, level});
    //     this.scene?.add(newObject);
    // }

    // addObjectToScene(p1: Point, p2: Point, objectType: ObjectType, level: number) {
    //     if (level === this.buildingElements.length)this.buildingElements.push([]);
    //     let newObject: Mesh;
    //
    //     if (objectType === "wall") {
    //         newObject = createWall(p1, p2);
    //     }
    //     else if (objectType === "door") {
    //         newObject = createDoor(p1, p2);
    //     }
    //
    //     newObject.position.y += level * defaultWallHeight;
    //     this.buildingElements[level].push({object: newObject, p1, p2, objectType, level});
    //     this.scene?.add(newObject);
    // }

    // removeObject(index: number, level: number) {
    //     this.clearUp(this.buildingElements[level][index].object);
    //     this.buildingElements[level].splice(index, 1);
    //     // check if empty array
    //     if(!this.buildingElements[level].length){this.removeLevel(level)}
    //     this.buildingElements = [...this.buildingElements];
    // }

    // modifyObject(index: number, point1: Point, point2: Point, level: number) {
    //     let o = this.buildingElements[level][index];
    //     let wall = o.object;
    //     this.clearUp(wall);
    //     let modifiedWall = createWall(point1, point2);
    //     this.buildingElements[level][index] = {object: modifiedWall, p1: point1, p2: point2, objectType: o.objectType, level: o.level};
    //     this.scene?.add(
    //         modifiedWall
    //     )
    // }
    // removeLevel(level: number){
    //     for (let i = level; i < this.buildingElements.length; i++) {
    //         this.buildingElements[i].map(x => {x.level -= 1; x.object.position.y -= defaultWallHeight})
    //     }
    //     this.buildingElements.splice(level, 1);
    // }
    // private clearUp(sceneObject: Mesh) {
    //     if (!sceneObject) return;
    //
    //     // Remove from scene
    //     this.scene?.remove(sceneObject);
    //
    //     // Dispose geometry
    //     if (sceneObject.geometry) {
    //         sceneObject.geometry.dispose();
    //     }
    //
    //     // Dispose material(s)
    //     if (sceneObject.material) {
    //         if (Array.isArray(sceneObject.material)) {
    //             sceneObject.material.forEach(mat => mat.dispose());
    //         } else {
    //             sceneObject.material.dispose();
    //         }
    //     }
    //
    //     // Dispose textures if available
    //     if (sceneObject.material?.map) {
    //         sceneObject.material.map.dispose();
    //     }
    // }
}