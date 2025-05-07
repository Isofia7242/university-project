import {
    createDoor, createFloor,
    createWall,
    createWindow, defaultWallHeight,
    type Point
} from "$lib/services/building-components.svelte.js";
import * as THREE from 'three';

export type SceneObject = {
    objectType: ObjectType,
    object: THREE.Mesh,
    p1: Point,
    p2: Point,
    p3?: Point,
    p4?: Point,
    level: number,
}
export type ObjectType = "wall" | "door" | "window" | "stairs" | "floor";

export class SceneManager {
    sceneObjectList: SceneObject[][] = $state([[]]);
    scene: THREE.scene = $state(undefined);

    addFloorToScene(p1: Point, p2: Point, objectType: ObjectType, level: number, p3: Point, p4: Point) {
        if (level === this.sceneObjectList.length)this.sceneObjectList.push([]);
        let newObject: THREE.Mesh;

        if (objectType === "floor") {
            newObject = createFloor(p1, p2, p3, p4);
        }
        newObject.position.y += level * defaultWallHeight;
        this.sceneObjectList[level].push({object: newObject, p1, p2, p3, p4, objectType, level});
        this.scene.add(newObject);
    }

    addObjectToScene(p1: Point, p2: Point, objectType: ObjectType, level: number) {
        if (level === this.sceneObjectList.length)this.sceneObjectList.push([]);
        let newObject: THREE.Mesh;

        if (objectType === "wall") {
            newObject = createWall(p1, p2);
        }
        else if (objectType === "window") {
            newObject = createWindow(p1, p2);
        }
        else if (objectType === "door") {
            newObject = createDoor(p1, p2);
        }
        newObject.position.y += level * defaultWallHeight;
        this.sceneObjectList[level].push({object: newObject, p1, p2, objectType, level});
        this.scene.add(newObject);
    }

    removeObject(index: number, level: number) {
        this.clearUp(this.sceneObjectList[level][index].object);
        this.sceneObjectList[level].splice(index, 1);
        // check if empty array
        if(!this.sceneObjectList[level].length){this.removeLevel(level)}
        this.sceneObjectList = [...this.sceneObjectList];
    }

    modifyObject(index: number, point1: Point, point2: Point, level: number) {
        let o = this.sceneObjectList[level][index];
        let wall = o.object;
        this.clearUp(wall);
        let modifiedWall = createWall(point1, point2);
        this.sceneObjectList[level][index] = {object: modifiedWall, p1: point1, p2: point2, objectType: o.objectType, level: o.level};
        this.scene.add(
            modifiedWall
        )
    }
    removeLevel(level: number){
        for (let i = level; i < this.sceneObjectList.length; i++) {
            this.sceneObjectList[i].map(x => {x.level -= 1; x.object.position.y -= defaultWallHeight})
        }
        this.sceneObjectList.splice(level, 1);
    }
    private clearUp(sceneObject: THREE.Mesh) {
        if (!sceneObject) return;

        // Remove from scene
        this.scene.remove(sceneObject);

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
}

