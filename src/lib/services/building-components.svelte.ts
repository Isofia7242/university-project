import * as THREE from 'three';

export let defaultWallHeight = 100;
let wallThickness = 20;
let correction = 350;

export type Point = {
    x: number,
    y: number,
}

export function createWindow(p1: Point, p2: Point, color: number | string = 0x888888, wallHeight: number = defaultWallHeight, windowHeightGapRate: number = 0.2) {
    let point1 = new THREE.Vector3(p1.x, 0, p1.y);
    let point2 = new THREE.Vector3(p2.x, 0, p2.y);
    let distance = point1.distanceTo(point2);

    let windowBottom: number = wallHeight * windowHeightGapRate;
    let windowWidth: number = distance - windowBottom;
    let windowHeight: number = wallHeight * (1 - 2 * windowHeightGapRate);

    let midPoint = new THREE.Vector3().addVectors(point1, point2).multiplyScalar(0.5);
    let angle = Math.atan2(point2.z - point1.z, point2.x - point1.x);

    let parts: THREE.Mesh[] = [];

    // Fal alsó rész (ablak alatt)
    const lowerHeight = windowBottom;
    if (lowerHeight > 0) {
        const geom = new THREE.BoxGeometry(distance, lowerHeight, wallThickness);
        const mesh = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color }));
        mesh.position.set(0, lowerHeight / 2, 0);
        parts.push(mesh);
    }

    // Fal felső rész (ablak felett)
    const upperHeight = wallHeight - windowBottom - windowHeight;
    if (upperHeight > 0) {
        const geom = new THREE.BoxGeometry(distance, upperHeight, wallThickness);
        const mesh = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color }));
        mesh.position.set(0, windowBottom + windowHeight + upperHeight / 2, 0);
        parts.push(mesh);
    }

    // Fal bal és jobb oldala az ablak mellett
    const sideWidth = (distance - windowWidth) / 2;
    if (sideWidth > 0) {
        const sideHeight = windowHeight;
        const geom = new THREE.BoxGeometry(sideWidth, sideHeight, wallThickness);

        const left = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color }));
        left.position.set(-windowWidth / 2 - sideWidth / 2, windowBottom + sideHeight / 2, 0);
        parts.push(left);

        const right = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color }));
        right.position.set(windowWidth / 2 + sideWidth / 2, windowBottom + sideHeight / 2, 0);
        parts.push(right);
    }

    // Csoport összefogása
    const group = new THREE.Group();
    parts.forEach(mesh => group.add(mesh));
    group.position.set(midPoint.x - correction, 0, midPoint.z - correction);
    group.rotation.y = -angle;

    group.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
        }
    });

    return group;
}

export function createDoor(p1: Point, p2: Point, color: number | string = 0x888888, wallHeight: number = defaultWallHeight, doorHeightGapRate: number = 0.2) {
    let point1 = new THREE.Vector3(p1.x, 0, p1.y);
    let point2 = new THREE.Vector3(p2.x, 0, p2.y);
    let distance = point1.distanceTo(point2);

    let doorWidth: number = distance - 2 * wallHeight * doorHeightGapRate;
    let doorHeight: number = wallHeight * (1 - doorHeightGapRate);

    let midPoint = new THREE.Vector3().addVectors(point1, point2).multiplyScalar(0.5);
    let angle = Math.atan2(point2.z - point1.z, point2.x - point1.x);

    let parts: THREE.Mesh[] = [];

    // Fal felső rész (ajtó lyuk felett)
    const upperHeight = wallHeight - doorHeight;
    if (upperHeight > 0) {
        const geom = new THREE.BoxGeometry(distance, upperHeight, wallThickness);
        const mesh = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color }));
        mesh.position.set(0, doorHeight + upperHeight / 2, 0);
        parts.push(mesh);
    }

    // Fal bal és jobb oldala az ablak mellett
    const sideWidth = (distance - doorWidth) / 2;
    if (sideWidth > 0) {
        const sideHeight = doorHeight;
        const geom = new THREE.BoxGeometry(sideWidth, sideHeight, wallThickness);

        const left = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color }));
        left.position.set(-doorWidth / 2 - sideWidth / 2, sideHeight / 2, 0);
        parts.push(left);

        const right = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ color }));
        right.position.set(doorWidth / 2 + sideWidth / 2, sideHeight / 2, 0);
        parts.push(right);
    }

    // Csoport összefogása
    const group = new THREE.Group();
    parts.forEach(mesh => group.add(mesh));
    group.position.set(midPoint.x - correction, 0, midPoint.z - correction);
    group.rotation.y = -angle;

    group.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
        }
    });

    return group;
}

export function createWall(p1: Point, p2: Point, color: number | string = 0x888888, wallHeight: number = defaultWallHeight) {
    const point1 = new THREE.Vector3(p1.x, 0, p1.y);
    const point2 = new THREE.Vector3(p2.x, 0, p2.y);
    const midPoint = new THREE.Vector3().addVectors(point1, point2).multiplyScalar(0.5);

    const distance = point1.distanceTo(point2);

    const geometry = new THREE.BoxGeometry(distance, wallHeight, wallThickness);
    const material = new THREE.MeshStandardMaterial({ color });
    const wall = new THREE.Mesh(geometry, material);

    //set position
    wall.position.set(midPoint.x - correction, wallHeight / 2, midPoint.z - correction);

    //rotation
    const angle = Math.atan2(point2.z - point1.z, point2.x - point1.x);
    wall.rotation.y = -angle; // Rotate to align with the two points

    wall.castShadow = true;
    wall.receiveShadow = true;

    return wall;
}

export function createFloor(p1: Point, p2: Point, p3: Point, p4: Point, color: number | string = 0xaaaaaa) {
    const shape = new THREE.Shape();
    shape.moveTo(p1.x, p1.y);
    shape.lineTo(p2.x, p2.y);
    shape.lineTo(p3.x, p3.y);
    shape.lineTo(p4.x, p4.y);
    shape.lineTo(p1.x, p1.y); // visszazárás

    const extrudeSettings = {
        steps: 1,
        depth: 2, // vastagság
        bevelEnabled: false
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshStandardMaterial({ color });
    const floor = new THREE.Mesh(geometry, material);

    // Y irányba fektetés
    floor.rotation.x = -Math.PI / 2;
    // floor.position.set(0 - correction, -1, p2.x - correction);
    floor.position.x -= correction;
    floor.position.z += correction - defaultWallHeight;
    floor.receiveShadow = true;

    return floor;
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

