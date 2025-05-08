import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function getNewCanvas(canvas: HTMLCanvasElement){
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000020);

    const camera = new THREE.PerspectiveCamera(100, (window.innerWidth / 2) / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({canvas: canvas});
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.update();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        for (const hit of intersects) {
            const obj = hit.object;
            if (obj.userData?.clickable && typeof obj.userData.onClick === 'function') {
                obj.userData.onClick();
                break;
            }
        }
    });
    camera.position.set(500, 750, 400);
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