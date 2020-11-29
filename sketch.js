// Nothing displaying
//Don't know how to complete

var hr;
var mn;
var sc;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  arc();

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(sc,0,60,0,360);
  hrAngle = map(sc,0,12,0,360);

  drawSprites();
}

function hour(){
  text('Current hour:\n' + h, 5, 50);
}

function minute(){
  text('Current minute: \n' + m, 5, 50);
}

function seconds(){
  text('Current second: \n' + s, 5, 50);
}

function line() {
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
}