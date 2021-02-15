const Engine =  Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world,engine;
var ground



function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world

  ground = Bodies.rectangle(200,200,40,40,{isStatic:true})
  World.add(world,ground)
  console.log(ground)
  console.log(ground.position.x)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,40,40)
  drawSprites();
}