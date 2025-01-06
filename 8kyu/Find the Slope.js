function slope(points) {
    // Destructure the input array into individual coordinates
    const [x1, y1, x2, y2] = points;

    // Check for undefined slope (division by zero)
    if (x1 === x2) {
        return "undefined";
    }

    // Calculate the slope as an integer
    const slopeValue = (y2 - y1) / (x2 - x1);

    return String(slopeValue); // Convert result to a string
}
