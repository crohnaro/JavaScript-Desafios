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
            case 'celsius':
                result = convertFromCelsius(temperature, toUnit);
                break;
            case 'fahrenheit':
                result = convertFromFahrenheit(temperature, toUnit);
                break;
            case 'kelvin':
                result = convertFromKelvin(temperature, toUnit);
                break;
        }
    }

    document.getElementById('result').innerText = result.toFixed(2) + ' ' + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
}

function convertFromCelsius(value, toUnit) {
    switch (toUnit) {
        case 'fahrenheit':
            return value * 9/5 + 32;
        case 'kelvin':
            return value + 273.15;
    }
}

function convertFromFahrenheit(value, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return (value - 32) * 5/9;
        case 'kelvin':
            return (value - 32) * 5/9 + 273.15;
    }
}

function convertFromKelvin(value, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return value - 273.15;
        case 'fahrenheit':
            return (value - 273.15) * 9/5 + 32;
    }
}

