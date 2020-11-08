const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	stone = new Stone(400,400);
	obstacle = new Obstacle(600,200);
	target = new Target(200,600);
	catapult = new Catapult(obstacle.body, {x:700, y:700});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  obstacle.display();
  target.display();
  catapult.display();
  drawSprites();
}



