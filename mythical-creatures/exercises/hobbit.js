class Hobbit {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = this.name === 'Frodo' ? true : false
    // look at our shiny turnary. It literally asks a question, you tell it the answer you want for the question, and then gives the other answer behind the semicolon.

    //  if (this.name === 'Frodo') {
    //   true
    // } else {
    //   false
    // };
  };

  celebrateBirthday() {
    this.age++;
    if (this.age > 32) {
      this.adult = true
    }

    if (this.age > 100) {
      this.old = true
    }
    };
  };

module.exports = Hobbit;
