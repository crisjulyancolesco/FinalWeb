function convert() {
    const inputValue = parseFloat(document.getElementById("unitInput").value);
    const inputUnit = document.getElementById("inputUnitSelect").value;
    const outputUnit = document.getElementById("outputUnitSelect").value;

    let result;

    switch (inputUnit) {
        case "m":
            result = convertToMeter(inputValue, outputUnit);
            break;
        case "cm":
            result = convertToCentimeter(inputValue, outputUnit);
            break;
        case "mm":
            result = convertToMillimeter(inputValue, outputUnit);
            break;
        case "μm":
            result = convertToMicrometer(inputValue, outputUnit);
            break;
        case "nm":
            result = convertToNanometer(inputValue, outputUnit);
            break;
        case "km":
            result = convertToKilometer(inputValue, outputUnit);
            break;
        case "inch":
            result = convertToInch(inputValue, outputUnit);
            break;
        case "ft":
            result = convertToFoot(inputValue, outputUnit);
            break;
        case "mile":
            result = convertToMile(inputValue, outputUnit);
            break;
        case "yard":
            result = convertToYard(inputValue, outputUnit);
            break;
        case "nmi":
            result = convertToNauticalMile(inputValue, outputUnit);
            break;
        default:
            result = "Invalid unit";
    }

    document.getElementById("resultText").textContent = result.value + " " + result.unit;
}

function convertToMeter(value, unit) {
    switch (unit) {
        case "m":
            return { value: value, unit: "m" };
        case "cm":
            return { value: value * 100, unit: "cm" };
        case "mm":
            return { value: value * 1000, unit: "mm" };
        case "μm":
            return { value: value * 1000000, unit: "μm" };
        case "nm":
            return { value: value * 1000000000, unit: "nm" };
        case "km":
            return { value: value / 1000, unit: "km" };
        case "inch":
            return { value: value / 0.0254, unit: "inch" };
        case "ft":
            return { value: value / 0.3048, unit: "ft" };
        case "mile":
            return { value: value / 1609.34, unit: "mile" };
        case "yard":
            return { value: value / 0.9144, unit: "yard" };
        case "nmi":
            return { value: value / 1852, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToCentimeter(value, unit) {
    switch (unit) {
        case "m":
            return { value: value * 100, unit: "m" };
        case "cm":
            return { value: value, unit: "cm" };
        case "mm":
            return { value: value * 10, unit: "mm" };
        case "μm":
            return { value: value / 10000, unit: "μm" };
        case "nm":
            return { value: value / 10000000, unit: "nm" };
        case "km":
            return { value: value * 100000, unit: "km" };
        case "inch":
            return { value: value * 0.393701, unit: "inch" };
        case "ft":
            return { value: value * 0.0328084, unit: "ft" };
        case "mile":
            return { value: value * 160934, unit: "mile" };
        case "yard":
            return { value: value * 91.44, unit: "yard" };
        case "nmi":
            return { value: value * 185200, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToMillimeter(value, unit) {
    switch (unit) {
        case "m":
            return { value: value / 1000, unit: "m" };
        case "cm":
            return { value: value / 10, unit: "cm" };
        case "mm":
            return { value: value, unit: "mm" };
        case "μm":
            return { value: value * 1000, unit: "μm" };
        case "nm":
            return { value: value * 1000000, unit: "nm" };
        case "km":
            return { value: value / 1000000, unit: "km" };
        case "inch":
            return { value: value / 25.4, unit: "inch" };
        case "ft":
            return { value: value / 304.8, unit: "ft" };
        case "mile":
            return { value: value / 1609344, unit: "mile" };
        case "yard":
            return { value: value / 914.4, unit: "yard" };
        case "nmi":
            return { value: value / 1852000, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToMicrometer(value, unit) {
    switch (unit) {
        case "m":
            return { value: value / 1000000, unit: "m" };
        case "cm":
            return { value: value / 10000, unit: "cm" };
        case "mm":
            return { value: value / 1000, unit: "mm" };
        case "μm":
            return { value: value, unit: "μm" };
        case "nm":
            return { value: value * 1000, unit: "nm" };
        case "km":
            return { value: value / 1000000000, unit: "km" };
        case "inch":
            return { value: value / 39370.1, unit: "inch" };
        case "ft":
            return { value: value / 3.28084 * 1000000, unit: "ft" };
        case "mile":
            return { value: value / 1.60934 * 1000000000, unit: "mile" };
        case "yard":
            return { value: value / 914400, unit: "yard" };
        case "nmi":
            return { value: value / 1852000000, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToNanometer(value, unit) {
    switch (unit) {
        case "m":
            return { value: value / 1000000000, unit: "m" };
        case "cm":
            return { value: value / 10000000, unit: "cm" };
        case "mm":
            return { value: value / 1000000, unit: "mm" };
        case "μm":
            return { value: value / 1000, unit: "μm" };
        case "nm":
            return { value: value, unit: "nm" };
        case "km":
            return { value: value / 1000000000000, unit: "km" };
        case "inch":
            return { value: value / 39370000, unit: "inch" };
        case "ft":
            return { value: value / 3.28084 * 1000000000, unit: "ft" };
        case "mile":
            return { value: value / 1.60934 * 1000000000000, unit: "mile" };
        case "yard":
            return { value: value / 914400000, unit: "yard" };
        case "nmi":
            return { value: value / 1852000000000, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToKilometer(value, unit) {
    switch (unit) {
        case "m":
            return { value: value * 1000, unit: "m" };
        case "cm":
            return { value: value * 100000, unit: "cm" };
        case "mm":
            return { value: value * 1000000, unit: "mm" };
        case "μm":
            return { value: value * 1000000000, unit: "μm" };
        case "nm":
            return { value: value * 1000000000000, unit: "nm" };
        case "km":
            return { value: value, unit: "km" };
        case "inch":
            return { value: value * 39370.1, unit: "inch" };
        case "ft":
            return { value: value * 3280.84, unit: "ft" };
        case "mile":
            return { value: value / 1.60934, unit: "mile" };
        case "yard":
            return { value: value * 1094, unit: "yard" };
        case "nmi":
            return { value: value / 1.852, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToInch(value, unit) {
    switch (unit) {
        case "m":
            return { value: value / 39.3701, unit: "m" };
        case "cm":
            return { value: value / 0.393701, unit: "cm" };
        case "mm":
            return { value: value / 0.0393701, unit: "mm" };
        case "μm":
            return { value: value / 0.0000393701, unit: "μm" };
        case "nm":
            return { value: value / 0.0000000393701, unit: "nm" };
        case "km":
            return { value: value / 39370.1, unit: "km" };
        case "inch":
            return { value: value, unit: "inch" };
        case "ft":
            return { value: value / 12, unit: "ft" };
        case "mile":
            return { value: value / 63360, unit: "mile" };
        case "yard":
            return { value: value / 36, unit: "yard" };
        case "nmi":
            return { value: value / 72913.4, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToFoot(value, unit) {
    switch (unit) {
        case "m":
            return { value: value / 3.28084, unit: "m" };
        case "cm":
            return { value: value / 0.0328084, unit: "cm" };
        case "mm":
            return { value: value / 0.00328084, unit: "mm" };
        case "μm":
            return { value: value / 0.00000328084, unit: "μm" };
        case "nm":
            return { value: value / 0.00000000328084, unit: "nm" };
        case "km":
            return { value: value / 3280.84, unit: "km" };
        case "inch":
            return { value: value / 0.0833333, unit: "inch" };
        case "ft":
            return { value: value, unit: "ft" };
        case "mile":
            return { value: value / 5280, unit: "mile" };
        case "yard":
            return { value: value / 3, unit: "yard" };
        case "nmi":
            return { value: value / 6076.12, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToMile(value, unit) {
    switch (unit) {
        case "m":
            return { value: value / 0.000621371, unit: "m" };
        case "cm":
            return { value: value / 0.0000062137, unit: "cm" };
        case "mm":
            return { value: value / 0.00000062137, unit: "mm" };
        case "μm":
            return { value: value / 0.00000000062137, unit: "μm" };
        case "nm":
            return { value: value / 0.00000000000062137, unit: "nm" };
        case "km":
            return { value: value / 0.621371, unit: "km" };
        case "inch":
            return { value: value / 0.0000157828, unit: "inch" };
        case "ft":
            return { value: value / 0.000189394, unit: "ft" };
        case "mile":
            return { value: value, unit: "mile" };
        case "yard":
            return { value: value / 1760, unit: "yard" };
        case "nmi":
            return { value: value / 1.15078, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToYard(value, unit) {
    switch (unit) {
        case "m":
            return { value: value / 1.09361, unit: "m" };
        case "cm":
            return { value: value / 0.0109361, unit: "cm" };
        case "mm":
            return { value: value / 0.00109361, unit: "mm" };
        case "μm":
            return { value: value / 0.00000109361, unit: "μm" };
        case "nm":
            return { value: value / 0.00000000109361, unit: "nm" };
        case "km":
            return { value: value / 1093.61, unit: "km" };
        case "inch":
            return { value: value / 0.0277778, unit: "inch" };
        case "ft":
            return { value: value / 0.333333, unit: "ft" };
        case "mile":
            return { value: value / 0.000568182, unit: "mile" };
        case "yard":
            return { value: value, unit: "yard" };
        case "nmi":
            return { value: value / 0.000493737, unit: "nmi" };
        default:
            return { value: "Invalid unit", unit: "" };
    }
}

function convertToNauticalMile(value, unit) {
    switch (unit) {
        case "m":
            return { value: value / 0.000539957, unit: "m" };
        case "cm":
            return { value: value / 0.00000539957, unit: "cm" };
        case "mm":
            return { value: value / 0.000000539957, unit: "mm" };
        case "μm":
            return { value: value / 0.000000000539957, unit: "μm" };
        case "nm":
            return { value: value / 0.000000000000539957, unit: "nm" };
        case "km":
            return { value: value / 0.539957, unit: "km" };
        case "inch":
            return { value: value / 0.0000137149, unit: "inch" };
        case "ft":
            return { value: value / 0.000164579, unit: "ft" };
        case "mile":
            return { value: value / 1.15078, unit: "mile" };
        case "yard":
            return { value: value / 2025.37, unit: "yard" };
        case "nmi":
            return { value: value, unit: "nmi" };
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