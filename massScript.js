function convert() {
    const inputValue = parseFloat(document.getElementById("unitInput").value);
    const inputUnit = document.getElementById("inputUnitSelect").value;
    const outputUnit = document.getElementById("outputUnitSelect").value;

    let result;

    switch (inputUnit) {
        case "g":
            result = convertToGram(inputValue, outputUnit);
            break;
        case "kg":
            result = convertToKilogram(inputValue, outputUnit);
            break;
        case "lb":
            result = convertToPounds(inputValue, outputUnit);
            break;
        case "oz":
            result = convertToOunces(inputValue, outputUnit);
            break;
        case "tonne":
            result = convertToTonne(inputValue, outputUnit);
            break;
        case "mg":
            result = convertToMilligram(inputValue, outputUnit);
            break;
        case "mcg":
            result = convertToMicrogram(inputValue, outputUnit);
            break;
        case "imperial-ton":
            result = convertToImperialTon(inputValue, outputUnit);
            break;
        case "us-ton":
            result = convertToUSTon(inputValue, outputUnit);
            break;
        case "stone":
            result = convertToStone(inputValue, outputUnit);
            break;
        default:
            result = "Invalid unit";
    }

    document.getElementById("resultText").textContent = result.value + " " + result.unit;
}

function convertToGram(value, unit) {
    switch (unit) {
        case "g":
            return { value: value, unit: "g" };
        case "kg":
            return { value: value / 1000, unit: "kg" };
        case "lb":
            return { value: value / 453.592, unit: "lb" };
        case "oz":
            return { value: value / 28.3495, unit: "oz" };
        case "tonne":
            return { value: value / 1000000, unit: "tonne" };
        case "mg":
            return { value: value / 0.001, unit: "mg" };
        case "mcg":
            return { value: value / 0.000001, unit: "mcg" };
        case "imperial-ton":
            return { value: value / 1016047, unit: "imperial ton" };
        case "us-ton":
            return { value: value / 907185, unit: "US ton" };
        case "stone":
            return { value: value / 6350.29, unit: "stone" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToKilogram(value, unit) {
    switch (unit) {
        case "g":
            return { value: value / 0.001, unit: "g" };
        case "kg":
            return { value: value, unit: "kg" };
        case "lb":
            return { value: value / 0.453592, unit: "lb" };
        case "oz":
            return { value: value / 0.0283495, unit: "oz" };
        case "tonne":
            return { value: value / 1000, unit: "tonne" };
        case "mg":
            return { value: value / 0.000001, unit: "mg" };
        case "mcg":
            return { value: value / 0.000000001, unit: "mcg" };
        case "imperial-ton":
            return { value: value / 1016.05, unit: "imperial ton" };
        case "us-ton":
            return { value: value / 907.185, unit: "US ton" };
        case "stone":
            return { value: value / 6.35029, unit: "stone" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToPounds(value, unit) {
    switch (unit) {
        case "g":
            return { value: value * 453.592, unit: "g" };
        case "kg":
            return { value: value * 0.453592, unit: "kg" };
        case "lb":
            return { value: value, unit: "lb" };
        case "oz":
            return { value: value * 16, unit: "oz" };
        case "tonne":
            return { value: value / 2204.62, unit: "tonne" };
        case "mg":
            return { value: value * 453592, unit: "mg" };
        case "mcg":
            return { value: value * 453592000, unit: "mcg" };
        case "imperial-ton":
            return { value: value * 0.000446429, unit: "imperial ton" };
        case "us-ton":
            return { value: value * 0.0005, unit: "US ton" };
        case "stone":
            return { value: value * 0.0714286, unit: "stone" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToOunces(value, unit) {
    switch (unit) {
        case "g":
            return { value: value * 28.3495, unit: "g" };
        case "kg":
            return { value: value * 0.0283495, unit: "kg" };
        case "lb":
            return { value: value / 16, unit: "lb" };
        case "oz":
            return { value: value, unit: "oz" };
        case "tonne":
            return { value: value / 35273.96, unit: "tonne" };
        case "mg":
            return { value: value * 28349.5, unit: "mg" };
        case "mcg":
            return { value: value * 28349500, unit: "mcg" };
        case "imperial-ton":
            return { value: value / 35840, unit: "imperial ton" };
        case "us-ton":
            return { value: value / 32000, unit: "US ton" };
        case "stone":
            return { value: value * 0.00446429, unit: "stone" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToMilligram(value, unit) {
    switch (unit) {
        case "g":
            return { value: value / 1000, unit: "g" };
        case "kg":
            return { value: value / 1000000, unit: "kg" };
        case "lb":
            return { value: value / 453592, unit: "lb" };
        case "oz":
            return { value: value / 28349.5, unit: "oz" };
        case "tonne":
            return { value: value / 1000000000, unit: "tonne" };
        case "mg":
            return { value: value, unit: "mg" };
        case "mcg":
            return { value: value * 1000, unit: "mcg" };
        case "imperial-ton":
            return { value: value / 1016000000, unit: "imperial ton" };
        case "us-ton":
            return { value: value / 907200000, unit: "US ton" };
        case "stone":
            return { value: value / 6350000, unit: "stone" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToMicrogram(value, unit) {
    switch (unit) {
        case "g":
            return { value: value / 1000000, unit: "g" };
        case "kg":
            return { value: value / 1000000000, unit: "kg" };
        case "lb":
            return { value: value / 453592000, unit: "lb" };
        case "oz":
            return { value: value / 28349500, unit: "oz" };
        case "tonne":
            return { value: value / 1000000000000, unit: "tonne" };
        case "mg":
            return { value: value / 1000, unit: "mg" };
        case "mcg":
            return { value: value, unit: "mcg" };
        case "imperial-ton":
            return { value: value / 1016000000000, unit: "imperial ton" };
        case "us-ton":
            return { value: value / 907200000000, unit: "US ton" };
        case "stone":
            return { value: value / 6350000000, unit: "stone" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToImperialTon(value, unit) {
    switch (unit) {
        case "g":
            return { value: value * 1016047, unit: "g" };
        case "kg":
            return { value: value * 1016.05, unit: "kg" };
        case "lb":
            return { value: value * 2240, unit: "lb" };
        case "oz":
            return { value: value * 35840, unit: "oz" };
        case "tonne":
            return { value: value * 1.01605, unit: "tonne" };
        case "mg":
            return { value: value * 1.01605e+9, unit: "mg" };
        case "mcg":
            return { value: value / 1.01605e+12, unit: "mcg" };
        case "imperial-ton":
            return { value: value, unit: "imperial ton" };
        case "us-ton":
            return { value: value * 1.12, unit: "US ton" };
        case "stone":
            return { value: value * 160, unit: "stone" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToUSTon(value, unit) {
    switch (unit) {
        case "g":
            return { value: value * 907185, unit: "g" };
        case "kg":
            return { value: value * 907.185, unit: "kg" };
        case "lb":
            return { value: value * 2000, unit: "lb" };
        case "oz":
            return { value: value * 32000, unit: "oz" };
        case "tonne":
            return { value: value / 1.102, unit: "tonne" };
        case "mg":
            return { value: value * 9.07185e+8, unit: "mg" };
        case "mcg":
            return { value: value * 9.07185e+11, unit: "mcg" };
        case "imperial-ton":
            return { value: value / 1.12, unit: "imperial ton" };
        case "us-ton":
            return { value: value, unit: "US ton" };
        case "stone":
            return { value: value * 142.857, unit: "stone" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToTonne(value, unit) {
    switch (unit) {
        case "g":
            return { value: value * 1000000, unit: "g" };
        case "kg":
            return { value: value * 1000, unit: "kg" };
        case "lb":
            return { value: value * 2204.62, unit: "lb" };
        case "oz":
            return { value: value * 35273.96, unit: "oz" };
        case "tonne":
            return { value: value, unit: "tonne" };
        case "mg":
            return { value: value * 1e+9, unit: "mg" };
        case "mcg":
            return { value: value * 1e+12, unit: "mcg" };
        case "imperial-ton":
            return { value: value / 1.01605, unit: "imperial ton" };
        case "us-ton":
            return { value: value * 1.10231, unit: "US ton" };
        case "stone":
            return { value: value * 157.473, unit: "stone" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToStone(value, unit) {
    switch (unit) {
        case "g":
            return { value: value * 6350.29, unit: "g" };
        case "kg":
            return { value: value * 6.35029, unit: "kg" };
        case "lb":
            return { value: value * 14, unit: "lb" };
        case "oz":
            return { value: value * 224, unit: "oz" };
        case "tonne":
            return { value: value / 157.473, unit: "tonne" };
        case "mg":
            return { value: value * 6350290, unit: "mg" };
        case "mcg":
            return { value: value * 6.35029e+9, unit: "mcg" };
        case "imperial-ton":
            return { value: value / 160, unit: "imperial ton" };
        case "us-ton":
            return { value: value / 142.857, unit: "US ton" };
        case "stone":
            return { value: value, unit: "stone" };
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