var b,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(30,52)
  thickness=random(22,83)
  b=createSprite(50,200,100,10);
  b.shapeColor="black"
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80)
  b.velocityX=speed;
}

function draw() {
  if(wall.x-b.x<(b.width+wall.width)/2)
{
b.velocityX=0
var deformation=0.5*weight*speed*speed/22509

if (deformation>180){
  b.shapeColor=color(255,0,0)
  wall.shapeColor=color(255,0,0)
}
if (deformation>180 && deformation>100){
  b.shapeColor=color(230,230,0)
  wall.shapeColor=color(230,230,0)
}
if (deformation<180){
  b.shapeColor=color(0,255,0)
  wall.shapeColor=color(0,255,0)
}

}

  background(255,255,255);  
  drawSprites();
}