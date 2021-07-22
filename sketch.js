const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, hierro, piedra, hule;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,30)
    hammer = new Hammer(10,100);
    hierro = new Hierro(300,580);
    piedra = new Piedra(500,580);
    hule = new Rubber(700,580,50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    hierro.display();
    piedra.display();
    hule.display();
    
 
}