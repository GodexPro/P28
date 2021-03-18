
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcher;
var mango1;
var world,boy;
var launcher;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

  stone = new Stone(240,420);
  
  launcher = new Launcher(stone.body,{x:240,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  stone.display();

  groundObject.display();

  launcher.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

