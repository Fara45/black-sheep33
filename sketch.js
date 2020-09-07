
var fixrectangle
var movingRectangle


function setup() {
  createCanvas(800,400);
  fixrectangle =createSprite(200,200,50,80);
  movingRectangle =createSprite(400,200,80,30);
  fixrectangle.shapeColor="green";
  movingRectangle.shapeColor="blue";
}

function draw() {
  background(0);  
  movingRectangle.x=mouseX;
  movingRectangle.y=mouseY;
  if(movingRectangle.x - fixrectangle.x < movingRectangle.width/2 + fixrectangle.width/2 && fixrectangle.x - movingRectangle.x < movingRectangle.width/2 + fixrectangle.width/2
    && movingRectangle.y - fixrectangle.y < movingRectangle.height/2 + fixrectangle.height/2 && fixrectangle.y - movingRectangle.y < movingRectangle.height/2 + fixrectangle.height/2){

  
  fixrectangle.shapeColor="red";
  movingRectangle.shapeColor="red";
  } else
  {
    fixrectangle.shapeColor="green";
    movingRectangle.shapeColor="blue";
 }
  drawSprites();
}