/* Jogo da Forca Simplificado: Implemente um jogo da forca onde o usuário deve adivinhar uma palavra secreta. A cada tentativa errada, informe ao usuário quantas tentativas restam. O jogo deve terminar quando o usuário acertar a palavra ou esgotar as tentativas. */

class Hangman {
  constructor(word, maxAttempts) {
    this.word = word.toLowerCase();
    this.maxAttempts = maxAttempts;
    this.attemptsLeft = maxAttempts;
    this.guessedLetters = new Set();
  }

  guess(letter) {
    letter = letter.toLowerCase();
    if (!this.isGameOver() && !this.guessedLetters.has(letter)) {
      this.guessedLetters.add(letter);
      if (!this.word.includes(letter)) {
        this.attemptsLeft--; 
      }
    }
  }

  getWordProgress() {
    return this.word.split('').map(letter => {
      if(this.guessedLetters.has(letter)) {
        return letter;
      } else {
        return '_';
      }
    }).join('');
  }

  isGameOver() {
   return this.wordGuessed() || this.attemptsLeft === 0;
  }

  wordGuessed() {
    return this.word.split('').every(letter => this.guessedLetters.has(letter));
  }
}

module.exports = Hangman;
