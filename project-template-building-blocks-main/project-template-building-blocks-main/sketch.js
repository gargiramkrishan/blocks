const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var box;

var boxes=[];

var ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  

  var o =
  {
    isStatic : true
  }
  ground = Bodies.rectangle(200,200,400,50,o)
  World.add(world,ground)
  fill(0, 0, 0)

  rectMode(CENTER);

  
}

function draw() 
{
  background(255, 234, 0);

 for(var i=0;i<boxes.length;i++)
 {
  boxes[i].show();
 }
  
 rect(ground.position.x,ground.position.y,400,50)
  
   

   
  Engine.update(engine);
}

function mousePressed()
{
  boxes.push(


  
    new BOX(mouseX,mouseY)


  )
}
