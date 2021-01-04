const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground   = new Ground(600,height,1200,20);
    platform = new Ground(250+200,350,300,20)
    bird     = new Bird(100,300);
    box1     = new Pig(130+200,320)
    box2     = new Pig(190+200,320)
    box3     = new Pig(250+200,320)
    box4     = new Pig(310+200,320)
    box5     = new Pig(370+200,320)
    box6     = new Pig(160+200,270)
    box7     = new Pig(220+200,270)
    box8     = new Pig(280+200,270)
    box9     = new Pig(340+200,270)
    box10    = new Pig(190+200,220)
    box11    = new Pig(250+200,220)
    box12    = new Pig(310+200,220)
    box13    = new Pig(220+200,170)
    box14    = new Pig(280+200,170)
    box15    = new Pig(250+200,120)
    platform2 = new Ground(250+600,350-100,300,20)
    box11     = new Pig(130+600,320-100)
    box22     = new Pig(190+600,320-100)
    box33     = new Pig(250+600,320-100)
    box44    = new Pig(310+600,320-100)
    box55     = new Pig(370+600,320-100)
    box66     = new Pig(160+600,270-100)
    box77     = new Pig(220+600,270-100)
    box88     = new Pig(280+600,270-100)
    box99     = new Pig(340+600,270-100)
    box100    = new Pig(190+600,220-100)
    box111    = new Pig(250+600,220-100)
    box122    = new Pig(310+600,220-100)
    box133    = new Pig(220+600,170-100)
    box144    = new Pig(280+600,170-100)
    box155    = new Pig(250+600,120-100)
    slingshot = new SlingShot(bird.body,{x:100, y:300});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();

      bird.display();
      bird.display();
      box1.display();
      box2.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      box7.display();
      box8.display();
      box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box11.display();
     box22.display();
     box33.display();
     box44.display();
     box55.display();
     box66.display();
     box77.display();
     box88.display();
     box99.display();
    box100.display();
    box111.display();
    box122.display();
    box133.display();
    box144.display();
    box155.display();
 platform.display();
 platform2.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed (){
    if(keyCode=== 32){
        slingshot.attach(bird.body)
    }
}