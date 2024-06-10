/* Conversor de Unidades de Temperatura: Desenvolva um conversor de unidades de temperatura que transforme valores entre Celsius, Fahrenheit e Kelvin. O usuário deve ser capaz de inserir um valor e selecionar a unidade de origem e destino.*/

function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit == "C") {
        if (toUnit == "F") {
            return (value * 9/5) + 32;
        } else if (toUnit == "K") {
            return value + 273.15;
        }
    }

    if (fromUnit == "F") {
        if (toUnit == "C") {
            return (value - 32) * 5/9;
        } else if (toUnit == "K") { 
            return (value - 32) * 5/9 + 273.15;
        }
    }

    if (fromUnit == "K") {
        if (toUnit == "C") {
            return value - 273.15;
        } else if (toUnit == "F") {
            return (value - 273.15) * 9/5 + 32;
        }
    }
}

module.exports = convertTemperature;
