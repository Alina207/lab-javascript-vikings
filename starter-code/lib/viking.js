// =========Soldier=====================

 function Soldier(healthParams, strengthParams) {
   this.health = healthParams;
   this.strength = strengthParams;
 }

 Soldier.prototype.attack = function () {
   return this.strength;
 };

 Soldier.prototype.receiveDamage = function (damage) {
   this.health -= damage;
 };

// =========Vikings=====================


function Viking (nameParam, healthParam, strengthParam) {
  Soldier.call(this, healthParam, strengthParam);
  this.name = nameParam;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;

  if (this.health <= 0) {
    return this.name + ' has died in act of combat';
  }

  return this.name + ' has received ' + damage + ' points of damage';
};


Viking.prototype.battleCry = function () {
  return "Odin Owns You All!";
};



// =========SAXONS=====================


function Saxon (healthParam, strengthParam) {
  Soldier.call(this, healthParam, strengthParam);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;

  if (this.health <= 0) {
    return 'A Saxon has died in combat';
  }

  return 'A Saxon has received ' + damage + ' points of damage';
};



function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
