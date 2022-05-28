const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var backgroundImage;
var ball1,ball2,ball3,ball4,blower1;
var ball5,ball6,ball7,ball8;
var blower2;
function preload(){
  backgroundImage = loadImage("./assets/app bg.png");
}

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 120, 120);
  ball1= new Ball( 100,400, 120, 120);
  ball2 = new Ball(500,700,  120, 120);
  ball3 = new Ball( 1000,440, 120, 120);
  ball4 = new Ball(1500,400, 120, 120);
  ball5 = new Ball(400,400, 120, 120);
  blower = new Blower(600 ,490 + 20 + 50, 300, 20);
  blower1 = new Blower(700 ,770, 2000, 20);
  blower10 = new Blower(700 ,10, 2000, 20);
  blower2 = new Blower(200 ,350, 250, 20);
  blower3 = new Blower(1400 ,200, 300, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, 500, 250,140);
  button = createButton("Click for the action");
  button.position(800, 600);
  button.class("blowButton");

  button.mousePressed(blow);

  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();

}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  blower.show();
  ball.show();
  ball1.show();
  ball2.show();
  ball3.show();
  ball4.show();
blowerMouth.show();
blower1.show();
blower2.show();
blower3.show();
blower10.show();
ball5.show();
 

}

function blow() {

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});

}

