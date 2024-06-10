class Hangman {
  constructor(word, maxAttempts) {

    this.word = word;
    this.maxAttempts = maxAttempts;
    this.attempts = 0;
    this.guessedLetters = [];
  }

  getWordProgress() {

  }


  guess(letter) {

    if (this.attempts >= this.maxAttempts) return "Game Over";
    this.guessedLetters.push(letter);
    if (!this.word.includes(letter)) this.attempts++;
    return this.getWordProgress();
  }

  getWordProgress() {
    return this.word
      .split("")
      .map((letter) => (this.guessedLetters.includes(letter) ? letter : "_"))
      .join("");
  }
 

  isGameOver() {

    return (
      this.attempts >= this.maxAttempts || this.word === this.getWordProgress()
    );
  }
}
 
module.exports = Hangman;
