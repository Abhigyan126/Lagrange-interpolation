const fs = require('fs');

// Decode the value from a specified base
function decodeValue(value, base) {
    return parseInt(value, base);
}

// Perform Lagrange interpolation
function lagrangeInterpolation(points, x) {
    return points.reduce((acc, { x: xi, y }) => {
        const term = points.reduce((product, { x: xj }) =>
            product * (xi !== xj ? (x - xj) / (xi - xj) : 1), y);
        return acc + term;
    }, 0);
}

// Read JSON, decode values, and calculate interpolation
function interpolate(filePath, x) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const { n, k } = data.keys;

    const points = Object.entries(data)
        .filter(([key]) => key !== 'keys')
        .map(([key, { base, value }]) => ({
            x: parseInt(key),
            y: decodeValue(value, parseInt(base))
        }));

    // Use only the first k points for interpolation
    const selectedPoints = points.slice(0, k);

    // Calculate the interpolated value
    const result = lagrangeInterpolation(selectedPoints, x);
    console.log(`Interpolated value at x = ${x}:`, result);
}

// Get the x value from command-line arguments, defaulting to 0 if none is provided
const x = parseFloat(process.argv[2]) || 0;
interpolate('inputs.json', x);
