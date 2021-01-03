const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = [];
var balls = [];


var ground1,ground2,ground3;
var divider1,divider2divider3,divider4,divider5,divider6,divider7;
var base;

function preload() {
}

function setup() {
  createCanvas(700,800);
  engine = Engine.create();
    world = engine.world;


  ground1 = new Ground(300,795,800,10);
  ground2 = new Ground(695,400,10,800);
  ground3 = new Ground(5,400,10,800);

  divider1 = new Gr(350,640,10,300);
  divider2 = new Gr(250,640,10,300);
  divider3 = new Gr(150,640,10,300);
  divider4 = new Gr(450,640,10,300);
  divider5 = new Gr(550,640,10,300);
  divider6 = new Gr(15,640,10,300);
  divider7 = new Gr(685,640,10,300);

  base = new Gr(350,785,678,10);

  for (var j = 75; j <=width; j=j+50) 
  {
     plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
     plinkos.push(new Plinko(j,175));
  }
   for (var j = 75; j <=width; j=j+50) 
  {
     plinkos.push(new Plinko(j,275));
  }
   for (var j = 50; j <=width-10; j=j+50) 
  {
     plinkos.push(new Plinko(j,375));
  }










}

function draw() {
  background("black");  
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
  divider7.display();

  base.display();

  for (var j = 0; j < plinkos.length; j++) {

    plinkos[j].display();
  }
  if(frameCount%60===0){
    balls.push(new Ball(random(50, 650), 10,10));
  }

 for (var j = 0; j < balls.length; j++) {
  
    balls[j].display();
  }







  drawSprites();
}