
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var background
var boy
var mango1
var mango2
var mango3
var mango4
var mango5
function preload()
{
	backgroundImg=loadImage("sprites/tree.jpg")
	boyImg=loadImage("sprites/boy.png")
	mango1img=loadImage("sprites/mango.jpj")
}

function setup() {
	createCanvas(800, 700);

boy=createSprite(200,640,20,20)
boy.addImage(boyImg)
boy.scale=0.5

mango1=createSprite(200,200,200,20)
mango1.addImage(mango1img)

	engine = Engine.create();
	world = engine.world;
paper= new Paper(20,20,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
 paper.display()
  drawSprites();
 
}



