const focusCameraOnHorseRider = (camera, horseRiderRef) => {
    const offset = { x: -1, y: 2, z: -6 };
    if (horseRiderRef.current) {
        // Adjust the camera to follow the object
        camera.position.x = horseRiderRef.current.position.x + offset.x;
        camera.position.y = horseRiderRef.current.position.y + offset.y;
        camera.position.z = horseRiderRef.current.position.z + offset.z;

        // Optionally, make the camera look at the object
        camera.lookAt(horseRiderRef.current.position);
    }
};

export default focusCameraOnHorseRider;
