// Initialize Player Bot
var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Initialize Enemy Bot

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // Asks player whether they want to fight
        var promptFight = window.prompt("Would you like to FIGHT of SKIP this battle?");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you would like to skip?");

            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                // Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }

        }
        // Subtract value of playerAttack from enemyHealth and update enemy Health
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console to check the health
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " was destroyed!");
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract enemyAttack from playerHealth and update playerHealth
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        // Check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " was destroyed!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    debugger;
    for (var i = 0; i < enemyNames.length; i++) {
        // Welcome Players and Display the Round Number
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (i < enemyNames.length - 1 && playerHealth > 0) {
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
}

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
}

// create the shop
var shop = function() {
    // ask player what they would like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter REFILL, UPGRADE, or LEAVE to make a choice.");

    // Implement Shop functions
    switch(shopOptionPrompt) {
        case "refill": // new case
        case "REFILL":
            if (playerMoney >= 7) {
            playerHealth+=20;
            window.alert(playerName + "'s health refilled by 20 for 7 dollars!");
            playerMoney-=7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade": // new case
        case "UPGRADE":
            if (playerMoney >= 7) {
            playerAttack+=6;
            window.alert(playerName + "'s attack was increased by 6 for 7 dollars!");
            playerMoney-=7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave": // new case
        case "LEAVE":
            window.alert("Leaving the shop.");
            break;
        default:
            window.alert("Invalid entry please enter REFILL, UPGRADE, or LEAVE.");
            shop();
            break;
    }
}
// start the game when the page loads
startGame();
