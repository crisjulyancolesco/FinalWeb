function convert() {
    const inputValue = parseFloat(document.getElementById("unitInput").value);
    const inputUnit = document.getElementById("inputUnitSelect").value;
    const outputUnit = document.getElementById("outputUnitSelect").value;

    let result;

    switch (inputUnit) {
        case "cubicMeter":
            result = convertToCubicMeter(inputValue, outputUnit);
            break;
        case "cubicFoot":
            result = convertToCubicFoot(inputValue, outputUnit);
            break;
        case "liter":
            result = convertToLiter(inputValue, outputUnit);
            break;
        case "milliliter":
            result = convertToMilliliter(inputValue, outputUnit);
            break;
        case "gallon":
            result = convertToGallon(inputValue, outputUnit);
            break;
        case "quart":
            result = convertToQuart(inputValue, outputUnit);
            break;
        case "pint":
            result = convertToPint(inputValue, outputUnit);
            break;
        case "cup":
            result = convertToCup(inputValue, outputUnit);
            break;
        case "barrel":
            result = convertToBarrel(inputValue, outputUnit);
            break;
        case "teaspoon":
            result = convertToTeaspoon(inputValue, outputUnit);
            break;
        case "tablespoon":
            result = convertToTablespoon(inputValue, outputUnit);
            break;
        default:
            result = "Invalid unit";
    }

    document.getElementById("resultText").textContent = result.value + " " + result.unit;
}

function convertToCubicMeter(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value, unit: "m³" };
        case "cubicFoot":
            return { value: value * 0.0283168, unit: "ft³" };
        case "liter":
            return { value: value * 0.001, unit: "L" };
        case "milliliter":
            return { value: value * 0.000001, unit: "mL" };
        case "gallon":
            return { value: value * 0.00378541, unit: "gal" };
        case "quart":
            return { value: value * 0.000946353, unit: "qt" };
        case "pint":
            return { value: value * 0.000473176, unit: "pt" };
        case "cup":
            return { value: value * 0.000236588, unit: "cup" };
        case "barrel":
            return { value: value * 0.158987, unit: "bbl" };
        case "teaspoon":
            return { value: value * 0.00000492892, unit: "tsp" };
        case "tablespoon":
            return { value: value * 0.0000147868, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToCubicFoot(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value * 35.3147, unit: "m³" };
        case "cubicFoot":
            return { value: value, unit: "ft³" };
        case "liter":
            return { value: value * 28.3168, unit: "L" };
        case "milliliter":
            return { value: value * 0.0283168, unit: "mL" };
        case "gallon":
            return { value: value * 7.48052, unit: "gal" };
        case "quart":
            return { value: value * 0.946353, unit: "qt" };
        case "pint":
            return { value: value * 0.473176, unit: "pt" };
        case "cup":
            return { value: value * 0.236588, unit: "cup" };
        case "barrel":
            return { value: value * 159, unit: "bbl" };
        case "teaspoon":
            return { value: value * 0.00492892, unit: "tsp" };
        case "tablespoon":
            return { value: value * 0.0147868, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToLiter(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value / 1000, unit: "m³" };
        case "cubicFoot":
            return { value: value / 28.3168, unit: "ft³" };
        case "liter":
            return { value: value, unit: "L" };
        case "milliliter":
            return { value: value * 1000, unit: "mL" };
        case "gallon":
            return { value: value * 0.264172, unit: "gal" };
        case "quart":
            return { value: value * 1.05669, unit: "qt" };
        case "pint":
            return { value: value * 2.11338, unit: "pt" };
        case "cup":
            return { value: value * 4.22675, unit: "cup" };
        case "barrel":
            return { value: value * 0.00628981, unit: "bbl" };
        case "teaspoon":
            return { value: value * 202.884, unit: "tsp" };
        case "tablespoon":
            return { value: value * 67.628, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToMilliliter(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value * 1000000, unit: "m³" };
        case "cubicFoot":
            return { value: value * 28316.8, unit: "ft³" };
        case "liter":
            return { value: value * 1000, unit: "L" };
        case "milliliter":
            return { value: value, unit: "mL" };
        case "gallon":
            return { value: value * 3785.41, unit: "gal" };
        case "quart":
            return { value: value * 946.353, unit: "qt" };
        case "pint":
            return { value: value * 473.176, unit: "pt" };
        case "cup":
            return { value: value * 236.588, unit: "cup" };
        case "barrel":
            return { value: value * 15899.6, unit: "bbl" };
        case "teaspoon":
            return { value: value * 4.92892, unit: "tsp" };
        case "tablespoon":
            return { value: value * 14.7868, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToGallon(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value * 264.172, unit: "m³" };
        case "cubicFoot":
            return { value: value * 7.48052, unit: "ft³" };
        case "liter":
            return { value: value * 3.78541, unit: "L" };
        case "milliliter":
            return { value: value * 3785.41, unit: "mL" };
        case "gallon":
            return { value: value, unit: "gal" };
        case "quart":
            return { value: value * 4, unit: "qt" };
        case "pint":
            return { value: value * 8, unit: "pt" };
        case "cup":
            return { value: value * 16, unit: "cup" };
        case "barrel":
            return { value: value * 0.031746, unit: "bbl" };
        case "teaspoon":
            return { value: value * 768, unit: "tsp" };
        case "tablespoon":
            return { value: value * 256, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToQuart(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value * 1056.69, unit: "m³" };
        case "cubicFoot":
            return { value: value * 29.9221, unit: "ft³" };
        case "liter":
            return { value: value * 1.05669, unit: "L" };
        case "milliliter":
            return { value: value * 1056.69, unit: "mL" };
        case "gallon":
            return { value: value * 0.25, unit: "gal" };
        case "quart":
            return { value: value, unit: "qt" };
        case "pint":
            return { value: value * 2, unit: "pt" };
        case "cup":
            return { value: value * 4, unit: "cup" };
        case "barrel":
            return { value: value * 0.00793651, unit: "bbl" };
        case "teaspoon":
            return { value: value * 192, unit: "tsp" };
        case "tablespoon":
            return { value: value * 64, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToPint(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value * 2113.38, unit: "m³" };
        case "cubicFoot":
            return { value: value * 59.8442, unit: "ft³" };
        case "liter":
            return { value: value * 2.11338, unit: "L" };
        case "milliliter":
            return { value: value * 2113.38, unit: "mL" };
        case "gallon":
            return { value: value * 0.125, unit: "gal" };
        case "quart":
            return { value: value * 0.5, unit: "qt" };
        case "pint":
            return { value: value, unit: "pt" };
        case "cup":
            return { value: value * 2, unit: "cup" };
        case "barrel":
            return { value: value * 0.00396825, unit: "bbl" };
        case "teaspoon":
            return { value: value * 96, unit: "tsp" };
        case "tablespoon":
            return { value: value * 32, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToCup(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value * 0.00495113, unit: "m³" };
        case "cubicFoot":
            return { value: value * 0.139057, unit: "ft³" };
        case "liter":
            return { value: value * 0.236588, unit: "L" };
        case "milliliter":
            return { value: value * 236.588, unit: "mL" };
        case "gallon":
            return { value: value * 0.0625, unit: "gal" };
        case "quart":
            return { value: value * 0.25, unit: "qt" };
        case "pint":
            return { value: value * 0.5, unit: "pt" };
        case "cup":
            return { value: value, unit: "cup" };
        case "barrel":
            return { value: value * 0.0019768, unit: "bbl" };
        case "teaspoon":
            return { value: value * 48, unit: "tsp" };
        case "tablespoon":
            return { value: value * 16, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToBarrel(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value * 504.816, unit: "m³" };
        case "cubicFoot":
            return { value: value * 141.568, unit: "ft³" };
        case "liter":
            return { value: value * 238.481, unit: "L" };
        case "milliliter":
            return { value: value * 238481, unit: "mL" };
        case "gallon":
            return { value: value * 63.4013, unit: "gal" };
        case "quart":
            return { value: value * 253.605, unit: "qt" };
        case "pint":
            return { value: value * 507.211, unit: "pt" };
        case "cup":
            return { value: value * 8115.35, unit: "cup" };
        case "barrel":
            return { value: value, unit: "bbl" };
        case "teaspoon":
            return { value: value * 19296, unit: "tsp" };
        case "tablespoon":
            return { value: value * 6432, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToTeaspoon(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value * 202.884, unit: "m³" };
        case "cubicFoot":
            return { value: value * 5.68748, unit: "ft³" };
        case "liter":
            return { value: value * 5.91939, unit: "L" };
        case "milliliter":
            return { value: value * 4.92892, unit: "mL" };
        case "gallon":
            return { value: value * 0.013167, unit: "gal" };
        case "quart":
            return { value: value * 0.0527925, unit: "qt" };
        case "pint":
            return { value: value * 0.105585, unit: "pt" };
        case "cup":
            return { value: value * 0.211169, unit: "cup" };
        case "barrel":
            return { value: value * 0.0000517579, unit: "bbl" };
        case "teaspoon":
            return { value: value, unit: "tsp" };
        case "tablespoon":
            return { value: value * 0.333333, unit: "tbsp" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToTablespoon(value, unit) {
    switch (unit) {
        case "cubicMeter":
            return { value: value * 67.628, unit: "m³" };
        case "cubicFoot":
            return { value: value * 1.89543, unit: "ft³" };
        case "liter":
            return { value: value * 0.0780371, unit: "L" };
        case "milliliter":
            return { value: value * 14.7868, unit: "mL" };
        case "gallon":
            return { value: value * 0.00390625, unit: "gal" };
        case "quart":
            return { value: value * 0.015625, unit: "qt" };
        case "pint":
            return { value: value * 0.03125, unit: "pt" };
        case "cup":
            return { value: value * 0.0625, unit: "cup" };
        case "barrel":
            return { value: value * 0.00001543, unit: "bbl" };
        case "teaspoon":
            return { value: value * 3, unit: "tsp" };
        case "tablespoon":
            return { value: value, unit: "tbsp" };
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