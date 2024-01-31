function convert() {
    const inputValue = parseFloat(document.getElementById("unitInput").value);
    const inputUnit = document.getElementById("inputUnitSelect").value;
    const outputUnit = document.getElementById("outputUnitSelect").value;

    let result;

    switch (inputUnit) {
        case "giga":
            result = convertToGiga(inputValue, outputUnit);
            break;
        case "mega":
            result = convertToMega(inputValue, outputUnit);
            break;
        case "kilo":
            result = convertToKilo(inputValue, outputUnit);
            break;
        case "hecto":
            result = convertToHecto(inputValue, outputUnit);
            break;
        case "deca":
            result = convertToDeca(inputValue, outputUnit);
            break;
        case "deci":
            result = convertToDeci(inputValue, outputUnit);
            break;
        case "centi":
            result = convertToCenti(inputValue, outputUnit);
            break;
        case "milli":
            result = convertToMilli(inputValue, outputUnit);
            break;
        case "micro":
            result = convertToMicro(inputValue, outputUnit);
            break;
        case "nano":
            result = convertToNano(inputValue, outputUnit);
            break;
        case "pico":
            result = convertToPico(inputValue, outputUnit);
            break;
        default:
            result = "Invalid unit";
    }

    // Check if the result value is a number and not "Invalid unit"
    if (!isNaN(result.value) && result !== "Invalid unit") {
        // Format the result value using scientific notation
        const formattedValue = result.value.toExponential();

        // Set the result text content with the formatted value and unit
        document.getElementById("resultText").textContent = formattedValue + " " + result.unit;
    } else {
        // If the result is "Invalid unit", display it directly
        document.getElementById("resultText").textContent = result;
    }
}

function convertToGiga(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value, unit: "G" };
        case "mega":
            return { value: value * 1000, unit: "M" };
        case "kilo":
            return { value: value * 1000000, unit: "K" };
        case "hecto":
            return { value: value * 10000000, unit: "h" };
        case "deca":
            return { value: value * 100000000, unit: "da" };
        case "deci":
            return { value: value * 1000000000, unit: "d" };
        case "centi":
            return { value: value * 10000000000, unit: "c" };
        case "milli":
            return { value: value * 100000000000, unit: "m" };
        case "micro":
            return { value: value * 1000000000000000, unit: "μ" };
        case "nano":
            return { value: value * 1000000000000000000, unit: "n" };
        case "pico":
            return { value: value * 1000000000000000000000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToMega(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 1000, unit: "G" };
        case "mega":
            return { value: value, unit: "M" };
        case "kilo":
            return { value: value * 1000, unit: "K" };
        case "hecto":
            return { value: value * 10000, unit: "h" };
        case "deca":
            return { value: value * 100000, unit: "da" };
        case "deci":
            return { value: value * 1000000, unit: "d" };
        case "centi":
            return { value: value * 10000000, unit: "c" };
        case "milli":
            return { value: value * 100000000, unit: "m" };
        case "micro":
            return { value: value * 1000000000000, unit: "μ" };
        case "nano":
            return { value: value * 1000000000000000, unit: "n" };
        case "pico":
            return { value: value * 1000000000000000000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToKilo(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 1000000, unit: "G" };
        case "mega":
            return { value: value / 1000, unit: "M" };
        case "kilo":
            return { value: value, unit: "K" };
        case "hecto":
            return { value: value * 10, unit: "h" };
        case "deca":
            return { value: value * 100, unit: "da" };
        case "deci":
            return { value: value * 1000, unit: "d" };
        case "centi":
            return { value: value * 10000, unit: "c" };
        case "milli":
            return { value: value * 100000, unit: "m" };
        case "micro":
            return { value: value * 1000000000, unit: "μ" };
        case "nano":
            return { value: value * 1000000000000, unit: "n" };
        case "pico":
            return { value: value * 1000000000000000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToHecto(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 10000000, unit: "G" };
        case "mega":
            return { value: value / 10000, unit: "M" };
        case "kilo":
            return { value: value / 10, unit: "K" };
        case "hecto":
            return { value: value, unit: "h" };
        case "deca":
            return { value: value * 10, unit: "da" };
        case "deci":
            return { value: value * 100, unit: "d" };
        case "centi":
            return { value: value * 1000, unit: "c" };
        case "milli":
            return { value: value * 10000, unit: "m" };
        case "micro":
            return { value: value * 100000000, unit: "μ" };
        case "nano":
            return { value: value * 100000000000, unit: "n" };
        case "pico":
            return { value: value * 100000000000000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToDeca(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 100000000, unit: "G" };
        case "mega":
            return { value: value / 1000, unit: "M" };
        case "kilo":
            return { value: value / 100, unit: "K" };
        case "hecto":
            return { value: value / 10, unit: "h" };
        case "deca":
            return { value: value, unit: "da" };
        case "deci":
            return { value: value * 10, unit: "d" };
        case "centi":
            return { value: value * 100, unit: "c" };
        case "milli":
            return { value: value * 1000, unit: "m" };
        case "micro":
            return { value: value * 10000000, unit: "μ" };
        case "nano":
            return { value: value * 10000000000, unit: "n" };
        case "pico":
            return { value: value * 10000000000000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToDeci(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 10000000000, unit: "G" };
        case "mega":
            return { value: value / 10000000, unit: "M" };
        case "kilo":
            return { value: value / 10000, unit: "K" };
        case "hecto":
            return { value: value / 1000, unit: "h" };
        case "deca":
            return { value: value / 100, unit: "da" };
        case "deci":
            return { value: value, unit: "d" };
        case "centi":
            return { value: value * 10, unit: "c" };
        case "milli":
            return { value: value * 100, unit: "m" };
        case "micro":
            return { value: value * 100000, unit: "μ" };
        case "nano":
            return { value: value * 100000000, unit: "n" };
        case "pico":
            return { value: value * 100000000000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToCenti(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 10000000000, unit: "G" };
        case "mega":
            return { value: value / 10000000, unit: "M" };
        case "kilo":
            return { value: value / 10000, unit: "K" };
        case "hecto":
            return { value: value / 100, unit: "h" };
        case "deca":
            return { value: value / 10, unit: "da" };
        case "deci":
            return { value: value / 0.1, unit: "d" };
        case "centi":
            return { value: value, unit: "c" };
        case "milli":
            return { value: value * 10, unit: "m" };
        case "micro":
            return { value: value * 10000, unit: "μ" };
        case "nano":
            return { value: value * 10000000, unit: "n" };
        case "pico":
            return { value: value * 10000000000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToMilli(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 1000000000000, unit: "G" };
        case "mega":
            return { value: value / 1000000, unit: "M" };
        case "kilo":
            return { value: value / 1000, unit: "K" };
        case "hecto":
            return { value: value / 100, unit: "h" };
        case "deca":
            return { value: value / 10, unit: "da" };
        case "deci":
            return { value: value * 0.1, unit: "d" };
        case "centi":
            return { value: value * 0.01, unit: "c" };
        case "milli":
            return { value: value, unit: "m" };
        case "micro":
            return { value: value * 1000, unit: "μ" };
        case "nano":
            return { value: value * 1000000, unit: "n" };
        case "pico":
            return { value: value * 1000000000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToMicro(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 1000000000000000, unit: "G" };
        case "mega":
            return { value: value / 1000000000, unit: "M" };
        case "kilo":
            return { value: value / 1000000, unit: "K" };
        case "hecto":
            return { value: value / 10000, unit: "h" };
        case "deca":
            return { value: value / 100, unit: "da" };
        case "deci":
            return { value: value * 0.001, unit: "d" };
        case "centi":
            return { value: value * 0.0001, unit: "c" };
        case "milli":
            return { value: value * 0.000001, unit: "m" };
        case "micro":
            return { value: value, unit: "μ" };
        case "nano":
            return { value: value * 1000, unit: "n" };
        case "pico":
            return { value: value * 1000000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToNano(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 1000000000000000000, unit: "G" };
        case "mega":
            return { value: value / 1000000000000, unit: "M" };
        case "kilo":
            return { value: value / 1000000000, unit: "K" };
        case "hecto":
            return { value: value / 10000000, unit: "h" };
        case "deca":
            return { value: value / 100000, unit: "da" };
        case "deci":
            return { value: value / 1000, unit: "d" };
        case "centi":
            return { value: value / 10000, unit: "c" };
        case "milli":
            return { value: value / 1000000, unit: "m" };
        case "micro":
            return { value: value / 1000, unit: "μ" };
        case "nano":
            return { value: value, unit: "n" };
        case "pico":
            return { value: value * 1000, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToPico(value, unit) {
    switch (unit) {
        case "giga":
            return { value: value / 1000000000000000000000, unit: "G" };
        case "mega":
            return { value: value / 1000000000000000, unit: "M" };
        case "kilo":
            return { value: value / 1000000000000, unit: "K" };
        case "hecto":
            return { value: value / 10000000000, unit: "h" };
        case "deca":
            return { value: value / 100000000, unit: "da" };
        case "deci":
            return { value: value / 1000000, unit: "d" };
        case "centi":
            return { value: value / 10000000, unit: "c" };
        case "milli":
            return { value: value / 1000000000, unit: "m" };
        case "micro":
            return { value: value / 1000000, unit: "μ" };
        case "nano":
            return { value: value / 1000, unit: "n" };
        case "pico":
            return { value: value, unit: "p" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function toggleDirection() {
    const select1 = document.getElementById("inputUnitSelect");
    const select2 = document.getElementById("outputUnitSelect");

    const tempValue = select1.value;
    select1.value = select2.value;
    select2.value = tempValue;
}