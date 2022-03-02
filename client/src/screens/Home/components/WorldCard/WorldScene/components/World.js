import React from 'react'

const World = ({ width, height }) => {
    return (
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <perspectiveCamera args={[75, width / height, 0.1, 1000]} />
            <sphereGeometry />
            <meshPhongMaterial color="#0x37BE95" clipShadows />
            
        </mesh>
    )
}

export default World