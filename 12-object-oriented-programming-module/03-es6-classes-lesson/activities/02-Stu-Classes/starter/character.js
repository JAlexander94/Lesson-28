class Character {
  constructor(name,strength,hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitpoints > 0) {
      console.log(`${this.name} is still alive!`);
      console.log('\n-------------\n');
      return true;
    }
    console.log(`${this.name} has died!`);
    return false;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`${opponent.name} was attacked and ${this.strength} damage was done`);
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitpoints -= this.strength;
  }
}

// Create two unique characters using the "character" class
const warrior = new Character('Crusher', 10, 75);
const rogue = new Character('Dodger', 20, 50);
// Create an interval that alternates attacks every 2000 milliseconds
let warriorTurn = true;

warrior.printStats();
rogue.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  warriorTurn = !warriorTurn;

  if (!warrior.isAlive() || !rogue.isAlive()) {
    clearInterval(turnInterval);
    console.log("Game over!");
  } else if (warriorTurn) {
    warrior.attack(rogue);
    rogue.printStats();
  } else {
    rogue.attack(warrior);
    warrior.printStats();
  }
}, 2000);