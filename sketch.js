var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("https://rio060708.github.io/Rio-car-multi/images/track.jpg");
  car1_img = loadImage("https://rio060708.github.io/Rio-car-multi/images/car1.png");
  car2_img = loadImage("https://rio060708.github.io/Rio-car-multi/images/car2.png");
  car3_img = loadImage("https://rio060708.github.io/Rio-car-multi/images/car3.png");
  car4_img = loadImage("https://rio060708.github.io/Rio-car-multi/images/car4.png");
  ground = loadImage("https://rio060708.github.io/Rio-car-multi/images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
