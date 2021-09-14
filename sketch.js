const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var man1, man2, man3, man4, man5, man6, imposter1, imposter2, imposter3 ;
var me

function preload() {
    backgroundImg = loadImage("sprites/morningphase.png");
   meImg = loadImage("sprites/me.png");
}

function setup(){
     createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
   
     ground = new Ground(width/2,height,width,20);
 
     groundleft = new Ground(-20,height/2,20,height);
     groundright = new Ground(width,height/2,20,height);
   
    man1 = new man(Math.round(random(100,width-100)),Math.round(random(0,120)),100,200);
    
    man2 = new man(Math.round(random(100,width-100)),Math.round(random(0,120)),100,200);
    man3 = new man (Math.round(random(100,width-100)),Math.round(random(0,120)),100,200);
    man4 = new man (Math.round(random(100,width-100)),Math.round(random(0,120)),100,200);
    man5 = new man(Math.round(random(100,width-100)),Math.round(random(0,120)),100,200);
    man6 = new man(Math.round(random(100,width-100)),Math.round(random(0,120)),100,200);
    imposter1 = new man(Math.round(random(100,width-100)),Math.round(random(0,120)),100,200);
    imposter2 = new man(Math.round(random(100,width-100)),Math.round(random(0,120)),100,200);
    imposter3 = new man(Math.round(random(100,width-100)),Math.round(random(0,120)),100,200);
     me= Bodies.rectangle(100,100,50,100);
     
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    me(meImg);
    man1.display();
    man2.display();
    man3.display();
    man4.display();
    man5.display();
    man6.display();
    imposter1.display();
    imposter2.display();
    imposter3.display();
    ground.display();

    groundleft.display();
    groundright.display(); 
}
