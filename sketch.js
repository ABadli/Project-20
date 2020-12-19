var car, wall;
var speed, weight;

function setup() {
  createCanvas(1000,400);

  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(900,200,60,height/2);
  wall.shapeColor=color('blue');
  car.velocityX = speed;


}

function draw() {
  background("black");  

  if(isTouching(car,wall)){
    console.log("Touching ......");
    car.velocityX = 0;
    car.x = wall.x-wall.width;
    var deformation = (0.5*weight*speed*speed)/22500;
    console.log("Touching ......"+ deformation);
    if(deformation < 100){
      console.log("Touching ...... less than"+ deformation);
      car.shapeColor =color('green');
    }
    else if(deformation >100 && deformation <180){
      car.shapeColor ="yellow";
    }
    else if(deformation >180){
      car.shapeColor ="red";
    }
    
  }
 
  drawSprites();
}