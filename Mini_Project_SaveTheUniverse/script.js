
// Ship Class
// the Enemy and Player ships share many properties and methods
// but the Player ship has additional method (retreat)
class Ship { 
    constructor(hull, firePower, accuracy){
            this.hull = hull;
            this.firePower = firePower;
            this.accuracy = accuracy;
    }

    attack(){
        if(this.hull >0){
            // ?? how do you attack
        }
        else{
            // do I need else
        }
    }
}


class EnemyShip extends Ship{

}

class PlayerShip extends Ship{
    retreat(){
        // ends the game
        // ? how do you do it?
    }
}


// Ship Factory

class ShipFactory {
    constructor(){
        this.playerShip;
        this.enemyShips = []
    }

    // create player ships
    createPlayerShip(){
        // check if the player ship is already created
        if (this.playerShip){
            console.log('\nWARNING! Player Ship Already exists.\n');
            return;
        }

        this.playerShip = new PlayerShip(20, 5, 0.7);
    }

    // create enemy ships (default count = 6 )
    createEnemyShips(count=6){
        // check if the enemy ships are not already created
        if(this.enemyShips.length > 0){
            console.log("\nWARNING! Enemy ships already created. \n")
            return;
        }

        for (let i=1; i<=count; i++){
            let hull = this.randomValGenerator(3, 6);
            let firePower = this.randomValGenerator(2, 4) ;
            let accuracy = this.randomValGenerator(0.6, 0.8, false) ;
            this.enemyShips.push(new EnemyShip(hull, firePower, accuracy))
        }
    }

    // gernerate random numbers between two values; used for enemy ship production 
    // set round=false, to prevent rounding to nearest integer 
    randomValGenerator(min, max, round=true){
        let val = Math.random() * (max-min) + min;
        if(round){
            if((val%1) >= 0.5){
                val = Math.ceil(val);
            }
            else{
                val = Math.floor(val);
            }
        }
        return Math.round(val*10)/10;
    }
}


// TEST:
// create a factory and produce the ships

const universalShipFactory = new ShipFactory();
// generate the player ship
universalShipFactory.createPlayerShip();
//generate enemy ships (default count=6);
universalShipFactory.createEnemyShips();

console.log(universalShipFactory)

// testing if factory re-creates already created ships
universalShipFactory.createPlayerShip();
universalShipFactory.createEnemyShips();

console.log(universalShipFactory)


