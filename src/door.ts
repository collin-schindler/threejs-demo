import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js'
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg'

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x123456)

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 1.5
camera.position.y = 1

const canvas = document.getElementById("threeJsCanvas") as HTMLCanvasElement
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
})

const width = .5
const height = .5
const depth = .05

const geometry = new THREE.BoxGeometry(width, height, depth)
const wallBrush = new Brush(geometry)
const doorGeometry = new THREE.BoxGeometry(.2, .3, .2)
const doorBrush = new Brush(doorGeometry)
const material = new THREE.MeshNormalMaterial()

const evaluator = new Evaluator()
const wall = evaluator.evaluate(wallBrush, doorBrush, SUBTRACTION)
wall.material = new THREE.MeshNormalMaterial({ flatShading: true })
// const wall = new THREE.Mesh(geometry, material)
wall.position.z = -width / 2
const wall2 = new THREE.Mesh(geometry, material)
wall2.position.z = width / 2
const wall3 = new THREE.Mesh(geometry, material)
wall3.rotation.y = Math.PI / 2
wall3.position.x = width * height
const wall4 = new THREE.Mesh(geometry, material)
wall4.rotation.y = Math.PI / 2
wall4.position.x = -width * height

const floor = new THREE.Mesh(geometry, material)
floor.rotation.x = Math.PI / 2
floor.position.y = -width * height

doorGeometry.translate(-.1, -.3, -.2)
const door = new THREE.Mesh(doorGeometry, new THREE.MeshBasicMaterial({ color: 0xffff00 }))
door.position.z = -width / 2
door.position.x = .1
door.position.y = .3
door.scale.z = .05

scene.add(wall)
scene.add(wall2)
scene.add(wall3)
scene.add(wall4)
scene.add(floor)
scene.add(door)

// Adding object GUI
const gui = new GUI()
const resize = gui.addFolder("Resize")
resize.add(wall.scale, "x", .25, 2)

resize.add(wall3.scale, "x", .25, 2)
const swing = gui.addFolder("Swing door")
swing.add(door.rotation, "y", 0, Math.PI / 2)

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', function () {
    renderer.render(scene, camera)
})

// const clock = new THREE.Clock()
// let delta
function animate() {
    requestAnimationFrame(animate)
    // Adjust front and back walls
    wall2.scale.x = wall.scale.x
    // Move side walls to follow
    wall3.position.x = wall.scale.x * width * height
    wall4.position.x = -wall.scale.x * width * height
    // Scale floor to follow
    floor.scale.x = wall.scale.x

    // Adjust side walls length
    wall4.scale.x = wall3.scale.x
    // Move front and back walls to follow
    wall.position.z = -wall3.scale.x * width * height
    wall2.position.z = wall3.scale.x * width * height
    // Scale floor to follow
    floor.scale.y = wall3.scale.x



    // delta = clock.getDelta()
    renderer.render(scene, camera)
}
// renderer.render(scene, camera)
animate()