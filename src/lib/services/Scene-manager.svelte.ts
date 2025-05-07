import {
    createDoor,
    createWall,
    createWindow, defaultWallHeight,
    type Point
} from "$lib/services/building-components.svelte.js";
import * as THREE from 'three';

type SceneObject = {
    objectType: ObjectType,
    object: THREE.Mesh,
    p1: Point,
    p2: Point,
    level: number,
}
export type ObjectType = "wall" | "door" | "window" | "stairs";

export class SceneManager {
    sceneObjectList: SceneObject[] = $state([]);
    scene: THREE.scene = $state(undefined);

    addObjectToScene(p1: Point, p2: Point, objectType: ObjectType, level = 1) {
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
        // newObject.position.y += level * defaultWallHeight;
        this.sceneObjectList.push({object: newObject, p1, p2, objectType, level});
        this.scene.add(newObject);
    }

    removeObject(index: number) {
        this.clearUp(this.sceneObjectList[index].object);
        this.sceneObjectList.splice(index, 1);
        this.sceneObjectList = [...this.sceneObjectList];
    }

    modifyObject(index: number, point1: Point, point2: Point) {
        let o = this.sceneObjectList[index];
        let wall = o.object;
        this.clearUp(wall);
        let modifiedWall = createWall(point1, point2);
        this.sceneObjectList[index] = {object: modifiedWall, p1: point1, p2: point2, objectType: o.objectType, level: o.level};
        this.scene.add(
            modifiedWall
        )
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

