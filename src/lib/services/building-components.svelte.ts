import {correction, wallHeight, wallThickness} from "$lib/services/config.js";
import {
    BoxGeometry,
    Group,
    Mesh,
    MeshStandardMaterial,
    Vector3
} from "three";

export type Point = {
    x: number,
    y: number,
}

export function createDoor(p1: Point, p2: Point, color: number | string, doorHeightGapRate: number = 0.2) {
    let point1 = new Vector3(p1.x, 0, p1.y);
    let point2 = new Vector3(p2.x, 0, p2.y);
    let distance = point1.distanceTo(point2);

    let doorWidth: number = distance - 2 * wallHeight * doorHeightGapRate;
    let doorHeight: number = wallHeight * (1 - doorHeightGapRate);

    let midPoint = new Vector3().addVectors(point1, point2).multiplyScalar(0.5);
    let angle = Math.atan2(point2.z - point1.z, point2.x - point1.x);

    let parts: Mesh[] = [];

    // Fal felső rész (ajtó lyuk felett)
    const upperHeight = wallHeight - doorHeight;
    if (upperHeight > 0) {
        const geom = new BoxGeometry(distance, upperHeight, wallThickness);
        const mesh = new Mesh(geom, new MeshStandardMaterial({ color }));
        mesh.position.set(0, doorHeight + upperHeight / 2, 0);
        parts.push(mesh);
    }

    // Fal bal és jobb oldala az ablak mellett
    const sideWidth = (distance - doorWidth) / 2;
    if (sideWidth > 0) {
        const sideHeight = doorHeight;
        const geom = new BoxGeometry(sideWidth, sideHeight, wallThickness);

        const left = new Mesh(geom, new MeshStandardMaterial({ color }));
        left.position.set(-doorWidth / 2 - sideWidth / 2, sideHeight / 2, 0);
        parts.push(left);

        const right = new Mesh(geom, new MeshStandardMaterial({ color }));
        right.position.set(doorWidth / 2 + sideWidth / 2, sideHeight / 2, 0);
        parts.push(right);
    }

    // Csoport összefogása
    const group = new Group();
    parts.forEach(mesh => group.add(mesh));
    group.position.set(midPoint.x - correction, 0, midPoint.z - correction);
    group.rotation.y = -angle;

    group.traverse(obj => {
        if (obj instanceof Mesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
        }
    });

    return group;
}

export function createWall(p1: Point, p2: Point, color: number | string) {
    const point1 = new Vector3(p1.x, 0, p1.y);
    const point2 = new Vector3(p2.x, 0, p2.y);
    const midPoint = new Vector3().addVectors(point1, point2).multiplyScalar(0.5);

    const distance = point1.distanceTo(point2);

    const geometry = new BoxGeometry(distance, wallHeight, wallThickness);
    const material = new MeshStandardMaterial({ color });
    const wall = new Mesh(geometry, material);

    //set position
    wall.position.set(midPoint.x - correction, wallHeight / 2, midPoint.z - correction);

    //rotation
    const angle = Math.atan2(point2.z - point1.z, point2.x - point1.x);
    wall.rotation.y = -angle; // Rotate to align with the two points

    wall.castShadow = true;
    wall.receiveShadow = true;

    return wall;
}

export function createFloor(level: number, width: number = 1000, depth: number = 1000, color: string, allowance: number = 0) {
    const floorGeometry = new BoxGeometry(width + allowance, 0.1, depth + allowance);
    const floorMaterial = new MeshStandardMaterial({color});
    const floor = new Mesh(floorGeometry, floorMaterial);
    floor.position.set((width / 2), -0.1 + level * wallHeight, (depth / 2));
    floor.castShadow = true;
    floor.receiveShadow = true;

    return floor;
}


