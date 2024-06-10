/* Conversor de Unidades de Temperatura: Desenvolva um conversor de unidades de temperatura que transforme valores entre Celsius, Fahrenheit e Kelvin. O usuário deve ser capaz de inserir um valor e selecionar a unidade de origem e destino.*/

function convertTemperature(value, fromUnit, toUnit) {
    let celsius;

    if (fromUnit === 'C') {
        celsius = value;
    } else if (fromUnit === 'F') {
        celsius = (value - 32) * (5 / 9);
    } else if (fromUnit === 'K') {
        celsius = value - 273.15;
    } else {
        throw new Error('Unidade de origem inválida');
    }

    // Convertendo de Celsius para a unidade de destino
    let result;

    if (toUnit === 'C') {
        result = celsius;
    } else if (toUnit === 'F') {
        result = celsius * (9 / 5) + 32;
    } else if (toUnit === 'K') {
        result = celsius + 273.15;
    } else {
        throw new Error('Unidade de destino inválida');
    }

    return result;
}

module.exports = convertTemperature;
