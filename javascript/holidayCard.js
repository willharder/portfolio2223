let colorlist = ["gold", "yellow", "turquoise", "red"];
var christmasColorList = ["red", "green"];
let index = 0;
var snowX;
var snowY = -1200;
let snow = [];
var x;
var y;
var c1;
var c2;
var c3;
var presents = [];
var timer = 0;
var ornArr = [];

function setup() {
  createCanvas(400, 400);
  background(0, 0, 0);
  snowX = random(5, width - 5);
  snowY = 4;
  for (var i = 0; i <= 100; i++) {
    snow[i] = new Snow(random(5, width - 5), random(-400, 0));
  }
  for (var k = 0; k < 8; k++) {
    var ranX = int(random(25, width - 25));
    var ranY = int(random(230, 300));
    presents[k] = new Present(ranX, ranY);
  }
  tree = new Tree(220, 220);
  ornArr = new Ornament(230, 105);
  ornArr2 = new Ornament(240, 130);
  ornArr3 = new Ornament(225, 150);
  ornArr4 = new Ornament(245, 155);
  ornArr5 = new Ornament(215, 180);
  ornArr6 = new Ornament(245, 185);
  ornArr7 = new Ornament(210, 210);
  ornArr8 = new Ornament(265, 210);
  ornArr9 = new Ornament(245, 210);
  setInterval(christmasColorList, 1000);
}

function draw() {
  background(0, 0, 0);
  noStroke();
  tree.show();
  fill(255, 255, 255);
  for (var i = 0; i <= 100; i++) {
    snow[i].display();
    snow[i].movement();
    snow[i].changeY();
  }

  fill("white");
  rect(0, 235, 400, 200);
  for (var t = 0; t < 8; t++) {
    presents[t].show();
  }

  ornArr.show();
  ornArr2.show();
  ornArr3.show();
  ornArr4.show();
  ornArr5.show();
  ornArr6.show();
  ornArr7.show();
  ornArr8.show();
  ornArr9.show();
  happyHolidaysText();
}

class Snow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.h = 10;
  }
  display() {
    fill(255, 255, 255);
    ellipse(this.x, this.y, random(1, 6), random(1, 6));
  }

  movement() {
    this.x += random(-1, 1);
    this.y += 2;
  }

  changeY() {
    if (this.y > 220) {
      this.y = -15;
    }
  }
}

class Present {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.c1 = int(random(255));
    this.c2 = int(random(255));
    this.c3 = int(random(255));
  }

  show() {
    fill(this.c1, this.c2, this.c3);
    stroke("black");
    rect(this.x, this.y, width / 16, width / 16);
    strokeWeight(2);
    line(this.x + width / 32, this.y, this.x + width / 32, this.y + width / 16);
    line(this.x, this.y + width / 32, this.x + width / 16, this.y + width / 32);
    fill("red");
    ellipse(this.x + width / 32 - 3, this.y, 8, 8);
    fill("green");
    ellipse(this.x + width / 32 + 3, this.y, 8, 8);
  }
}

class Tree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(0, 255);
    this.b = random(0, 255);
    this.g = random(0, 255);
  }

  show() {
    fill("brown");
    rect(this.x, this.y, width / 16, width / 16);
    fill(0, 255, 0);
    beginShape();
    vertex(190, 220);
    vertex(210, 170);
    vertex(200, 170);
    vertex(220, 120);
    vertex(210, 120);
    vertex(235, 70);
    vertex(260, 120);
    vertex(250, 120);
    vertex(270, 170);
    vertex(260, 170);
    vertex(280, 220);
    vertex(190, 220);
    endShape();
  }
}

class Ornament {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    var ranNum = int(random(1, 4));
    fill(colorlist[ranNum]);
    ellipse(this.x, this.y, 10, 10);
  }
}

function happyHolidaysText() {
  textSize(50);
  fill(christmasColorList[0]);
  text("Happy Holidays!", 18, 45);
  textSize(30);
  text("and a Happy New Year!", 38, 385);
  textSize(50);
  fill(christmasColorList[1]);
  text("Happy Holidays!", 20, 47);
  textSize(30);
  text("and a Happy New Year!", 39, 387);

}