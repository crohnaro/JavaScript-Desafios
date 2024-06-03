/* Jogo da Forca Simplificado: Implemente um jogo da forca onde o usuário deve adivinhar uma palavra secreta. A cada tentativa errada, informe ao usuário quantas tentativas restam. O jogo deve terminar quando o usuário acertar a palavra ou esgotar as tentativas. */
class Hangman {
  constructor(word, maxAttempts) {
    this.word = word;
    this.maxAttempts = maxAttempts;
    this.attempts = 0;
    this.guessedLetters = [];
    this.wordProgress = '_'.repeat(word.length);
  }

  getWordProgress() {
    return this.wordProgress;
  }

  guess(letter) {
    if (this.isGameOver()) {
      return 'Game Over';
    }
    
    if (this.guessedLetters.includes(letter)) {
      return this.wordProgress;
    }
    
    this.guessedLetters.push(letter);

    if (this.word.includes(letter)) {
      let newProgress = '';
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === letter) {
          newProgress += letter;
        } else {
          newProgress += this.wordProgress[i];
        }
      }
      this.wordProgress = newProgress;
    } else {
      this.attempts++;
    }
    
    return this.wordProgress;
  }

  isGameOver() {
    return this.attempts >= this.maxAttempts;
  }
}

module.exports = Hangman;