import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


export function getNewCanvas(canvas: HTMLCanvasElement){
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000020);

    const camera = new THREE.PerspectiveCamera(75, (window.innerWidth) / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({canvas: canvas});
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.update(); // Frissítse az irányítót minden egyes frame-en
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.set(150, 300, 150);
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Look straight down

    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    return scene;
}