import React from 'react'
import { Canvas } from "@react-three/fiber";
import Earth from "./components/Earth";
import { OrbitControls } from "@react-three/drei"
import { ClassNames } from '@emotion/react';

const WorldScene = ({ status }) => {
    return (
        <Canvas>
            <rectAreaLight
                width={3}
                height={3}
                color={"#ffc9f9"}
                intensity={3.6}
                position={[-2, 0, 5]}
                lookAt={[0, 0, 0]}
                penumbra={1}
                castShadow
            />
            <rectAreaLight
                width={3}
                height={3}
                intensity={2.6}
                color={"#bdefff"}
                position={[2, 1, 4]}
                lookAt={[0, 0, 0]}
                penumbra={2}
                castShadow
            />
            <rectAreaLight
                width={2}
                height={2}
                intensity={25}
                color={"#fff"}
                position={[1, 4, -2]}
                rotation={[0, 180, 0]}
                castShadow
            />
            <ambientLight intensity={0.035} />
            <Earth />
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableDamping={true} dampingFactor={0.07} rotateSpeed={0.03} enableZoom={false} enablePan={false} />
        </Canvas>
    )
}

export default WorldScene