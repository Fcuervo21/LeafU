import React from 'react'
import { Canvas } from "@react-three/fiber";

const WorldScene = (props) => {
    let { children } = props;
    return (
        <Canvas>{children}</Canvas>
    )
}

export default WorldScene