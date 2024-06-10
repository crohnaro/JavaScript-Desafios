/* Conversor de Unidades de Temperatura: Desenvolva um conversor de unidades de temperatura que transforme valores entre Celsius, Fahrenheit e Kelvin. O usuário deve ser capaz de inserir um valor e selecionar a unidade de origem e destino.*/

function convertTemperature(value, fromUnit, toUnit){

    var unidtemp = ["C", "F", "K"];
    if (!unidtemp.includes(fromUnit) || !unidtemp.includes(toUnit)) {
    return "Unidades de temperatura inválidas.";
    }
    
    if (fromUnit === "C" && toUnit === "F") {
    return (value * 9/5) + 32;
    }
    
    else if (fromUnit === "C" && toUnit === "K") {
    return value + 273.15;
    }
    
    else if (fromUnit === "F" && toUnit === "C") {
    return (value - 32) * 5/9;
    }
    
    else if (fromUnit === "F" && toUnit === "K") {
    return (value - 32) * 5/9 + 273.15;
    }
    
    else if (fromUnit === "K" && toUnit === "C") {
    return value - 273.15;
    }
    
    else if (fromUnit === "K" && toUnit === "F") {
    return (value - 273.15) * 9/5 + 32;
    }

    }
    
    module.exports = convertTemperature;
    
/*function convertTemperature(value, fromUnit, toUnit) {
    const conversor = {
        'C': {
            'C': (temp) => temp,
            'F': (temp) => (temp * 9/5) + 32,
            'K': (temp) => temp + 273.15
        },
        'F': {
            'C': (temp) => (temp - 32) * 5/9,
            'F': (temp) => temp,
            'K': (temp) => (temp - 32) * 5/9 + 273.15
        },
        'K': {
            'C': (temp) => temp - 273.15,
            'F': (temp) => (temp - 273.15) * 9/5 + 32,
            'K': (temp) => temp
        }
    };

    if (!conversor[fromUnit] || !conversor[fromUnit][toUnit]) {
        return "Unidades de temperatura fornecidas inválidas.";
    }

    const temperaturaconv = conversor[fromUnit][toUnit](value);
    
    return temperaturaconv;
}

module.exports = convertTemperature;*/
