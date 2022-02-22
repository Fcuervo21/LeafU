import React, { useEffect } from "react";
import useStyles from "./styles";
import * as THREE from 'three';
import { Paper } from "@mui/material";

const WorldCard = () => {
    const classes = useStyles();


    useEffect(() => {
        init();
        animate();
    }, [init, animate])

    let scene,
        camera,
        renderer,
        controls;

    let particles,
        saturn;


    let width = window.innerWidth,
        height = window.innerHeight;

    //plane colors, set 3 for categories
    const colors = [0xF3F3F3];

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.lookAt(scene.position);
        camera.position.z = 500;

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        //set background color here
        renderer.setClearColor(0xffffff);
        renderer.shadowMap.enabled = true;


        const ambientLight = new THREE.AmbientLight();
        scene.add(ambientLight);

        const light = new THREE.DirectionalLight();
        light.position.set(200, 100, 200);
        light.castShadow = true;
        light.shadow.camera.left = -100;
        light.shadow.camera.right = 100;
        light.shadow.camera.top = 100;
        light.shadow.camera.bottom = -100;
        scene.add(light);

        drawParticles();
        drawSaturn();
        // drawSaturn();
        // drawEarth();

        document.getElementById('world').appendChild(renderer.domElement);

        window.addEventListener('resize', onResize);
    }

    function onResize() {
        width = window.innerWidth;
        height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    function animate() {
        requestAnimationFrame(animate);

        render();
    }

    function render() {
        //rotational speed and direction of planes
        particles.rotation.x += 0.001;
        particles.rotation.y -= 0.010;
        saturn.rotation.y += 0.003;
        renderer.render(scene, camera);
    }

    function drawParticles() {
        particles = new THREE.Group();
        scene.add(particles);
        //size of planes
        const geometry = new THREE.TetrahedronGeometry(3, 0);

        //number of planes
        for (let i = 0; i < 100; i++) {
            const material = new THREE.MeshPhongMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
                shading: THREE.FlatShading
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set((Math.random() - 0.5) * 1000,
                (Math.random() - 0.5) * 1000,
                (Math.random() - 0.5) * 1000);
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            particles.add(mesh);
        }
    }

    function drawSaturn() {
        saturn = new THREE.Group();
        saturn.rotation.set(0.2, 0.3, 4);
        //   here is where i can control it looking like planes moving. above
        scene.add(saturn);
        //size of earth
        const planetGeometry = new THREE.IcosahedronGeometry(300, 1);

        const planetMaterial = new THREE.MeshPhongMaterial({
            color: 0x37BE95,
            shading: THREE.FlatShading
        });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);

        planet.castShadow = true;
        planet.receiveShadow = true;
        planet.position.set(0, 40, 0);
        saturn.add(planet);
    }

    return (
        <>
            <Paper sx={{ width: "300px", height: "300px" }}>
                <div id='world' className={classes.world}></div>
            </Paper>
        </>
    );
}

export default WorldCard;
