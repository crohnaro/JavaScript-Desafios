const convertTemperature = require("../exercises/ConversorTemperatura");

test("Converte Celsius para Fahrenheit", () => {
  expect(convertTemperature(0, "C", "F")).toBe(32);
  expect(convertTemperature(100, "C", "F")).toBe(212);
});

test("Converte Celsius para Kelvin", () => {
  expect(convertTemperature(0, "C", "K")).toBe(273.15);
  expect(convertTemperature(100, "C", "K")).toBe(373.15);
});

test("Converte Fahrenheit para Celsius", () => {
  expect(convertTemperature(32, "F", "C")).toBe(0);
  expect(convertTemperature(212, "F", "C")).toBe(100);
});

test("Converte Fahrenheit para Kelvin", () => {
  expect(convertTemperature(32, "F", "K")).toBe(273.15);
  expect(convertTemperature(212, "F", "K")).toBe(373.15);
});

test("Converte Kelvin para Celsius", () => {
  expect(convertTemperature(273.15, "K", "C")).toBe(0);
  expect(convertTemperature(373.15, "K", "C")).toBe(100);
});

test("Converte Kelvin para Fahrenheit", () => {
  expect(convertTemperature(273.15, "K", "F")).toBe(32);
  expect(convertTemperature(373.15, "K", "F")).toBe(212);
});
