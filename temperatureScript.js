function convert() {
    const inputValue = parseFloat(document.getElementById("unitInput").value);
    const inputUnit = document.getElementById("inputUnitSelect").value;
    const outputUnit = document.getElementById("outputUnitSelect").value;

    let result;

    switch (inputUnit) {
        case "celsius":
            result = convertToCelsius(inputValue, outputUnit);
            break;
        case "fahrenheit":
            result = convertToFahrenheit(inputValue, outputUnit);
            break;
        case "kelvin":
            result = convertToKelvin(inputValue, outputUnit);
            break;
        default:
            result = "Invalid unit";
    }

    document.getElementById("resultText").textContent = result.value + " " + result.unit;
}

function convertToCelsius(value, unit) {
    switch (unit) {
        case "celsius":
            return { value: value, unit: "°C" };
        case "fahrenheit":
            return { value: (value * (9 / 5)) + 32, unit: "°F" };
        case "kelvin":
            return { value: value + 273.15, unit: "K" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToFahrenheit(value, unit) {
    switch (unit) {
        case "celsius":
            return { value: (value - 32) * (5 / 9) , unit: "°C" };
        case "fahrenheit":
            return { value: value, unit: "°F" };
        case "kelvin":
            return { value: (value - 32) * (5 / 9) + 273.15, unit: "K" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToKelvin(value, unit) {
    switch (unit) {
        case "celsius":
            return { value: value - 273.15, unit: "°C" };
        case "fahrenheit":
            return { value: (value - 273.15) * (9 / 5) + 32, unit: "°F" };
        case "kelvin":
            return { value: value, unit: "K" };
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