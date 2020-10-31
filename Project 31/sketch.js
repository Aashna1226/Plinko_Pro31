const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var particles=[];
var plinko=[];
var divisions=[];
var ground;

var divisionHeight=300;

function setup() {
  createCanvas(800,800);

  engine =Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  for(var k=0; k <=width; k = k +80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j=75; j<=width; j=j+50){
    plinko.push(new Plinko(j,75));
  }
  
  for(var j=50; j<=width-10; j=j+50){
    plinko.push(new Plinko(j,175));
  }
  for(var j=75; j<=width-10; j=j+50){
    plinko.push(new Plinko(j,275));
  } 
  for(var j=50; j<=width-10; j=j+50){
    plinko.push(new Plinko(j,375));
  }

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  for(var j = 0; j < plinko.length; j++){
    plinko[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  for(var p = 0; p < particles.length; p++){
    particles[p].display();
  }
  
  for(var k=0; k < divisions.length; k++){
    divisions[k].display();
  }

}


