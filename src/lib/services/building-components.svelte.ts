import * as THREE from 'three';
let defaultWallHeight = 70;
let wallThickness = 20;
let Correction = 300;

export type Point = {
    x: number,
    y: number,
}

export function createWall(p1: Point, p2: Point, color: number | string = 0x888888, wallHeight: number = defaultWallHeight) {
    const point1 = new THREE.Vector3(p1.x, 0, p1.y);
    const point2 = new THREE.Vector3(p2.x, 0, p2.y);
    const distance = point1.distanceTo(point2);

    const midPoint = new THREE.Vector3().addVectors(point1, point2).multiplyScalar(0.5);

    const geometry = new THREE.BoxGeometry(distance, wallHeight, wallThickness);
    const material = new THREE.MeshStandardMaterial({ color });
    const wall = new THREE.Mesh(geometry, material);

    //set position
    wall.position.set(midPoint.x - Correction, wallHeight / 2, midPoint.z - Correction);

    //rotation
    const angle = Math.atan2(point2.z - point1.z, point2.x - point1.x);
    wall.rotation.y = -angle; // Rotate to align with the two points

    wall.castShadow = true;
    wall.receiveShadow = true;

    return wall;
}

export function createBaseFloor(level: number = 0, color: number | string = 0x124967, width: number = 1000, depth: number = 1000) {
    const floorGeometry = new THREE.BoxGeometry(width, 0.1, depth);
    const floorMaterial = new THREE.MeshBasicMaterial({color});
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.set(0, -0.1 + defaultWallHeight * level, 0);
    floor.castShadow = true;
    floor.receiveShadow = true;

    return floor;
}

export function createHorizontalWall(){}
export function createVerticalWall(){}