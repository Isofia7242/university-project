import {Color, HemisphereLight, PerspectiveCamera, Scene, Vector3, WebGLRenderer} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

export type BuildingConfig = {
    width: number;
    depth: number;
    floorColor: string;
    wallColor: string;
    canvasBackground: string;
}

export class SceneManager {
    scene: Scene;

    private canvasBackground: string;
    private width: number;
    private depth: number;
    // private floorColor: string;
    // private wallColor: string;

    constructor(config: BuildingConfig, canvas: HTMLCanvasElement) {
        this.canvasBackground = config.canvasBackground;
        this.width = config.width;
        this.depth = config.depth;
        // this.floorColor = config.floorColor;
        // this.wallColor = config.wallColor;

        this.scene = this.createScene(canvas);
    }

    private createScene(canvas: HTMLCanvasElement): Scene {
        let scene = new Scene();
        const size = Math.max(this.width, this.depth);
        scene.background = new Color(this.canvasBackground);

        const camera = new PerspectiveCamera(100, (window.innerWidth / 2) / window.innerHeight, 0.1, size * 3);
        const renderer = new WebGLRenderer({canvas: canvas});
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(this.width / 2, 0, this.depth / 2)
        controls.maxPolarAngle = Math.PI / 2.5;
        controls.maxDistance = size * 2;
        controls.minDistance = 100;

        renderer.setSize(window.innerWidth, window.innerHeight);

        camera.position.set(size * 2, size * 1.2, size);
        camera.lookAt(new Vector3(size / 2, 0, size / 2));
        controls.update();

        const light = new HemisphereLight("#fff", "#fff", 1);
        scene.add(light);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene as Scene, camera);
        }
        animate();

        return scene;
    }
}