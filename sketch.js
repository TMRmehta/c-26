
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;

	//Create the Bodies Here.

	bobObject1 = new bob(900,400,20)
	bobObject2 = new bob(980,400,20)
	bobObject3 = new bob(1060,400,20)
	bobObject4 = new bob(1120,400,20)
	bobObject5 = new bob(1180,400,20)
	//create a roof
	roof = new Roof(900,200,500,20)
	rope1=new Rope(bobObject1.body,roof.body,-80,0)
	rope2=new Rope(bobObject2.body,roof.body,-40,0)
	rope3=new Rope(bobObject1.body,roof.body,0,0)
	rope4=new Rope(bobObject1.body,roof.body,40,0)
	rope5=new Rope(bobObject1.body,roof.body,80,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  drawSprites();
 
}



