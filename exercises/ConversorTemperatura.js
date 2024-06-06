/* Conversor de Unidades de Temperatura: Desenvolva um conversor de unidades de temperatura que transforme valores entre Celsius, Fahrenheit e Kelvin. O usuário deve ser capaz de inserir um valor e selecionar a unidade de origem e destino.*/

function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    let result;

    if (fromUnit === toUnit) {
        result = temperature;
    } else {
        switch (fromUnit) {
            case 'C':
                result = convertFromCelsius(temperature, toUnit);
                break;
            case 'F':
                result = convertFromFahrenheit(temperature, toUnit);
                break;
            case 'K':
                result = convertFromKelvin(temperature, toUnit);
                break;
        }
    }

    document.getElementById('result').innerText = result.toFixed(2) + ' ' + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
}

function convertFromCelsius(value, toUnit) {
    switch (toUnit) {
        case 'F':
            return value * 9/5 + 32;
        case 'K':
            return value + 273.15;
    }
}

function convertFromFahrenheit(value, toUnit) {
    switch (toUnit) {
        case 'C':
            return (value - 32) * 5/9;
        case 'K':
            return (value - 32) * 5/9 + 273.15;
    }
}

function convertFromKelvin(value, toUnit) {
    switch (toUnit) {
        case 'C':
            return value - 273.15;
        case 'F':
            return (value - 273.15) * 9/5 + 32;
    }
}

