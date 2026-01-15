/* ──────────────────────────────────────────────────────────────
   Imports
   ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';

/* ──────────────────────────────────────────────────────────────
   Backend API helper
   ────────────────────────────────────────────────────────────── */
const API_BASE = 'http://localhost:5173/api';
const OpeningsAPI = {
  async getQuotes() {
    const r = await fetch(`${API_BASE}/quotes`);
    return r.json();
  },
  async submitQuote(openings: any[]) {
    const r = await fetch(`${API_BASE}/quotes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ openings }),
    });
    return r.json();
  },
};

/* ──────────────────────────────────────────────────────────────
   Main App
   ────────────────────────────────────────────────────────────── */
export function initApp() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  const configuratorEl = document.createElement('div');
  configuratorEl.id = 'configurator';
  const sidebarEl = document.createElement('div');
  sidebarEl.id = 'sidebar';

  appEl.appendChild(configuratorEl);
  appEl.appendChild(sidebarEl);

  new Configurator(configuratorEl);
  const cart = new Cart(sidebarEl);
  new QuoteList(sidebarEl);

  configuratorEl.addEventListener('opening-created', (e: any) => {
    cart.addOpening(e.detail);
  });
}


/* ──────────────────────────────────────────────────────────────
   Configurator (Three.js)
   ────────────────────────────────────────────────────────────── */
class Configurator {
  // -- class fields -------------------------------------------------------
  private container: HTMLElement;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  // -- constructor ---------------------------------------------------------
  constructor(container: HTMLElement) {
    this.container = container;
    this.initThree(container);
    this.addUI(container);
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  // -- Three.js init ------------------------------------------------------
  private initThree(container: HTMLElement) {
    // basic scene / camera
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xdddddd);

    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 2, 5);

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    // lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    this.scene.add(light);

    // ground plane
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({ color: 0x999999 })
    );
    plane.rotation.x = -Math.PI / 2;
    this.scene.add(plane);

    this.animate();
  }

  // -- UI ----------------------------------------------------------------
  private addUI(container: HTMLElement) {
    const btn = document.createElement('button');
    btn.textContent = 'Create Door';
    btn.style.position = 'absolute';
    btn.style.top = '10px';
    btn.style.left = '10px';
    container.appendChild(btn);

    btn.addEventListener('click', () => this.createDoor());
  }

  // -- Create a door -----------------------------------------------------
  private createDoor() {
    const geometry = new THREE.BoxGeometry(1, 2, 0.05);
    const material = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const door = new THREE.Mesh(geometry, material);
    door.position.set(0, 1, -2);
    this.scene.add(door);

    // minimal opening object – no persistence here
    const opening = {
      id: Date.now().toString(),
      width: 100,
      height: 200,
      doorType: 'Standard',
      frameMaterial: 'Wood',
      hardware: ['Knob', 'Lock'],
    };

    const evt = new CustomEvent('opening-created', { detail: opening });
    this.container.dispatchEvent(evt);
  }

  // -- Animation loop ----------------------------------------------------
  private animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  // -- Resize handling ---------------------------------------------------
  private onWindowResize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }
}

/* ──────────────────────────────────────────────────────────────
   Cart
   ────────────────────────────────────────────────────────────── */
class Cart {
  private container: HTMLElement;
  private openings: any[] = [];

  constructor(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  addOpening(opening: any) {
    this.openings.push(opening);
    this.render();
  }

  private render() {
    this.container.innerHTML = '<h3>Cart</h3>';
    const list = document.createElement('ul');
    this.openings.forEach((o) => {
      const li = document.createElement('li');
      li.textContent = `${o.doorType} – ${o.width}x${o.height} cm`;
      list.appendChild(li);
    });
    this.container.appendChild(list);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit Quote';
    submitBtn.onclick = () => this.submitQuote();
    this.container.appendChild(submitBtn);
  }

  private async submitQuote() {
    const quote = await OpeningsAPI.submitQuote(this.openings);
    alert(`Quote ${quote.id} created!`);
    this.openings = [];
    this.render();
  }
}

/* ──────────────────────────────────────────────────────────────
   Quote List
   ────────────────────────────────────────────────────────────── */
class QuoteList {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  private async render() {
    const quotes = await OpeningsAPI.getQuotes();
    const section = document.createElement('section');
    section.innerHTML = '<h3>All Quotes</h3>';

    const list = document.createElement('ul');
    quotes.forEach((q: any) => {
      const li = document.createElement('li');
      li.textContent = `Quote ${q.id} – ${q.openings.length} openings – ${q.createdAt}`;
      list.appendChild(li);
    });

    section.appendChild(list);
    this.container.appendChild(section);
  }
}

initApp(); // kick‑off
