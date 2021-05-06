// Initialize Player Bot
var playerName = window.prompt ("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Initialize Enemy Bot

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alerts player that they are starting the round
    window.alert("Welcome to Robot Gladiators "+ playerName+"!");
    // Asks player whether they want to fight
    var promptFight = window.prompt("Would you like to FIGHT of SKIP this battle?");
    // Check if player will fight or skip
    if (promptFight === "fight" || promptFight === "FIGHT"){
        // Subtract value of playerAttack from enemyHealth and update enemy Health
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console to check the health
        console.log(playerName+" attacked "+ enemyName +". "+ enemyName +" now has "+ enemyHealth +" health remaining.");
        // Subtract enemyAttack from playerHealth and update playerHealth
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console
        console.log(enemyName+" attacked "+ playerName +". "+ playerName +" now has "+ playerHealth +" health remaining.");
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " was destroyed!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");    
        }
        // Check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " was destroyed!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP"){
        var confirmSkip = window.confirm("Are you sure you would like to skip? You will be charged 2 money for skipping.");
        if (confirmSkip) {
            // Subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            window.alert(playerName + " has skipped the fight")
        }
        else {
            fight ();
        }
        
    }
    else {
        window.alert("You need to choose a valid option. Try again!")
    }
}

for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}

// Pseudocode
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less