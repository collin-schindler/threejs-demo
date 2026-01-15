import * as THREE from 'three';
import { OpeningsAPI } from './utils';

export class Configurator {
  constructor(container: HTMLElement) {
    this.container = container;
    this.initThree(container);
    this.addUI(container);
  }

  initThree(container: HTMLElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 2, 5);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    // Basic lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    this.scene.add(light);

    // Ground plane
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({ color: 0x999999 })
    );
    plane.rotation.x = -Math.PI / 2;
    this.scene.add(plane);

    this.animate();
  }

  addUI(container: HTMLElement) {
    const btn = document.createElement('button');
    btn.textContent = 'Create Door';
    btn.style.position = 'absolute';
    btn.style.top = '10px';
    btn.style.left = '10px';
    container.appendChild(btn);

    btn.addEventListener('click', () => this.createDoor());
  }

  createDoor() {
    // Simple box to represent a door
    const geometry = new THREE.BoxGeometry(1, 2, 0.05);
    const material = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const door = new THREE.Mesh(geometry, material);
    door.position.set(0, 1, -2);
    this.scene.add(door);

    // Build opening data
    const opening = {
      id: Date.now().toString(),
      width: 100,
      height: 200,
      doorType: 'Standard',
      frameMaterial: 'Wood',
      hardware: ['Knob', 'Lock'],
    };

    // Persist to backend
    OpeningsAPI.saveOpening(opening);

    // Dispatch event for cart
    const evt = new CustomEvent('opening-created', { detail: opening });
    this.container.dispatchEvent(evt);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }
}
