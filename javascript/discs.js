function setup() {
  createCanvas(400, 400);
  backgroundColor = color(random(255), random(255), random(255));
}

var backgroundColor;
var discraft;
var innova;
var color1;
var color2;
var color3;
var colorA;
var colorB;
var colorC;
var color4;
var color5;
var color6;
var colorD;
var colorE;
var colorF;
var color7;
var color8;
var color9;
var colorG;
var colorH;
var colorI;
var color10;
var color11;
var color12;
//var deg=12;

function preload() {
  discraft = loadFont("Etelka-Medium-Pro.ttf");
  innova = loadFont("oregon_ldo.ttf");
}

function draw() {
  background(backgroundColor);
  textSize(10);
  text("My Disc Golf Bag", width/2, height/2);
  drawPutter(100, 100, 150);
  drawMidRange(100, 300, 150);
  drawDriver1(300, 100, 150);
  drawDriver2(300,300,150);
  //deg+=3; 
}

function drawPutter(discX, discY, discDiam) {
  //Disc diameter 
  //push();  
  //translate (100,100);
  //rotate (radians (deg));
  //fill(color1, color2, color3);
  //ellipse(discX, discY, discDiam, discDiam);

  //Disc Logo (Luna)
  fill(colorA, colorB, colorC);
  ellipse(discX, discY, discDiam * 0.9, discDiam * 0.9);
  textFont(discraft);
  stroke("black");
  strokeWeight(discDiam / 75);
  textSize(discDiam / 6);
  textAlign(CENTER);
  fill("white");
  text("Luna", discX, discY);
  textSize(discDiam / 18);
  text("Discraft", discX, discY - discDiam * 0.25);
  textSize(discDiam / 24);
  text("PUTTER", discX, discY + discDiam * 0.25);
  text("3, 3, 0, 3, 0.5", discX, discY + discDiam * 0.3);
  //pop();
}

function drawMidRange(discX, discY, discDiam) {
  //Disc Diameter
  fill(color4, color5, color6);
  ellipse(discX, discY, discDiam, discDiam);
  //Disc Logo (Buzzz)
  fill(colorD, colorE, colorF);
  ellipse(discX, discY, discDiam * 0.9, discDiam * 0.9);
  textFont(discraft);
  stroke("black");
  strokeWeight(discDiam / 75);
  textSize(discDiam / 6);
  textAlign(CENTER);
  fill("white");
  text("Buzzz", discX, discY);
  textSize(discDiam / 18);
  text("Discraft", discX, discY - discDiam * 0.25);
  textSize(discDiam / 24);
  text("MID RANGE", discX, discY + discDiam * 0.25);
  text("5, 4, -1, 1, 0.5", discX, discY + discDiam * 0.3);
}

function drawDriver1(discX, discY, discDiam) {
  //Disc Diameter
  fill(color7, color8, color9);
  ellipse(discX, discY, discDiam, discDiam);
  //Disc Logo (Pro Destroyer)
  textFont(innova);
  stroke("black");
  strokeWeight(discDiam / 75);
  textSize(discDiam / 8);
  textAlign(CENTER);
  fill("white");
  text("Pro Destroyer", discX, discY);
  textSize(discDiam / 18);
  text("Innova", discX, discY - discDiam * 0.25);
  textSize(discDiam / 24);
  text("DRIVER", discX, discY + discDiam * 0.25);
  text("12, 5, -1, 3, 0.5", discX, discY + discDiam * 0.3);
}

function drawDriver2(discX, discY, discDiam) {
  //Disc Diameter
  fill(color1, color11, color12);
  ellipse(discX, discY, discDiam, discDiam);
  //Disc Logo (Zeus)
  fill(colorG, colorH, colorI);
  ellipse(discX, discY, discDiam * 0.9, discDiam * 0.9);
  textFont(discraft);
  stroke("black");
  strokeWeight(discDiam / 75);
  textSize(discDiam / 6);
  textAlign(CENTER);
  fill("white");
  text("Zeus", discX, discY);
  textSize(discDiam / 18);
  text("Discraft", discX, discY - discDiam * 0.25);
  textSize(discDiam / 24);
  text("DRIVER", discX, discY + discDiam * 0.25);
  text("12, 5, -1, 3, 0.5", discX, discY + discDiam * 0.3);
}

function mousePressed() {
  backgroundColor = color(random(255), random(255), random(255));
  colorA = random(255);
  colorB = random(255);
  colorC = random(255);
  color1 = colorA * 0.5;
  color2 = colorB * 0.5;
  color3 = colorC * 0.5;

  colorD = random(255);
  colorE = random(255);
  colorF = random(255);
  color4 = colorD * 0.5;
  color5 = colorE * 0.5;
  color6 = colorF * 0.5;

  color7 = random(255);
  color8 = random(255);
  color9 = random(255);

  colorG = random(255);
  colorH = random(255);
  colorI = random(255);
  color10 = colorG * 0.5;
  color11 = colorH * 0.5;
  color12 = colorI * 0.5;
}