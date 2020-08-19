var bullet, wall, thickness;
var speed, weight;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = (80, 80, 80);
  
  bullet = createSprite(50, 200, 20, 5);
  bullet.shapeColor = "white";

  bullet.velocityX = speed;

}

function draw() {
  background(0); 

  
  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
      textSize(20);
      stroke(255, 0, 0);
      fill(255, 0, 0);
      text("Wall is not reliable!", 780, 200);
    }
    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
      textSize(20);
      stroke(0, 255, 0);
      fill(0, 255, 0);
      text("Wall is reliable!", 780, 200);
    }
  }

  drawSprites();
}

function hasCollided(VarBullet, VarWall) {
   bulletRightEdge = VarBullet.x + VarBullet.width;
   wallLeftEdge = VarWall.x;

  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  } else {
     return false;
  }
}