var box , line,bo;

function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(255,255,255);  
 for (var bo=8; bo= 800; bo=bo+50)
 {
 box= createSprite(bo, 200, 10, 10);
 box.shapColor="green";
  }
  drawSprites();
  //box.display();
}