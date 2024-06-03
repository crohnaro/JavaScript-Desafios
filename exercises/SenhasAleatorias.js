/*Gerador de Senhas Aleatórias: Crie um programa que gere senhas aleatórias seguras com base nos critérios definidos pelo usuário (comprimento da senha, inclusão de letras maiúsculas, minúsculas, números e símbolos).*/

function generatePassword(length, options) {
  const chars = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '123456789',
    symbol: '!@#$%¨&*()/*-+.'
  };

  let availableChars = "";
  if (options.lower) availableChars += chars.lower;
  if (options.upper) availableChars += chars.upper;
  if (options.number) availableChars += chars.number;
  if (options.symbol) availableChars += chars.symbol;


  let password = "";
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * availableChars.length); 
    password += availableChars[random];
    console.log(random, availableChars[random]);
  }

  return password;
}

module.exports = generatePassword;