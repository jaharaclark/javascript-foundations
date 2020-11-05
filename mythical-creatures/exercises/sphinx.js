class Sphinx {
  constructor(name) {
    this.name
    this.riddles = [];
    this.heroesEaten = 0;
    this.incorrect = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length === 3) {
      this.riddles.shift()
    }
      this.riddles.push(riddle)
    }

    attemptAnswer(answer) {
      for (var i = 0; i < this.riddles.length; i++) {
          if (this.riddles[i].answer !== answer) {
            this.incorrect++
          }

          if (this.incorrect % 2 === 0) {
            this.heroesEaten++
          }

          if (this.riddles.length === 1) {
          this.riddles = []
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
          } else if (this.riddles[i].answer === answer) {
            this.riddles.splice(i, 1)
            return 'That wasn\'t that hard, I bet you don\'t get the next one'
          }
        }
      }
  }


module.exports = Sphinx;
