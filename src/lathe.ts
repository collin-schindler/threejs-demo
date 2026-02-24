import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg'

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x123456)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.z = 3
camera.position.y = 2

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

// Box Mesh
const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
const brush1 = new Brush(boxGeometry)
// const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const box = new THREE.Mesh(boxGeometry, boxMaterial)

// Cylinder Mesh
const cylinderGeometry = new THREE.CylinderGeometry(.8, .4, 2.5, 32)
const brush2 = new Brush(cylinderGeometry)
// const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)

// Perform mesh subtraction: box - cylinder
const evaluator = new Evaluator()
const resultMesh = evaluator.evaluate(brush1, brush2, SUBTRACTION)
resultMesh.material = new THREE.MeshNormalMaterial({ flatShading: true })

// scene.add(box)
// scene.add(cylinder)
scene.add(resultMesh)


// Adding mouse controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', function () {
  renderer.render(scene, camera)
})

renderer.render(scene, camera)