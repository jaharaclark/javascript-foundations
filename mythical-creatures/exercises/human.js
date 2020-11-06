class Human {
  constructor(name, encounterCounter) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  noticesOgre(human) {
    if (this.encounterCounter === 0) {
      return false
    }
    if (this.encounterCounter % 3 === 0) {
      return true
    } else {
      return false
    }


  }
}

module.exports = Human;
