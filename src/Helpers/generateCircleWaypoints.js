import * as THREE from 'three';

const generateCircleWaypoints = (radius, segments, center = [0, 0, 0]) => {
    const waypoints = [];
    for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        waypoints.push(
            new THREE.Vector3(
                Math.cos(angle) * radius + center[0], // x
                center[1], // y
                Math.sin(angle) * radius + center[2] // z
            )
        );
    }
    return waypoints;
};

export default generateCircleWaypoints;
