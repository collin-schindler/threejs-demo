import * as THREE from 'three'

const door = new THREE.Shape([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1.2),
    new THREE.Vector2(1.2, 1.2),
    new THREE.Vector2(1.2, 0)
])

const holeWall = new THREE.Shape([
    new THREE.Vector2(-1, -1),
    new THREE.Vector2(1, -1),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(-1, 1)
])


holeWall.holes.push(door)

const extrusionSettings = {
    amount: 1,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.5,
    bevelSegments: 8,
    material: 0,
    extrudeMaterial: 1
}

const doorGeometry = new THREE.ExtrudeGeometry(holeWall, extrusionSettings)
const material2 = new THREE.MeshBasicMaterial({
    color: 0xff8800
})
const wallWithHole = new THREE.Mesh(doorGeometry, material2)
wallWithHole.position.x = -5

