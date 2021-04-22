const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Body=Matter.Body;

var backgroundImage;
var ballImage;
var ringImage;
var engine,world;
var ring; 
var ball;
var ground;



function preload(){
  backgroundImage=loadImage("BACKGROUND.jpg");
  ballImage=loadImage("BLUEBALL2.png");
  ringImage=loadImage("RING2.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;
  
  ring=createSprite(width-300,height/2);
  ring.addImage(ringImage);
  ring.scale=0.3;
  ring.velocityY=8

  ball=new Ball(100,100,50);

  ground=new Ground();

  
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);

  if (ring.y>height/2+185){
    ring.velocityY=-12
  }

  if(ring.y<height/2-185){
    ring.velocityY=+12
  }
  
   
  drawSprites();
  ball.display();
  ground.display();

}
