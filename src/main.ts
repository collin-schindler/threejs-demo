import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'  // Mouse controls
import Stats from 'three/addons/libs/stats.module.js' // Stats panel
import {GUI} from 'dat.gui' // GUI for objects in scene?

const scene = new THREE.Scene()
const sceneA = new THREE.Scene()
const sceneB = new THREE.Scene()

scene.background = new THREE.Color(0x123456)
sceneA.background = new THREE.TextureLoader().load('https://sbcode.net/img/grid.png')
sceneB.background = new THREE.CubeTextureLoader().setPath('https://sbcode.net/img/')
.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'])

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1.5
const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera2.position.z = 1.5

const canvas = document.getElementById("threeJsCanvas") as HTMLCanvasElement
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(300, 300)

const canvas2 = document.getElementById("second") as HTMLCanvasElement
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 })
renderer2.setSize(300, 300)
// document.body.appendChild(renderer.domElement)

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   renderer.render(scene, camera) // used to manually rerender when the screen size changes
// })


const geometry = new THREE.BoxGeometry(1, 1.5, .1)
const hardware = new THREE.SphereGeometry(.05, 6, 3)
hardware.translate(-.4, -.03, 0)
const material = new THREE.MeshNormalMaterial({ wireframe: true })
const handleMaterial = new THREE.MeshNormalMaterial({ transparent: true, opacity: .5,})

const cube = new THREE.Mesh(geometry, material)
const cube2 = new THREE.Mesh(geometry, material)
const handle = new THREE.Mesh(hardware, handleMaterial)
const handle2 = new THREE.Mesh(hardware, handleMaterial)
scene.add(cube)
sceneA.add(handle)
sceneB.add(cube2)
sceneB.add(handle2)

// Adding stats panel
const stats = new Stats()
document.body.appendChild(stats.dom)

// Adding object gui
const gui = new GUI()

// // Adding Folder for GUI
// const cubeFolder = gui.addFolder("Door")
// cubeFolder.add(cube2.rotation, "x", 0, Math.PI * 2)
// cubeFolder.add(cube2.rotation, "y", 0, Math.PI * 2)
// cubeFolder.add(cube2.rotation, "z", 0, Math.PI * 2)

// // Adding camera folder for GUI
// const cameraFolder = gui.addFolder("Camera")
// cameraFolder.add(camera.position, "z", 1.5, 5)

// // Adding size sliders for cube
// const cubeSizingFolder = gui.addFolder("Door Sizing")
// cubeSizingFolder.add(cube2.scale, "x", 1, 1.96)
// cubeSizingFolder.add(cube2.scale, "y", 1, 2.44)
// cubeSizingFolder.add(cube2.scale, "z", .1, .175)

// // Adding hardware position sliders
// const hardwareFolder = gui.addFolder("Hardware Position")
// hardwareFolder.add(handle2.position, "x", 0, .8)
// hardwareFolder.add(handle2.position, "y", -.4, .4)

let activeScene = scene
const setScene = {
  scene: function () {
    activeScene = scene
  },
  sceneA: function () {
    activeScene = sceneA
  },
  sceneB: function () {
    activeScene = sceneB
  }
}

// Adding mouse controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', function () {
  renderer.render(activeScene, camera)
})
const controls2 = new OrbitControls(camera2, renderer2.domElement)
controls2.addEventListener('change', function () {
  renderer2.render(sceneB, camera2)
})

const sceneSwapFolder = gui.addFolder("Scene Swap")
sceneSwapFolder.add(setScene, 'scene').name('Door Only')
sceneSwapFolder.add(setScene, 'sceneA').name('Hardware Only')
sceneSwapFolder.add(setScene, 'sceneB').name('Door and Hardware')

// Adding delta time to accomodate different screen refresh rates
// const clock = new THREE.Clock()
// let delta

// function animate() {
//   requestAnimationFrame(animate)

//   delta = clock.getDelta()
//   cube.rotation.x += delta
//   cube.rotation.y += delta

//   renderer.render(activeScene, camera)
//   renderer2.render(sceneB, camera)

//   stats.update()
// }

// animate()
renderer.render(activeScene, camera)
renderer2.render(sceneB, camera2)