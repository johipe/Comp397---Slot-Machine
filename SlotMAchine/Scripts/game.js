﻿// CreateJS Boilerplate for COMP397
// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas;
var stage;
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
                betLine[spin] = "Grapes";
                grapes++;
                break;
            case checkRange(outCome[spin], 38, 46): // 13.8% probability
                betLine[spin] = "Banana";
                bananas++;
                break;
            case checkRange(outCome[spin], 47, 54): // 12.3% probability
                betLine[spin] = "Orange";
                oranges++;
                break;
            case checkRange(outCome[spin], 55, 59): //  7.7% probability
                betLine[spin] = "Cherry";
                cherries++;
                break;
            case checkRange(outCome[spin], 60, 62): //  4.6% probability
                betLine[spin] = "Bar";
                bars++;
                break;
            case checkRange(outCome[spin], 63, 64): //  3.1% probability
                betLine[spin] = "Bell";
                bells++;
                break;
            case checkRange(outCome[spin], 65, 65): //  1.5% probability
                betLine[spin] = "Seven";
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

function buttonOut() {
    //buttonBitmap.alpha = 1;
}

function buttonOver() {
   // buttonBitmap.alpha = 0.5;
}

function btnSpinClicked()
{
    console.log("Spin button clicked");
    spinResult = Reels();
    fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
    console.log(fruits);
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

function createGUI()
{
    background = new createjs.Bitmap("assets/images/background3.fw.png");

    //Creating and Adding the buttons
    btnBetMax = new createjs.Bitmap("assets/images/btnBetMax.fw.png");
    btnBetMax.x = 236;
    btnBetMax.y = 362 + 7;

    btnBetOne = new createjs.Bitmap("assets/images/btnBetOne.fw.png");
    btnBetOne.x = 202;
    btnBetOne.y = 362 + 7;

    btnPwr = new createjs.Bitmap("assets/images/btnPower.fw.png");
    btnPwr.x = 133;
    btnPwr.y = 362 + 7;

    btnReset = new createjs.Bitmap("assets/images/btnReset.fw.png");
    btnReset.x = 167;
    btnReset.y = 362 + 7;

    //Spin Button
    btnSpin = new createjs.Bitmap("assets/images/btnSpin.fw.png");
    btnSpin.x = 270;
    btnSpin.y = 362 + 7;
    //Event Listener (Spin Button)
    btnSpin.addEventListener("click", btnSpinClicked);
    btnSpin.addEventListener("mouseout", btnSpinOut, this);
    btnSpin.addEventListener("mouseover", btnSpinOver, this);


    game.addChild(background);
    game.addChild(btnBetMax);
    game.addChild(btnBetOne);
    game.addChild(btnPwr);
    game.addChild(btnReset);
    game.addChild(btnSpin);
}

function main() {

    game = new createjs.Container();
    createGUI();

    stage.addChild(game);
    //// This is where all the work happens
    //helloText = new createjs.Text("Hello World!", "40px Consolas", "#000000");
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