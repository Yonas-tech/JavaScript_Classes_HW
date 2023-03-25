//  #####################  Ship Class  #####################  

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

        // window.alert('USS retreated! This ends the game.')
        gameOver('USS retreated and lost the Victory.\n Try next time .... ')

    }
}


// #####################   Ship Factory    #########################

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
            let hull = randomValGenerator(3, 6);
            let firePower = randomValGenerator(2, 4);
            let accuracy = randomValGenerator(0.6, 0.8, false);
            let name = "EnemyShip#" + (i)
            this.enemyShips.push(new EnemyShip(hull, firePower, accuracy, name))
        }
    }
}

// #####################   #####################   #####################   #####################   #####################  


// gernerate random numbers between two values; used for enemy ship production 
// set round=false, to prevent rounding to nearest integer 
function randomValGenerator(min, max, round = true) {
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

// ##################### #####################   Instanciate a universal-ship factory, produce the ships, and deploy the first enemy ship

// Global Variables 
let player;
let enemies
let currentEnemyShip;
let currentEnemyShipIndex;

function populatePlayers() {
    const universalShipFactory = new ShipFactory();
    // generate the player ship
    universalShipFactory.createPlayerShip();
    //generate enemy ships (default count=6);
    universalShipFactory.createEnemyShips(randomValGenerator(6, 15));
    // console.log(universalShipFactory)
    player = universalShipFactory.playerShip;
    enemies = universalShipFactory.enemyShips;

    textareaEl.textContent = "\nTotal Number Of Enemy Ships To Attack: " + enemies.length + "\n";

    // deploy the 1st enemy ship
    currentEnemyShipIndex = deployEnemyShip();
    currentEnemyShip = enemies[currentEnemyShipIndex];

    textareaEl.textContent += `\n${currentEnemyShip.name}  is deployed.`
    textareaEl.textContent += `\n       Hull: ${currentEnemyShip.hull}`
    textareaEl.textContent += `\n       FirPower: ${currentEnemyShip.firePower}`
    textareaEl.textContent += `\n       Accuracy: ${currentEnemyShip.accuracy}`

    updateStats(null, player, currentEnemyShip)

}


// ##################### Get some DOM elements

let playerStats = document.querySelector('.playerStats')
let enemyStats = document.querySelector('.enemyStats')
// let textareaEl = document.querySelector('textarea');
let textareaEl = document.querySelector('#log');


let startBtnEl = document.querySelector('.startBtn');
let dialogEl = document.querySelector('dialog');
let formEl = document.querySelector('form')
let messagePEl = document.querySelector('.message')

dialogEl.addEventListener('click', handleClick);



// #####################  methods for battleField()  #####################  

// create/update the message and buttons for user interactions
let yesBtnEl;
let noBtnEl;
function askConfirmaiton(message, yesBtnText = 'RETREAT', noBtnText = 'ATTACK') {
    let newForm = document.createElement('form')
    newForm.setAttribute('method', 'dialog')
    let pEl = document.createElement('p')
    pEl.textContent = message;
    newForm.appendChild(pEl)

    if (noBtnText != null) {
        noBtnEl = document.createElement('button');
        noBtnEl.textContent = noBtnText
        newForm.appendChild(noBtnEl)
    }

    if (yesBtnText != null) {
        yesBtnEl = document.createElement('button');
        yesBtnEl.textContent = yesBtnText;
        newForm.appendChild(yesBtnEl)
    }
    dialogEl.innerHTML = "";
    dialogEl.appendChild(newForm)

}

// #####################    deployEnemyShip()

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

// #####################   updateStats()

function updateStats(hitOrMiss, attacker, target) {

    if(hitOrMiss == null){ //1st round stats update
        const txtAttacker = " Hull :  " + attacker.hull + "<br>  FirePower :  " + attacker.firePower + "<br>    Accuracy :  " + attacker.accuracy;
        const txtTarget = " Hull :  " + target.hull + "<br>  FirePower :  " + target.firePower + "<br>    Accuracy :  " + target.accuracy;
        playerStats.innerHTML = txtAttacker;
        enemyStats.innerHTML = attacker.name + "<br>" + txtTarget;

    }
    if (hitOrMiss == 1) { //hit
        textareaEl.textContent += '\n' + target.name + ': has been hit!';
        textareaEl.textContent += '\n' + target.name + ': health status: hull=' + target.hull;
        console.log('attacker: ');
        console.log(attacker)
        console.log('target:');
        console.log(target)
        const txtAttacker = " Hull :  " + attacker.hull + "<br>  FirePower :  " + attacker.firePower + "<br>    Accuracy :  " + attacker.accuracy;
        const txtTarget = " Hull :  " + target.hull + "<br>  FirePower :  " + target.firePower + "<br>    Accuracy :  " + target.accuracy;

        if (attacker.constructor.name == 'PlayerShip') { 
            playerStats.innerHTML = txtAttacker;
            enemyStats.innerHTML = target.name + "<br>" + txtTarget;
        }
        else {
            playerStats.innerHTML = txtTarget;
            enemyStats.innerHTML = attacker.name + "<br>" + txtAttacker;
        }

    }
    else if (hitOrMiss == 0) { // miss
        textareaEl.textContent += '\n' + attacker.name + ': missed the shot.';
        
    }
}

// #####################   gameOVER()

function gameOver(result) {  // this is simple for now
    textareaEl.textContent += '\n\n###########   GAME OVER  ###########\n'
    textareaEl.textContent += `\n${result}\n`;
    textareaEl.textContent += '\n' + `Number of enemy ships left: ${enemies.length}`;
    textareaEl.textContent += '\n' + `Player status:`;
    textareaEl.textContent += JSON.stringify(player)
    textareaEl.scrollTop = textareaEl.scrollHeight;

    let retreatMsg = `GAME OVER! \n ${result}\n`;
    askConfirmaiton(retreatMsg, null, 'Restart')

}


// #####################  START and RESTART
function startBattle() {
    // textareaEl.textContent += "\nTotal Number Of Enemy Ships To Attack: " + enemies.length + "\n";

    let message = "Here they come ...";
    askConfirmaiton(message, null, noBtnText = 'ATTACK')
}
///////////////////////////////////////// Event Handler ////////////////////////////////////////// 

function handleClick(event) {

    let element = event.target;
    if (element == startBtnEl) {  // START Button
        populatePlayers()
        startBattle()

    }
    else if (element == yesBtnEl) { //Retreat Button
        let text = 'Are you sure you want USS ship to retreat? This ends the battle.';
        if (confirm(text) == true) {
            player.retreat()
        } else {
            //text = "You canceled!";

            noRetreate()
        }

    }
    else if (element == noBtnEl) { // Attack Button  // same as contnue playing
        // Restart
        if (element.textContent == 'Restart') {
            // textareaEl.textContent = '';
            // populatePlayers()
            // startBattle()
            history.go(0);
        }

        noRetreate()
    }

    function battleField() {
        // //condition: to check if there is an already deployed enemy chip

        // PlayerShip attacks:
        let hitOrMiss = player.attack(currentEnemyShip);
        updateStats(hitOrMiss, player, currentEnemyShip);

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
            textareaEl.textContent += '         -------------        '
            textareaEl.textContent += '\n' + 'Number of enemy ships left: ' + enemies.length + '\n';
            textareaEl.scrollTop = textareaEl.scrollHeight;

            let destroyedShip = currentEnemyShip;
            currentEnemyShip = null;

            if (enemies.length == 0) {
                gameOver('USS Won :)')
            }
            else { 

                // deploy the next ship
                currentEnemyShipIndex = deployEnemyShip();
                currentEnemyShip = enemies[currentEnemyShipIndex];
                textareaEl.textContent += `\n${currentEnemyShip.name}  is deployed. \n`
                textareaEl.textContent += `\n       Hull: ${currentEnemyShip.hull}`
                textareaEl.textContent += `\n       FirPower: ${currentEnemyShip.firePower}`
                textareaEl.textContent += `\n       Accuracy: ${currentEnemyShip.accuracy}`

                textareaEl.scrollTop = textareaEl.scrollHeight;

                // player now has the option to retreat
                let retreatMsg = `Well done! ${destroyedShip.name} has been destroyed. \n`;
                askConfirmaiton(retreatMsg)
            }


        }
    } // battlefield

    function noRetreate() {
        if (currentEnemyShip == null) {
            currentEnemyShipIndex = deployEnemyShip();
            currentEnemyShip = enemies[currentEnemyShipIndex];
            textareaEl.textContent += `\n${currentEnemyShip.name}  is deployed. \n`
        }
        battleField()
    } //noRetreate
}
// battleField()


