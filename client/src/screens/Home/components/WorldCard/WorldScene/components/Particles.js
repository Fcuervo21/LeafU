import React from 'react'

const Particles = () => {

    const createParticles = () => {
        for (let i = 0; i < 100; i++) {
            return (
                <mesh >
                    <tetrahedronGeometry />
                    <meshPhongMaterial color="37BE95" flatShading />
                </mesh>
            )
        }
        <mesh >
            <tetrahedronGeometry />
            <meshPhongMaterial color="37BE95" flatShading />
        </mesh>
    }
    return (
        <group>
            {createParticles}
        </group>
    )
}

export default Particles