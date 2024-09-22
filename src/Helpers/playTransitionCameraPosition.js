const playTransitionCameraPosition = (
    camera,
    initialPosition,
    finalPosition,
    updateRate
) => {
    let transitionProgress = 0;
    const step = () => {
        if (transitionProgress < 1) {
            transitionProgress += updateRate; // Increment progress

            // Interpolate the position using array indices
            const x =
                initialPosition[0] +
                (finalPosition[0] - initialPosition[0]) * transitionProgress;
            const y =
                initialPosition[1] +
                (finalPosition[1] - initialPosition[1]) * transitionProgress;
            const z =
                initialPosition[2] +
                (finalPosition[2] - initialPosition[2]) * transitionProgress;

            // Update the camera position
            camera.position.set(x, y, z);

            // Continue the animation
            if (transitionProgress < 1) {
                requestAnimationFrame(step);
            }
        } else {
            // Reset the progress for next transition
            transitionProgress = 0;
        }
        camera.lookAt(0, 0, 0); // Adjust this as needed for your target
    };

    requestAnimationFrame(step);
};

export default playTransitionCameraPosition;
