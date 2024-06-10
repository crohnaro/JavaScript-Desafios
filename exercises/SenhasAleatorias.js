/*Gerador de Senhas Aleatórias: Crie um programa que gere senhas aleatórias seguras com base nos critérios definidos pelo usuário (comprimento da senha, inclusão de letras maiúsculas, minúsculas, números e símbolos).*/

 
function generatePassword(length, options) {
 
  const chars = {
 
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
 
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
 
    numbers: '123456789',
 
    symbols:'!@#$%¨¨&*()_'
 
  };
 
  let availableChars = "";
 
  if (options.lower) availableChars += chars.lowercase;
 
  if (options.upper) availableChars += chars.uppercase;
 
  if (options.number) availableChars += chars.numbers;
 
  if (options.symbol) availableChars += chars.symbols;
 
 
 
 
  let password = "";
 
  for (let i = 0; i < length; i++) {
 
    const randomIndex = Math.floor(Math.random() * availableChars.length);
 
    password += availableChars[randomIndex];
 
  }
 
  return password;
 
}
 
module.exports = generatePassword;