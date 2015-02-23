// CreateJS Boilerplate for COMP397
// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas;
var stage;
//var helloText;
//var buttonBitmap;


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

function buttonClicked() {
    //helloText.text = "Goodbye!";
}

function buttonOut() {
    //buttonBitmap.alpha = 1;
}

function buttonOver() {
   // buttonBitmap.alpha = 0.5;
}

function main() {

    game = new createjs.Container();
    background = new createjs.Bitmap("assets/images/background3.fw.png");

    //Creating and Adding the buttons
    btnBetMax = new createjs.Bitmap("assets/images/btnBetMax.fw.png");
    btnBetMax.x = 236;
    btnBetMax.y = 362;

    btnBetOne = new createjs.Bitmap("assets/images/btnBetOne.fw.png");
    btnBetOne.x = 202;
    btnBetOne.y = 362;

    btnPwr = new createjs.Bitmap("assets/images/btnPower.fw.png");
    btnPwr.x = 133;
    btnPwr.y = 362;

    btnReset = new createjs.Bitmap("assets/images/btnReset.fw.png");
    btnReset.x = 167;
    btnReset.y = 362;

    btnSpin = new createjs.Bitmap("assets/images/btnSpin.fw.png");
    btnSpin.x = 270;
    btnSpin.y = 362;


    game.addChild(background);
    game.addChild(btnBetMax);
    game.addChild(btnBetOne);
    game.addChild(btnPwr);
    game.addChild(btnReset);
    game.addChild(btnSpin);

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
