class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };

  stare(victim){
    victim.stoned = true;
    if (this.statues.length === 3) {
      var freedPerson = this.statues.shift()
      freedPerson.stoned = false
    };
      this.statues.push(victim)
  };
};




module.exports = Medusa;
