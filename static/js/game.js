//Anton Danylenko

//SVG
var svg = document.getElementById('mySvg');

//CELL SIZE
var CELL_SIZE = 30;

//BOARD
var board;

//FOR PAUSE
var unlocked = true;
var game_over = false;
var boardRef = document.querySelector(".board");
var pauseRef = document.querySelector(".pauseMenu");

//PLAYER
var cur_player = 0; // blue, green, yellow, red
var winner;

//PLAYER INFORMATION
//var player = [num squares_left, array unplaced_pieces]
var blue = new Array(0);
var green = new Array(0);
var yellow = new Array(0);
var red = new Array(0);

//FULL BOARD
var board_tiles = document.createElementNS('static/img/blokus_board.svg', 'circle');

// //BLUE TILE ICON
// var blue_tile = new Image();
// blue_tile.src = 'static/img/blue_tile.png';
//
// //GREEN TILE ICON
// var green_tile = new Image();
// green_tile.src = 'static/img/green_tile.png';
//
// //YELLOW TILE ICON
// var yellow_tile = new Image();
// yellow_tile.src = 'static/img/yellow_tile.png';
//
// //RED TILE ICON
// var red_tile = new Image();
// red_tile.src = 'static/img/red_tile.png';


//NEW GAME
function newGame(){
  var threshold = 800;
  if (window.innerWidth>1600 && window.innerHeight>1600){
    threshold = window.innerWidth/2;
    if (window.innerWidth>window.innerHeight){
      threshold = window.innerHeight/2;
    }
  }
  if (window.innerWidth>threshold && window.innerHeight>threshold){
    CELL_SIZE = Math.floor((threshold-200)/20);
  }
  else {
    if (window.innerWidth<window.innerHeight && window.innerWidth>200){
      CELL_SIZE = Math.floor((window.innerWidth-200)/20);
    }
    else if (window.innerHeight>200){
      CELL_SIZE = Math.floor((window.innerHeight-200)/20);
    }
    else {
      CELL_SIZE = 0;
    }
  }
  svg.width, svg.height = 20*CELL_SIZE;
  document.getElementById("board").style.width, document.getElementById("board").style.height = 20*CELL_SIZE + 'px';

  board = new Array(0);
  for (var r=0; r<20; r++){
    var temp = [];
    for (var c=0; c<20; c++){
      temp.push('_');
    }
    board.push(temp);
  }

  unlocked = true;
  game_over = false;
  cur_player = 0;
  // closeModal();
  boardRef.style.display = "block";
  document.querySelector(".pauseMenu").style.display = "none";
}
