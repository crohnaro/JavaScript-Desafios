const generatePassword = require("../exercises/SenhasAleatorias");

test("Gera uma senha do tamanho correto", () => {
  const password = generatePassword(10, { lower: true });
  expect(password.length).toBe(10);
});

test("Inclue tipos de caracteres especificos", () => {
  const password = generatePassword(20, {
    lower: true,
    upper: true,
    number: true,
    symbol: true,
  });
  expect(/[a-z]/.test(password)).toBe(true);
  expect(/[A-Z]/.test(password)).toBe(true);
  expect(/[0-9]/.test(password)).toBe(true);
  expect(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password)).toBe(true);
});

test("Gera uma senha somente com letras minusculas", () => {
  const password = generatePassword(15, { lower: true });
  expect(/^[a-z]+$/.test(password)).toBe(true);
});
