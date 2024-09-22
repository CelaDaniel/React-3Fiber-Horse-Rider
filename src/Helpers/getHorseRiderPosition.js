export const getHorseRiderPosition = (
    horseRiderRef,
    lastHorseRiderPosition
) => {
    if (horseRiderRef.current) {
        const currentPosition = {
            x: Math.round(horseRiderRef.current.position.x),
            y: Math.round(horseRiderRef.current.position.y),
            z: Math.round(horseRiderRef.current.position.z),
        };

        if (
            Math.abs(currentPosition.x - lastHorseRiderPosition.current.x) >=
                1 ||
            Math.abs(currentPosition.y - lastHorseRiderPosition.current.y) >=
                1 ||
            Math.abs(currentPosition.z - lastHorseRiderPosition.current.z) >= 1
        ) {
            lastHorseRiderPosition.current = currentPosition; // Update the last position
            // console.log('HorseRider Position: ', [
            //     currentPosition.x,
            //     currentPosition.y,
            //     currentPosition.z,
            // ]);
            return [currentPosition.x, currentPosition.y, currentPosition.z];
        }
        return [currentPosition.x, currentPosition.y, currentPosition.z];
    }
};

export default getHorseRiderPosition;
