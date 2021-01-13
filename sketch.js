const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup() {
  var canvas= createCanvas(400,400);
 
  engine= Engine.create();
  world= engine.world;

  box1= new Box(200,100,50,50);
  box2= new Box(220,200,40,50);

  ground= new Ground(200, 390, 400, 20)
}

function draw() {
  background("black");  
 
 Engine.update(engine); 

 box1.display();
 box2.display();

 console.log(box1.body.angle);
 ground.display();
}