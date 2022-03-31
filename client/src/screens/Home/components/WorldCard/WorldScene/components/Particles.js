import React from 'react'

const Particles = () => {
    return (
        <group>
            {() => {
                for (let i = 0; i < 100; i++) {
                    return (
                        <mesh >
                            <tetrahedronGeometry />
                            <meshPhongMaterial color="37BE95" flatShading />
                        </mesh>
                    )
                }
            }}
        </group>
    )
}

export default Particles