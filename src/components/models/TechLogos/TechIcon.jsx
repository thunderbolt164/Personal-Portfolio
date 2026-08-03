
// steps to how to implement a 3D model in React Three Fiber
// -Lead a '.glb' model (GLTF format)
// -Add basic lighting and camera controls
// -Applies environment reflections fro realistic rendering
// - wrap the model in a floating animation
// -Optionally tweaks  the material (like setting a  white color on a color on a specific mesh)
// -Disable Zoom using OrbitControls


import { Environment, Float,OrbitControls,useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three';
const TechIcon = ({model}) => {
    const scene =  useGLTF(model.modelPath)

    useEffect(()=>{
        if(model.name === 'Interactive Developer'){
            scene.scene.traverse((child)=>{
                if(child.isMesh && child.name === 'Object_5'){
                   child.material = new THREE.MeshStandardMaterial({color:"teal"}) 
                }
            })
        }
    },[scene])
  return (
   <Canvas>
    <ambientLight  intensity= {0.3}/>
    <directionalLight position = {[5,5,5]} intensity = {1}/>
    <Environment preset="city"/>

   <OrbitControls enableZoom={false} />


    <Float speed = {5.5} rotationIntensity = {0.5} floatIntensity= {0.9} >
        <group scale={model.scale} rotation = {model.rotation}>
            <primitive object = {scene.scene}/>
        </group>
    </Float>

   </Canvas>
  )
}

export default TechIcon
