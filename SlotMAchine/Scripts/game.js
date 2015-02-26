// CreateJS Boilerplate for COMP397
// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas;
var stage;

var tiles = [];
var reelContainers = [];
var jackpotContainer;
var creditsContainer;
var betContainer;
var payoutContainer;
//var reels = new createjs.Bitmap[3];
//var helloText;
//var buttonBitmap;

// Game Variables
var playerMoney = 1000;
var winnings = 0;
var jackpot = 5000;
var turn = 0;
var playerBet = 0;
var winNumber = 0;
var lossNumber = 0;
var spinResult;
var fruits = "";
var winRatio = 0;
var grapes = 0;
var bananas = 0;
var oranges = 0;
var cherries = 0;
var bars = 0;
var bells = 0;
var sevens = 0;
var blanks = 0;

//Game objects
var game; // Main game container object
var background;

var btnBetMax;
var btnBetOne;
var btnPwr;
var btnReset;
var btnSpin;

var jackpotTxt;
var creditsTxt;
var betTxt;
var payoutTxt;

// FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // Parent Object
    stage.enableMouseOver(20); // Turn on Mouse Over events

    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

// GAMELOOP
function gameLoop() {
    stage.update();
}

/* Check to see if the player won the jackpot */
function checkJackPot() {
    /* compare two random values */
    var jackPotTry = Math.floor(Math.random() * 51 + 1);
    var jackPotWin = Math.floor(Math.random() * 51 + 1);
    if (jackPotTry == jackPotWin) {
        alert("You Won the $" + jackpot + " Jackpot!!");
        playerMoney += jackpot;
        jackpot = 1000;
    }
}

/* Utility function to show a win message and increase player money */
function showWinAction() {
    playerMoney += winnings;
    consolo.log("You Won: $" + winnings);
    resetFruitTally();
    checkJackPot();
}

/* Utility function to show Player Stats */
function showPlayerStats() {
    


    winRatio = winNumber / turn;
    console.log("Jackpot: " + jackpot);
    console.log("Player Money: " + playerMoney);
    console.log("Turn: " + turn);
    console.log("Wins: " + winNumber);
    console.log("Losses: " + lossNumber);
    console.log("Win Ratio: " + (winRatio * 100).toFixed(2) + "%");
}

/* Utility function to reset all fruit tallies */
function resetFruitTally() {
    grapes = 0;
    bananas = 0;
    oranges = 0;
    cherries = 0;
    bars = 0;
    bells = 0;
    sevens = 0;
    blanks = 0;
}

/* Utility function to reset the player stats */
function resetAll() {
   playerMoney = 1000;
    winnings = 0;
    jackpot = 5000;
    turn = 0;
    playerBet = 0;
    winNumber = 0;
    lossNumber = 0;
    winRatio = 0;
}

/* Utility function to check if a value falls within a range of bounds */
function checkRange(value, lowerBounds, upperBounds) {
    if (value >= lowerBounds && value <= upperBounds) {
        return value;
    }
    else {
        return !value;
    }
}

/* When this function is called it determines the betLine results.
e.g. Bar - Orange - Banana */
function Reels() {
    var betLine = [" ", " ", " "];
    var outCome = [0, 0, 0];

    for (var spin = 0; spin < 3; spin++) {
        outCome[spin] = Math.floor((Math.random() * 65) + 1);
        switch (outCome[spin]) {
            case checkRange(outCome[spin], 1, 27):  // 41.5% probability
                betLine[spin] = "blank";
                blanks++;
                break;
            case checkRange(outCome[spin], 28, 37): // 15.4% probability
                betLine[spin] = "grapes";
                grapes++;
                break;
            case checkRange(outCome[spin], 38, 46): // 13.8% probability
                betLine[spin] = "banana";
                bananas++;
                break;
            case checkRange(outCome[spin], 47, 54): // 12.3% probability
                betLine[spin] = "orange";
                oranges++;
                break;
            case checkRange(outCome[spin], 55, 59): //  7.7% probability
                betLine[spin] = "cherry";
                cherries++;
                break;
            case checkRange(outCome[spin], 60, 62): //  4.6% probability
                betLine[spin] = "bar";
                bars++;
                break;
            case checkRange(outCome[spin], 63, 64): //  3.1% probability
                betLine[spin] = "bell";
                bells++;
                break;
            case checkRange(outCome[spin], 65, 65): //  1.5% probability
                betLine[spin] = "seven";
                sevens++;
                break;
        }
    }
    return betLine;
}

/* This function calculates the player's winnings, if any */
function determineWinnings() {
    if (blanks == 0) {
        if (grapes == 3) {
            winnings = playerBet * 10;
        }
        else if (bananas == 3) {
            winnings = playerBet * 20;
        }
        else if (oranges == 3) {
            winnings = playerBet * 30;
        }
        else if (cherries == 3) {
            winnings = playerBet * 40;
        }
        else if (bars == 3) {
            winnings = playerBet * 50;
        }
        else if (bells == 3) {
            winnings = playerBet * 75;
        }
        else if (sevens == 3) {
            winnings = playerBet * 100;
        }
        else if (grapes == 2) {
            winnings = playerBet * 2;
        }
        else if (bananas == 2) {
            winnings = playerBet * 2;
        }
        else if (oranges == 2) {
            winnings = playerBet * 3;
        }
        else if (cherries == 2) {
            winnings = playerBet * 4;
        }
        else if (bars == 2) {
            winnings = playerBet * 5;
        }
        else if (bells == 2) {
            winnings = playerBet * 10;
        }
        else if (sevens == 2) {
            winnings = playerBet * 20;
        }
        else if (sevens == 1) {
            winnings = playerBet * 5;
        }
        else {
            winnings = playerBet * 1;
        }
        winNumber++;
        showWinAction();
        //showWinMessage();
    }
    else {
        lossNumber++;
        //showLossMessage();
    }

}

function buttonClicked() {
    //helloText.text = "Goodbye!";
}

function buttonOut(event) {
    event.currentTarget.alpha = 1;
    //buttonBitmap.alpha = 1;
}

function buttonOver(event) {
    event.currentTarget.alpha = 0.5;
   // buttonBitmap.alpha = 0.5;
}

function buttonResetClicked()
{
    resetFruitTally();
    resetAll();

    //init();
}

function buttonPoweClicked()
{
    this.window.close();
}

function btnSpinClicked()
{
    for (var index = 0; index < 3; index++)
    {
        reelContainers[index].removeAllChildren();
    }

    console.log("Spin button clicked");
    spinResult = Reels();
    fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
    console.log(fruits);

    


    //btnReset1 = new createjs.Bitmap("assets/images/grapes.png");
    //btnReset1.x = 167;
    //btnReset1.y = 362 + 7;

    //game.addChild(btnReset1);

    for (var index = 0; index < 3; index++)
    {
        tiles[index] = new createjs.Bitmap("assets/images/" + spinResult[index] + ".png");
        reelContainers[index].addChild(tiles[index]);
        
    }
}

function btnSpinOut(bitmap)
{
    //btnSpin.alpha = 1;
    bitmap.alpha = 1;
}

function btnSpinOver(bitmap)
{
    //btnSpin.alpha = 0.75;
    bitmap.alpha = 0.75;
}

function btnBetMaxClicked()
{

    playerBet += 100;
    playerMoney - +100;


   // jackpotContainer.removeAllChildren();
   // jackpot = jackpot + 10;
   // //jackpotTxt.Text = "alo";
   // //onsole.log("btn Bet Max Clicked");
   //// console.log("jackpot: " + jackpot);
   // jackpotTxt = new createjs.Text(jackpot, "bold 20px Courier", "#FFFFFF");
   // jackpotContainer.addChild(jackpotTxt);
}

function btnBetOneClicked()
{
    playerBet += 1;
    playerMoney -=100;
}

function createGUI()
{
    background = new createjs.Bitmap("assets/images/background3.fw.png");

    //Creating and Adding the buttons
    btnBetMax = new createjs.Bitmap("assets/images/btnBetMax.fw.png");
    btnBetMax.x = 236;
    btnBetMax.y = 362 + 7;
    btnBetMax.addEventListener("click", btnBetMaxClicked);
    btnBetMax.addEventListener("mouseout", buttonOut);
    btnBetMax.addEventListener("mouseover", buttonOver);

    btnBetOne = new createjs.Bitmap("assets/images/btnBetOne.fw.png");
    btnBetOne.x = 202;
    btnBetOne.y = 362 + 7;
    btnBetOne.addEventListener("click", btnBetOneClicked);
    btnBetOne.addEventListener("mouseout", buttonOut);
    btnBetOne.addEventListener("mouseover", buttonOver);

    btnPwr = new createjs.Bitmap("assets/images/btnPower.fw.png");
    btnPwr.x = 133;
    btnPwr.y = 362 + 7;
    btnPwr.addEventListener("click", buttonPoweClicked);
    btnPwr.addEventListener("mouseout", buttonOut);
    btnPwr.addEventListener("mouseover", buttonOver);

    btnReset = new createjs.Bitmap("assets/images/btnReset.fw.png");
    btnReset.x = 167;
    btnReset.y = 362 + 7;
    btnReset.addEventListener("click", buttonResetClicked);
    btnReset.addEventListener("mouseout", buttonOut);
    btnReset.addEventListener("mouseover", buttonOver);

    //Spin Button
    btnSpin = new createjs.Bitmap("assets/images/btnSpin.fw.png");
    btnSpin.x = 270;
    btnSpin.y = 362 + 7;
    //Event Listener (Spin Button)
    btnSpin.addEventListener("click", btnSpinClicked);
    btnSpin.addEventListener("mouseout", buttonOut);
    btnSpin.addEventListener("mouseover", buttonOver);

    //Jackpot Label
    jackpotContainer = new createjs.Container();
    jackpotTxt = new createjs.Text(jackpot, "bold 20px Courier", "#FFFFFF");
    jackpotContainer.x = 167 + 7;
    jackpotContainer.y = 172 - 14;

    jackpotContainer.addChild(jackpotTxt);

    //Credits Label
    creditsContainer = new createjs.Container();
    creditsTxt = new createjs.Text(playerMoney, "bold 20px Courier", "#FFFFFF");
    creditsContainer.x = 103 + 7;
    creditsContainer.y = 313 - 11;
    creditsContainer.addChild(creditsTxt);
 
    //Bets Label
    betContainer = new createjs.Container();
    betTxt = new createjs.Text(playerBet, "bold 20px Courier", "#FFFFFF");
    betContainer.x = 200;
    betContainer.y = 313 - 11;
    betContainer.addChild(betTxt);

    //Payout Label
    payoutContainer = new createjs.Container();
    payoutTxt = new createjs.Text(winnings, "bold 20px Courier", "#FFFFFF");
    payoutContainer.x = 251;
    payoutContainer.y = 313 - 11;
    payoutContainer.addChild(payoutTxt);
    


    game.addChild(background);
    game.addChild(btnBetMax);
    game.addChild(btnBetOne);
    game.addChild(btnPwr);
    game.addChild(btnReset);
    game.addChild(btnSpin);
    game.addChild(jackpotContainer);
    game.addChild(creditsContainer);
    game.addChild(betContainer);
    game.addChild(payoutContainer);

    for (var index = 0; index < 3; index++)
    {
    reelContainers[index] = new createjs.Container();
    game.addChild(reelContainers[index]);
    }

    //reelContainers[0] = new createjs.Container();
    reelContainers[0].x = 105 - 8;
    reelContainers[0].y = 217 - 10;


    //reelContainers[1] = new createjs.Container();
    reelContainers[1].x = 176 - 8;
    reelContainers[1].y = 217 - 10;


    //reelContainers[2] = new createjs.Container();
    reelContainers[2].x = 246 - 8;
    reelContainers[2].y = 217 - 10;
    
}

function main() {

    game = new createjs.Container();
    reelContainers = new createjs.Container();
    createGUI();

    stage.addChild(game);
    //// This is where all the work happens
    //helloText = new createjs.Text("Hello World!", "40px Consolas", "#FFFFFF");
    //stage.addChild(helloText); // First Child Object that we add to the stage

    //// Green Button
    //buttonBitmap = new createjs.Bitmap("assets/images/button-small.png");
    //buttonBitmap.x = 100;
    //buttonBitmap.y = 100;
    //buttonBitmap.addEventListener("click", buttonClicked);
    //buttonBitmap.addEventListener("mouseout", buttonOut);
    //buttonBitmap.addEventListener("mouseover", buttonOver);

    //stage.addChild(buttonBitmap);
}
//# sourceMappingURL=game.js.map
