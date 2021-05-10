var fight = function (enemy) {
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
      }
    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            if (fightOrSkip()) {
                break;
            }
            // Generate random damage value based on player's attack power.
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            // Subtract value of damage from enemy.health and update enemy Health
            enemy.health = Math.max(0, enemy.health - damage);
            // Log a resulting message to the console to check the health
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " was destroyed!");
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        } else {
            // Generate damage based on the enemy's attack value
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            // Subtract damage from playerInfo.health and update playerInfo.health
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            // Log a resulting message to the console
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
            // Check players health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " was destroyed!");
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
        isPlayerTurn = !isPlayerTurn;
    }
};
// function to start a new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        // Welcome Players and Display the Round Number
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
                // ask if player wants to use the store before the next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after loop ends, player is either out of health or enemies to fight
    endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.")
    }
    // ask player if they would like to play again
    var playAgainConfirm = window.confirm("would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// create the shop
var shop = function() {
    // ask player what they would like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
    shopOptionPrompt = parseInt(shopOptionPrompt);
    // Implement Shop functions
    switch(shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the shop.");
            break;
        default:
            window.alert("Invalid entry please enter REFILL, UPGRADE, or LEAVE.");
            shop();
            break;
    }
};

// random number function
var randomNumber = function (minX, maxX) {
    // creates a random number between a minx and maxx value
    var value = Math.floor(Math.random()*(maxX-minX+1)+minX);
    return value;
};

var getPlayerName = function () {
    var name = "";
    while (name === "" || name === "null") {
        name = window.prompt ("What is your robot's name?");
    }
    return name;
};

var fightOrSkip = function () {
    // Asks player whether they want to fight
    var promptFight = window.prompt("Would you like to FIGHT of SKIP this battle?");
        promptFight = promptFight.toLowerCase();
    if(promptFight === "" || promptFight === "null") {
        return fightOrSkip();
    }
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you would like to skip?");

        if (confirmSkip) {
            window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
            // Subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            return true;
        }
        return false;
    }
};
// -----------------------------------------------
// Initialize Player Bot as an object
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
     }, 
    refillHealth: function() {
        if (this.money >= 7) {
            this.health += 20;
            this.money -= 7;
            window.alert(this.name + "'s health refilled by 20 for 7 dollars!");
        }else {
            window.alert("You don't have enough money!");
        }
    }, 
    upgradeAttack: function() {
        if (this.money >= 7) {
            this.attack += 6;
            this.money -= 7;
            window.alert(this.name + "'s attack was increased by 6 for 7 dollars!");
        }else {
            window.alert("You don't have enough money!");
        }
    }
};

// Initialize Enemy Bot

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
// start the game when the page loads
startGame();
