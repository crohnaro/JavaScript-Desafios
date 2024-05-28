const Hangman = require('../exercises/JogoDaForca');

test('Iniciou o jogo corretamente', () => {
  const game = new Hangman('hello', 5);
  expect(game.getWordProgress()).toBe('_____');
  expect(game.attempts).toBe(0);
});

test('Lida com as tentativas corretamente', () => {
  const game = new Hangman('hello', 5);
  expect(game.guess('h')).toBe('h____');
  expect(game.guess('e')).toBe('he___');
});

test('Lida com os erros corretamente', () => {
  const game = new Hangman('hello', 5);
  expect(game.guess('x')).toBe('_____');
  expect(game.attempts).toBe(1);
});

test('Detecta o fim do jogo', () => {
  const game = new Hangman('hello', 2);
  game.guess('x');
  game.guess('y');
  expect(game.guess('z')).toBe('Game Over');
  expect(game.isGameOver()).toBe(true);
});