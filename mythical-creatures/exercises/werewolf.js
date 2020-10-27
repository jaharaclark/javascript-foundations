class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  };

  transform() {
    this.human === true ? this.human = false : this.human = true;
    this.wolf === true ? this.wolf = false : this.wolf = true;
    this.human === true ? this.hungry = false : this.hungry = true;

    if (this.wolf === true) {
      this.hungry = true
    };
  };

  eat(victim) {
    if (this.human === true) {
      return `${victim.name} didn't sound yummy today.`
    } else {
    this.human = true;
    return `${victim.name} was delicious!`
    };
  };
};


module.exports = Werewolf;
