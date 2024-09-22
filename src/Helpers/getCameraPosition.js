const getCameraPosition = (camera, lastCameraPosition) => {
    // Only log when not in auto-rotate mode
    const currentPosition = {
        x: Math.round(camera.position.x),
        y: Math.round(camera.position.y),
        z: Math.round(camera.position.z),
    };
    // Check if the camera has moved significantly
    if (
        Math.abs(currentPosition.x - lastCameraPosition.current.x) >= 1 ||
        Math.abs(currentPosition.y - lastCameraPosition.current.y) >= 1 ||
        Math.abs(currentPosition.z - lastCameraPosition.current.z) >= 1
    ) {
        lastCameraPosition.current = currentPosition; // Update the last position
        // console.log('Camera Position: ', [
        //     currentPosition.x,
        //     currentPosition.y,
        //     currentPosition.z,
        // ]);
        return [currentPosition.x, currentPosition.y, currentPosition.z];
    }
    // console.log('Camera Position: ', [
    //     currentPosition.x,
    //     currentPosition.y,
    //     currentPosition.z,
    // ]);
    return [currentPosition.x, currentPosition.y, currentPosition.z];
};

export default getCameraPosition;
