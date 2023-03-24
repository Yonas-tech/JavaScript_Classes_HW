// Ship Class
// the Enemy and Player ships share many properties and methods
// but the Player ship has additional method (retreat)


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
                ship.hull -= this.firePower;    //  firePower decreases the hull

                return 1; //hit
            }
            else {
                // textareaEl.textContent += '\n' + this.name + ': missed the shot.';
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
        gameOver('USS retreated and lost the Victory.\n Try next time .... ')

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
            textareaEl.textContent += "\nWARNING! Enemy ships already created. \n"
            return;
        }

        for (let i = 1; i <= count; i++) {
            let hull = this.randomValGenerator(3, 6);
            let firePower = this.randomValGenerator(2, 4);
            let accuracy = this.randomValGenerator(0.6, 0.8, false);
            let name = "EnemyShip#" + (i)
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


// instanciate a factory and produce the ships
const universalShipFactory = new ShipFactory();
// generate the player ship
universalShipFactory.createPlayerShip();
//generate enemy ships (default count=6);
universalShipFactory.createEnemyShips();

// console.log(universalShipFactory)
let player = universalShipFactory.playerShip;
let enemies = universalShipFactory.enemyShips;



// Get DOM elements
let playerStats = document.querySelector('.playerStats')
let enemyStats = document.querySelector('.enemyStats')

let textareaEl = document.querySelector('textarea');
let startBtnEl = document.querySelector('.startBtn');
let dialogEl = document.querySelector('dialog');
let formEl = document.querySelector('form')
let messagePEl = document.querySelector('.message')

dialogEl.addEventListener('click', handleClick);


// create/update the message and buttons for user interactions
let yesBtnEl;
let noBtnEl;
function askConfirmaiton(message, yesBtnText = 'RETREAT', noBtnText = 'ATTACK') {
    let newForm = document.createElement('form')
    newForm.setAttribute('method', 'dialog')
    let pEl = document.createElement('p')
    pEl.textContent = message;
    newForm.appendChild(pEl)

    if (yesBtnText != null) {
        yesBtnEl = document.createElement('button');
        yesBtnEl.textContent = yesBtnText;
        newForm.appendChild(yesBtnEl)
    }
    if (noBtnText != null) {
    noBtnEl = document.createElement('button');
    noBtnEl.textContent = noBtnText
    newForm.appendChild(noBtnEl)
    }

    dialogEl.innerHTML = "";
    dialogEl.appendChild(newForm)

}


////////////////////////////////////////// methods for battleField()

//||||||||||||  deployEnemyShip()

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

//||||||||||||  updateStats()

function updateStats(hitOrMiss, attacker, target){
        if(hitOrMiss == 1){ //hit
            textareaEl.textContent += '\n' + target.name + ': has been hit!';
            textareaEl.textContent += '\n' + target.name + ': health status: hull=' + target.hull;
            console.log('attacker: ');
            console.log(attacker)
            console.log('target:');
            console.log(target)
            const txtAttacker = " Hull :  " + attacker.hull  +"<br>  FirePower :  " +attacker.firePower  +"<br>    Accuracy :  "+ attacker.accuracy ;
            const txtTarget = " Hull :  " + target.hull  +"<br>  FirePower :  " +target.firePower  +"<br>    Accuracy :  "+ target.accuracy ;

            if(attacker.constructor.name == 'PlayerShip'){
                
                playerStats.innerHTML = txtAttacker;
                enemyStats.innerHTML = target.name + "<br>"+txtTarget;
            }
            else{
                playerStats.innerHTML = txtTarget;
                enemyStats.innerHTML = attacker.name +"<br>"+txtAttacker;
            }

        }
        else if(hitOrMiss == 0) { // miss
            textareaEl.textContent += '\n' + attacker.name + ': missed the shot.';
            txt = ``
        }
}


//||||||||||||   gameOVER()

function gameOver(result) {  // this is simple for now
    textareaEl.textContent += `\n${result}\n`;
    textareaEl.textContent += '\n' + `Enemy status:`;

    // console.log(enemies)   // will do with loop or conditional

    textareaEl.textContent += '\n' + `Player status:`;
    // console.log(player)

    // console.log()

    window.alert('Game Over!')
}

// console.log(deployEnemyShip())

let currentEnemyShip;
let currentEnemyShipIndex; // = null


///////////////////////////////////////// Event Handler ////////////////////////////////////////// 

function handleClick(event) {

    let element = event.target;
    if (element == startBtnEl) {
        battleField();
    }
    else if(element == yesBtnEl){
        player.retreat()
    }
    else if(element == noBtnEl){
        noRetreate()
    }
    
    function battleField() {
        textareaEl.textContent += '\n' + 'Enemy ships count: ' + enemies.length + '\n';
        //condition: to check if there is an already deployed enemy chip
        if (currentEnemyShip == null && enemies.length > 0) {
            currentEnemyShipIndex = deployEnemyShip();
            currentEnemyShip = enemies[currentEnemyShipIndex];
            textareaEl.textContent += `\n${currentEnemyShip.name}  is deployed. \n`
        }
        // console.log('currentEnemyShip: ' + JSON.stringify(currentEnemyShip))

        // PlayerShip attacks:

        let hitOrMiss = player.attack(currentEnemyShip);
        updateStats(hitOrMiss, player, currentEnemyShip);

        if(hitOrMiss == 1){ //hit
            
        }
        else if(hitOrMiss == 0) { // miss

        }

        //if enemy ship survives, it shoots
        if (currentEnemyShip.hull > 0) {
            // console.log('playerShipHealthStatus: ' + JSON.stringify(player.hull))
            currentEnemyShip.attack(player);
            updateStats(hitOrMiss, currentEnemyShip, player);

            // if player survives, it goes back to the battlefield
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
            textareaEl.textContent += '\n' + currentEnemyShip.name + ' is destroyed.\n';

            // player now has the option to retreat
            // if retreated, the battle is disrupted, then call retreat()


            let retreatMsg = `Well done! ${currentEnemyShip.name} has been destroyed. \n`;
            askConfirmaiton(retreatMsg)

            // else continue playing ...

            // function noRetreate() {
            //     if (enemies.length > 0) {
            //         // reset the currentEnemyShip variable
            //         currentEnemyShip = null;
            //         // go back to the bottlefield
            //         battleField()
            //     }
            //     // all Enemy ships have been destroyed 
            //     else {
            //         textareaEl.textContent += '\n' + 'Enemy ships count: ' + enemies.length + '\n';
            //         gameOver('USS Won :)')
            //     }

            // }
            // let retreated = confirm(retreatMsg);
            // if (retreated) {
            //     player.retreat();
            // }
            // else {
            //     // check if the enemy still have ships
            //     if (enemies.length > 0) {
            //         // reset the currentEnemyShip variable
            //         currentEnemyShip = null;
            //         // go back to the bottlefield
            //         battleField()
            //     }
            //     // all Enemy ships have been destroyed 
            //     else {
            //         textareaEl.textContent += '\n' + 'Enemy ships count: ' + enemies.length + '\n';
            //         gameOver('USS Won :)')
            //     }
            // }
        }
    } // battlefield

    function noRetreate() {
        if (enemies.length > 0) {
            // reset the currentEnemyShip variable
            currentEnemyShip = null;
            // go back to the bottlefield
            battleField()
        }
        // all Enemy ships have been destroyed 
        else {
            textareaEl.textContent += '\n' + 'Enemy ships count: ' + enemies.length + '\n';
            gameOver('USS Won :)')
        }
    } //noRetreate
}
// battleField()


