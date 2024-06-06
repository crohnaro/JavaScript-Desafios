class Hangman {
  constructor(word, maxAttempts) {
    this.word = word.toLowerCase(); 
    this.maxAttempts = maxAttempts; 
    this.attempts = 0; 
    this.guessedLetters = [];
    this.correctGuesses = new Set(); 
  }

  guess(letter) {
    letter = letter.toLowerCase();

    if (this.isGameOver()) {
      return 'The game is over.';
    }

    if (this.guessedLetters.includes(letter)) {
      return 'You have already guessed that letter.';
    }

    this.guessedLetters.push(letter);

    if (this.word.includes(letter)) {
      this.correctGuesses.add(letter);
    } else {
      this.attempts++;
    }

    if (this.isGameOver()) {
      if (this.hasWon()) {
        return 'Congratulations! You guessed the word: ' + this.word;
      } else {
        return 'Game over! The word was: ' + this.word;
      }
    }

    return this.getWordProgress();
  }

  getWordProgress() {
    let progress = '';
    for (const char of this.word) {
      if (this.correctGuesses.has(char)) {
        progress += char;
      } else {
        progress += '_';
      }
    }
    return progress;
  }

  isGameOver() {
    return this.attempts >= this.maxAttempts || this.hasWon();
  }

  hasWon() {
    for (const char of this.word) {
      if (!this.correctGuesses.has(char)) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Hangman;
