class Magician { 
  constructor(magician) { 
    this.name = magician.name; 
    this.topHat = magician.topHat === false ? false : true;
    this.confident = false;
    this.counter = 0
  } ;

  incantation(magicWord) {
    return `${magicWord.toUpperCase()}!`
  };

  cast() {
      this.counter++
    if (this.counter > 2) {
      this.confident = true
    };
    if (this.topHat === false) {
      return 'PULL DOVE FROM SLEEVE'
    } else {
      return 'PULL RABBIT FROM TOP HAT'
    };
  };

  performShowStopper() {
    if (this.confident === false) {
      return 'Oh no! Practice more before attempting this trick!'
    } else {
      return 'WOW! The magician totally just sawed that person in half!'
    };
  };
};

module.exports = Magician;
