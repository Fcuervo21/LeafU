import React from "react";
import useStyles from "./styles";
import WorldScene from "./WorldScene/WorldScene";
import World from "./WorldScene/components/World";
import { OrbitControls } from "@react-three/drei"
import { Divider, Typography } from "@mui/material";
import Particles from "./WorldScene/components/Particles";

const WorldCard = () => {
    return (
        <div style={{ height: "500px" }}>
            <Typography variant="h4" color="primary">My World</Typography>
            <Divider color="primary" />
            <WorldScene>
                <World width={16} height={9} />
                <Particles />
                <ambientLight />
                <pointLight color="#00ffff" position={[100, 0, 100]} intensity={1.2} />
                <pointLight color="#00ffff" position={[-50, 0, -50]} intensity={0.2} />
                <OrbitControls autoRotate />
            </WorldScene>
        </div>
    );
}

export default WorldCard;
