class Centaur {
  constructor(centaur){
  this.name = centaur.name;
  this.breed = centaur.type;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
  this.counter = 0;
  }

  shoot(){
    this.counter++
    if (this.counter > 2) {
      this.cranky = true
    }

    if (this.cranky || this.layingDown) {
      return 'NO!'
    }

    return 'Twang!!!';
  };

  run() {
    this.counter++
    if (this.counter > 2) {
      this.cranky = true
    }

    if (this.cranky || this.layingDown) {
      return 'NO!'
    }

    return 'Clop clop clop clop!!!';
  };

  sleep() {
    if (this.layingDown === true) {
      this.counter = 0;
      this.cranky = false;
      return 'ZZZZ'
    } else {
    return 'NO!'
    }
  }

  layDown() {
    this.standing === true ? this.standing = false : this.standing = true;
    this.layingDown === true ? this.layingDown = false : this.layingDown = true;
    }

  standUp() {
    this.layingDown === true ? this.layingDown = false : this.layingDown = true;
    this.standing === true ? this.standing = false : this.standing = true;
    };

  drinkPotion() {
    if (this.standing === true) {
    this.cranky =!this.cranky
  } else {
    return 'Not while I\'m laying down!'
  }
    }
  }


module.exports = Centaur;
