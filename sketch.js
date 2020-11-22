var fixedRect, movingRect;
var go1,go2,go3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1 = createSprite(200, 200, 80, 60);
  go1.shapeColor = "green";
  go1.debug = true;
  go2 = createSprite(300, 100, 50, 100);
  go2.shapeColor = "green";
  go2.debug = true;
  go3 = createSprite(300, 400, 90, 80);
  go3.shapeColor = "green";
  go3.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
  go2.velocityY = 7;
  go3.velocityY = -7;

}

function draw() {
  background(0,0,0);  


  bounceOff(go2,go3);
  bounceOff(movingRect,fixedRect);

  drawSprites();
}



