var x;
var y;
let total = 0;
var ranNum;
var b1;
var b2;
var b3;
var diam;
let average = 1;
let totalRolls = 0;
let grandTotal = 0;
let largestRoll = 0;

function setup() {
 
  createCanvas(400, 400); //height/width must equal
  noLoop();
  colorMode(HSB);
  diam = width / 20;
}

function draw() {
   background(random(400), random(100), random(100));
  for (var y = 0; y < height ; y += height/2.75) {
    for (var x = 0; x < width; x += width/2.75) {
      Dice = new Die(y+width/160, x+width/160);
      Dice.show();
      Dice.roll();
    }
  }
  strokeWeight(2);
  textSize(width / 25);
  fill("white");
  text('Total: ' + total, width/64, width/1.45);
  text('Average: ' + round(average, 2), width/64, width/3);
  text('Grand Total: ' + grandTotal, width/1.6, width/3);
  text('Largest Roll: ' + largestRoll, width/1.6, width/1.45);
}

function mousePressed() {
  background(random(400), random(100), random(100));
  totalRolls++;
  grandTotal=grandTotal+total;
  average=grandTotal/totalRolls;
  if(total>largestRoll){
    largestRoll=total;
  }
  total = 0;
  redraw();
}

class Die {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ranNum = int(random(1, 7));
    total = total + this.ranNum;
  }
  roll() {
    fill(random(400), random(100), random(100));
    if (this.ranNum == 1) {
      ellipse(this.x + height / 8, this.y + width / 8, diam, diam); //dice 1
    }
    if (this.ranNum == 2) {
      ellipse(this.x + height / 14, this.y + width / 12, diam, diam); //dice 2
      ellipse(this.x + height / 6, this.y + width / 6, diam, diam); //dice 2
    }
    if (this.ranNum == 3) {
      ellipse(this.x + height / 16, this.y + width / 14, diam, diam); //dice 3
      ellipse(this.x + height / 8, this.y + width / 8, diam, diam); //dice 3
      ellipse(this.x + height / 5.5, this.y + width / 5.5, diam, diam); //dice 3
    }
    if (this.ranNum == 4) {
      ellipse(this.x + height / 5.5, this.y + width / 6, diam, diam); //dice 4
      ellipse(this.x + height / 14, this.y + width / 6, diam, diam); //dice 4
      ellipse(this.x + height / 5.5, this.y + width / 16, diam, diam); //dice 4
      ellipse(this.x + height / 14, this.y + width / 16, diam, diam); //dice 4
    }
    if (this.ranNum == 5) {
      ellipse(this.x + height / 8, this.y + width / 8, diam, diam); //dice 5
      ellipse(this.x + height / 5.5, this.y + width / 5, diam, diam); //dice 5
      ellipse(this.x + height / 14, this.y + width / 5, diam, diam); //dice 5
      ellipse(this.x + height / 5.5, this.y + width / 16, diam, diam); //dice 5
      ellipse(this.x + height / 14, this.y + width / 16, diam, diam); //dice 5
    }
    if (this.ranNum == 6) {
      ellipse(this.x + height / 5.5, this.y + width / 5.1, diam, diam); //dice 6
      ellipse(this.x + height / 5.5, this.y + width / 8, diam, diam); //dice 6
      ellipse(this.x + height / 5.5, this.y + width / 18.2, diam, diam); //dice 6
      ellipse(this.x + height / 14, this.y + width / 5.1, diam, diam); //dice 6
      ellipse(this.x + height / 14, this.y + width / 8, diam, diam); //dice 6
      ellipse(this.x + height / 14, this.y + width / 18.2, diam, diam); //dice 6
    }
  }
  show() {
    strokeWeight(1);
    stroke("black");
    fill(random(400), random(100), random(100));
    rect(this.x, this.y, height / 4, width / 4, width/16);
  }
}
