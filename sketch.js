
var fixrectangle
var movingRectangle
var bro

function setup() {
  createCanvas(800,400);
  fixrectangle =createSprite(200,200,50,80);
  movingRectangle =createSprite(400,200,80,30);
  fixrectangle.shapeColor="green";
  movingRectangle.shapeColor="blue";
  bro=createSprite(200, 100, 10, 10);
  bro.shapeColor= "white"
}

function draw() {
  background(0);  
  movingRectangle.x=mouseX;
  movingRectangle.y=mouseY;
 
  if(isTouching(bro,movingRectangle)){

  
  bro.shapeColor="red";
  movingRectangle.shapeColor="red";
  } else
  {
    bro.shapeColor="white";
    movingRectangle.shapeColor="blue";
 }
  drawSprites();
}

