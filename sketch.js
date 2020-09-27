var speed, weight;

function setup() {
  createCanvas(800, 400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height / 2);
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  if (hasCollided) bullet, wall;
  {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed) / (thickness * thickness * thickness);
    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }
    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }
}
function hasCollided(bullet, wall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallleftEdge = lwall.x;
  if (bulletRightEdge >= wallleftEdge) {
    return true;
  }
  if (hasCollided(bullet, wall)) {
    hasCollided(bullet1, wall1);
  }
  return false;
}
