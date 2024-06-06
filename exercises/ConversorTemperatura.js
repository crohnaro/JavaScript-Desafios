/* Conversor de Unidades de Temperatura: Desenvolva um conversor de unidades de temperatura que transforme valores entre Celsius, Fahrenheit e Kelvin. O usuário deve ser capaz de inserir um valor e selecionar a unidade de origem e destino.*/

function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === 'C' && toUnit === 'F') return (value * 9/5) + 32;
    if (fromUnit === 'C' && toUnit === 'K') return value + 273.15;
    if (fromUnit === 'F' && toUnit === 'C') return (value - 32) * 5/9;
    if (fromUnit === 'F' && toUnit === 'K') return (value - 32) * 5/9 + 273.15;
    if (fromUnit === 'K' && toUnit === 'C') return value - 273.15;
    if (fromUnit === 'K' && toUnit === 'F') return (value - 273.15) * 9/5 + 32;
    return value; // if fromUnit === toUnit
}

module.exports = convertTemperature;
