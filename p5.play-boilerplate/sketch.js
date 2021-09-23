var runner;
var jungle , jungleImg;

function preload(){
  jungleImg = loadImage("images/jungle 1.png");
}
function setup() {
  createCanvas(600,600);

  //creating runner
  runner =  createSprite(20, 580, 20, 20);

  //creating jungle
  jungle = createSprite(0,0,600,600);
  jungle.addImage(jungleImg);
}

function draw() {
  background(0);  
  drawSprites();
}