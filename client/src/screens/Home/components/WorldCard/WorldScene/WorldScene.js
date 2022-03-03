import React from 'react'
import { Canvas } from "@react-three/fiber";
import World from "./components/World";
import Particles from "./components/Particles";
import { OrbitControls } from "@react-three/drei"

const WorldScene = ({ status }) => {
    return (
        <Canvas>
            <World width={16} height={9} />
            <Particles />
            <pointLight color="#00ffff" position={[100, 0, 100]} intensity={1.2} />
            <pointLight color="#00ffff" position={[-50, 0, -50]} intensity={0.2} />
            <OrbitControls autoRotate />
        </Canvas>
    )
}

export default WorldScene