import * as THREE from 'three';
let height = 100;
let defaultWallHeight = 10;
export function createHorizontalWall(y:number, x1: number, x2: number, color: number | string = 0x888888, wallHeight: number = defaultWallHeight) {
    x1 = x1 < 0 ? x1 - (wallHeight / 2) : x1 + (wallHeight / 2);
    x2 = x2 < 0 ? x2 - (wallHeight / 2) : x2 + (wallHeight / 2);
    const width = Math.abs(x2 - x1);

    const geometry = new THREE.BoxGeometry(width, height, wallHeight);
    const material = new THREE.MeshLambertMaterial({ color });
    const wall = new THREE.Mesh(geometry, material);

    wall.position.set((x1 + x2) / 2, height / 2, y);
    wall.castShadow = true;
    wall.receiveShadow = true;

    return wall;
}
export function createVerticalWall(x:number, y1: number, y2: number, color: number | string = 0x888888, wallHeight: number = defaultWallHeight) {
    y1 = y1 < 0 ? y1 - (wallHeight / 2) : y1 + (wallHeight / 2);
    y2 = y2 < 0 ? y2 - (wallHeight / 2) : y2 + (wallHeight / 2);
    const depth = Math.abs(y2 - y1);

    const geometry = new THREE.BoxGeometry(wallHeight, height, depth);
    const material = new THREE.MeshStandardMaterial({ color });
    const wall = new THREE.Mesh(geometry, material);

    wall.position.set(x, height / 2, (y1 + y2) / 2);

    wall.castShadow = true;
    wall.receiveShadow = true;

    return wall;
}

export function createBaseFloor(level: number = 0, color: number | string = 0x0063bc, width: number = 1000, depth: number = 1000) {
    const floorGeometry = new THREE.BoxGeometry(width, 0.1, depth);
    const floorMaterial = new THREE.MeshBasicMaterial({color});
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.set(0, -0.1 + height * level, 0);
    floor.castShadow = true;
    floor.receiveShadow = true;

    return floor;
}