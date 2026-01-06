import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'  // Mouse controls
import Stats from 'three/addons/libs/stats.module.js' // Stats panel
import {GUI} from 'dat.gui' // GUI for objects in scene?

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1.5

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Adding mouse controls
new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1.5, .1)
const hardware = new THREE.SphereGeometry(.05, 6, 3)
hardware.translate(-.4, -.03, 0)
const material = new THREE.MeshNormalMaterial({ wireframe: true })
const handleMaterial = new THREE.MeshNormalMaterial({ transparent: true, opacity: .5 })

const cube = new THREE.Mesh(geometry, material)
const handle = new THREE.Mesh(hardware, handleMaterial)
scene.add(cube)
scene.add(handle)

// Adding stats panel
const stats = new Stats()
document.body.appendChild(stats.dom)

// Adding object gui
const gui = new GUI()

// Adding Folder for GUI
const cubeFolder = gui.addFolder("Cube")
cubeFolder.add(cube.rotation, "x", 0, Math.PI * 2)
cubeFolder.add(cube.rotation, "y", 0, Math.PI * 2)
cubeFolder.add(cube.rotation, "z", 0, Math.PI * 2)

// Adding camera folder for GUI
const cameraFolder = gui.addFolder("Camera")
cameraFolder.add(camera.position, "z", 1.5, 5)

// Adding size sliders for cube
const cubeSizingFolder = gui.addFolder("Cube Sizing")
cubeSizingFolder.add(cube.scale, "x", 1, 1.96)
cubeSizingFolder.add(cube.scale, "y", 1, 2.44)
cubeSizingFolder.add(cube.scale, "z", .1, .175)

// Adding hardware position sliders
const hardwareFolder = gui.addFolder("Hardware Position")
hardwareFolder.add(handle.position, "x", 0, .8)
hardwareFolder.add(handle.position, "y", -.4, .4)


function animate() {
  requestAnimationFrame(animate)

  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01

  renderer.render(scene, camera)

  stats.update()
}

animate()