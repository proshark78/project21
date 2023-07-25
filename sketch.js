
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;
ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
	//Create the Bodies Here.
ball=Bodies.circle(150,150,20,ball_options)
World.add(world,ball)
ground = new Ground (500,400,1000,30)
wall1 = new Ground (700,325,30,100)
wall2 = new Ground (850,325,30,100)
ellipseMode(RADIUS)
}


function draw() {
 
  background(100);
  ground.show()
  wall1.show()
  wall2.show()
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
  Engine.run(engine);
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce (ball,{x:0,y:0},{x:0,y:-1})
	}
}
function keyPressed2(){
	if (keyCode === RIGHT_ARROW){
		Body.applyForce (ball,{x:0,y:0},{x:1,y:0})
	}
}