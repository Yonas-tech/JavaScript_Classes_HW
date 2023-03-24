// Ship Class
// the Enemy and Player ships share many properties and methods
// but the Player ship has additional method (retreat)

let outputText = ""
let textareaEl = document.querySelector('textarea')


class Ship {
    constructor(hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }

    attack(ship) { // 'ship' is the ship being attacked and 'this.ship' is the one attacking
        if (this.hull > 0) {
            //
            if (Math.random() < this.accuracy) {
                ship.hull -= this.firePower;    //  ?? firePower decreases the hull

                textareaEl.textContent+= '\n'+ ship.name + ': has been hit!';
                textareaEl.textContent+= '\n'+ ship.name + ': health status: hull=' + ship.hull;

                return 1; //hit
            }
            else {
                textareaEl.textContent+= '\n'+ this.name + ': missed the shot.';
                return 0; //miss
            }
        }
        else {
            // do I need else
        }
    }
}


class EnemyShip extends Ship {
    constructor(hull, firePower, accuracy, name) {
        super(hull, firePower, accuracy);
        this.name = name;
    }
}

class PlayerShip extends Ship {
    constructor(hull, firePower, accuracy) {
        super(hull, firePower, accuracy);
        this.name = "USS Ship"
    }
    retreat() {
        // game over
        // ? how do you do it?
        gameOver('USS retreated and \nUSS lost a Victory.\n Try next time .... ')

    }
}


// Ship Factory

class ShipFactory {
    constructor() {
        this.playerShip;
        this.enemyShips = []
    }

    // create player ships
    createPlayerShip() {
        // check if the player ship is already created
        if (this.playerShip) {
            textareaEl.textContent += '\nWARNING! Player Ship Already exists.\n';
            return;
        }

        this.playerShip = new PlayerShip(20, 5, 0.7);
    }

    // create enemy ships (default count = 6 )
    createEnemyShips(count = 6) {
        // check if the enemy ships are not already created
        if (this.enemyShips.length > 0) {
            textareaEl.textContent+= "\nWARNING! Enemy ships already created. \n"
            return;
        }

        for (let i = 1; i <= count; i++) {
            let hull = this.randomValGenerator(3, 6);
            let firePower = this.randomValGenerator(2, 4);
            let accuracy = this.randomValGenerator(0.6, 0.8, false);
            let name = "EnemyShip " + (i)
            this.enemyShips.push(new EnemyShip(hull, firePower, accuracy, name))
        }
    }

    // gernerate random numbers between two values; used for enemy ship production 
    // set round=false, to prevent rounding to nearest integer 
    randomValGenerator(min, max, round = true) {
        let val = Math.random() * (max - min) + min;
        if (round) {
            if ((val % 1) >= 0.5) {
                val = Math.ceil(val);
            }
            else {
                val = Math.floor(val);
            }
        }
        return Math.round(val * 10) / 10;
    }
}


// TEST:
// create a factory and produce the ships

const universalShipFactory = new ShipFactory();
// generate the player ship
universalShipFactory.createPlayerShip();
//generate enemy ships (default count=6);
universalShipFactory.createEnemyShips();

// console.log(universalShipFactory)
let player = universalShipFactory.playerShip;
let enemies = universalShipFactory.enemyShips;
// console.log(player)
// console.log(enemies)


// // testing if factory re-creates already created ships
// universalShipFactory.createPlayerShip();
// universalShipFactory.createEnemyShips();

// console.log(universalShipFactory)

//////////////////////////////////////////

function deployEnemyShip() {
    let enemyShipsCount = enemies.length;
    console.log(enemyShipsCount)
    if (enemyShipsCount > 1) {
        return Math.floor(Math.random() * enemyShipsCount);
    }
    else if (enemyShipsCount == 1) {
        return 0;
    }
}

function gameOver(result) {  // this is simple for now
    textareaEl.textContent+= `\n${result}\n`;
    textareaEl.textContent+= '\n'+`Enemy status:`;

    console.log(enemies)   // will do with loop or conditional

    textareaEl.textContent+= '\n'+`Player status:`;
    console.log(player)

    console.log()

    window.alert('Game Over!')
}



// console.log(deployEnemyShip())

let currentEnemyShip;
let currentEnemyShipIndex; // = null

function battleField() {
    textareaEl.textContent+= '\n'+'Enemy ships count: ' + enemies.length +'\n';
    //condition: to check if there is an already deployed enemy chip
    if (currentEnemyShip == null && enemies.length > 0) {
        currentEnemyShipIndex = deployEnemyShip();
        currentEnemyShip = enemies[currentEnemyShipIndex];
    }
    // console.log('currentEnemyShip: ' + JSON.stringify(currentEnemyShip))

    // PlayerShip attacks:
    let playerShoot = player.attack(currentEnemyShip)
    // console.log('currentEnemyShip: ' + JSON.stringify(currentEnemyShip))
    // console.log('playerShoot: '+ playerShoot)

    //if enemy ship survives, it shoots
    if (currentEnemyShip.hull > 0) {
        // console.log('playerShipHealthStatus: ' + JSON.stringify(player.hull))
        currentEnemyShip.attack(player)
        // console.log('playerShipHealthStatus: ' + JSON.stringify(player.hull))

        // if player survives, it goes back to the battle filed
        if (player.hull > 0) {
            battleField();
        }
        // otherwise, player looses
        else {
            gameOver("Enemy Won :(")
        }
    }
    // if the enemy ship does not survive the damage
    else {
        // remove that ship from enemy ships 
        enemies.splice(currentEnemyShipIndex, 1)
        textareaEl.textContent+= '\n'+currentEnemyShip.name + ' is destroyed.\n';

        // player now has the option to retreat
        // if retreated, the battle is disrupted, then call retreat()
        let retreatMsg = `Well done! ${currentEnemyShip.name} has been destroyed. \n
                          Do you want to retreet?`
        let retreated = confirm(retreatMsg);
        if (retreated){
            player.retreat();
        }
        // else continue playing ...
        else {
            // check if the enemy still have ships
            if (enemies.length > 0) {
                // reset the currentEnemyShip variable
                currentEnemyShip = null;
                // go back to the bottlefield
                battleField()
            }
            // all Enemy ships have been destroyed 
            else {
                textareaEl.textContent+= '\n'+'Enemy ships count: ' + enemies.length +'\n';
                gameOver('USS Won :)')
            }
        }
    }
} // battlefield

// battleField()


