class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses:["Iris"]};
    this.disposition = "Good natured";
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10
  }

  makeDresses(prettyDresses) {
    for (var i = 0; i < prettyDresses.length; i++) {
    this.clothes.dresses.push(prettyDresses[i])
    }
  }

  provoke() {
    this.disposition = "Vengeful"
  }

  replaceInfant(babyFairy) {
  if (this.humanWards.length === 2 && this.disposition === "Vengeful") {
    babyFairy.disposition = "Malicious";
    this.humanWards.push(babyFairy);
    this.disposition = "Good natured"
  }

  if (this.disposition === "Vengeful") {
    babyFairy.disposition = "Malicious";
    this.humanWards.push(babyFairy);
} else {
    return babyFairy
    }
  }
};

module.exports = Fairy;
