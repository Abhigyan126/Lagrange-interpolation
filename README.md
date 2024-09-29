# Lagrange Interpolation for Decoding Base Values

This repository contains a Node.js script that performs Lagrange interpolation to calculate values from decoded base values. You can use it to:

- Compute the **constant term** (the value of the polynomial at \(x = 0\)).
- Interpolate values at any given \(x\)-value.
- Decode values from various bases (e.g., binary, hexadecimal).

## How It Works

1. **Base Value Decoding**: The script decodes values from different bases into decimal format.
2. **Lagrange Interpolation**: It applies the Lagrange interpolation algorithm to calculate either the constant term or the interpolated value at a specific \(x\)-value.
3. **File Input**: The script reads values from a JSON file and uses the decoded values for interpolation.
4. **Flexible Calculation**: You can either calculate the constant term at \(x = 0\) or provide any \(x\)-value for interpolation.

### Sample Usage

1. **Install Dependencies**
    Make sure Node.js is installed. Run the following commands to initialize the project:

    ```bash
    npm init -y
    npm install
    ```

2. **Input File** (`inputs.json`)
    The input file should include base-encoded values and the number of points to use for interpolation (`k`), along with `n` total points.

    Example `inputs.json`:

    ```json
    {
        "keys": {
            "n": 5,
            "k": 3
        },
        "1": {
            "base": "10",
            "value": "23"
        },
        "2": {
            "base": "16",
            "value": "1F"
        },
        "3": {
            "base": "2",
            "value": "1011"
        },
        "4": {
            "base": "8",
            "value": "27"
        }
    }
    ```

3. **Run the Script**

    You can either calculate the constant term (for \(x = 0\)) or calculate the interpolated value for any other \(x\)-value.

    **To calculate the constant term at \(x = 0\):**

    ```bash
    node index.js 0
    ```

    **To interpolate for a specific \(x\)-value (e.g., \(x = 2\)):**

    ```bash
    node index.js 2
    ```

