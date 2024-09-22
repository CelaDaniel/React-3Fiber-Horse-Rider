const focusCamera = (camera, newPosition) => {
    // Set camera position and look at the model
    camera.position.set(...newPosition);
    camera.lookAt(newPosition);
};

export default focusCamera;
