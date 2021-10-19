function setup() {
  createCanvas(400, 400);
}

var myFont;

function preload() {
  myFont = loadFont("LunchTimeNormal.ttf");
}

function draw() {
  background(220);
  drawSnickers(200, 200, 200, 50); //creates one
}

function drawSnickers(candyX, candyY, length, thickness) {
  //main

  fill(85, 35, 0);
  rect(
    candyX - (length / 2) * 1.18,
    candyY - (thickness / 2) * 1.35,
    length * 1.2,
    thickness * 1.4
  );

  //Round border1
  fill("red");
  rect(
    candyX - (length / 2) * 1.11,
    candyY - (thickness / 2) * 1.2,
    length * 1.12,
    thickness * 1.18,
    65,
    0,
    10,
    0
  );

  //Round border2
  fill("white");
  rect(
    candyX - length / 2,
    candyY - thickness / 2,
    length,
    thickness,
    65,
    0,
    10,
    0
  );

  //Quadralateral end 1 (jagged end)
  fill(85, 35, 0);
  beginShape();
  vertex(
    candyX - (length / 2) * 1.18 - 33,
    candyY - (thickness / 2) * 1.35 - 8.5
  );
  vertex(
    candyX - (length / 2) * 1.18 - 15,
    candyY - (thickness / 2) * 1.35 - 8.5
  );
  vertex(candyX - (length / 2) * 1.18, candyY - (thickness / 2) * 1.35);
  vertex(
    candyX - (length / 2) * 1.18,
    candyY - (thickness / 2) * 1.35 + thickness + 20
  );
  vertex(
    candyX - (length / 2) * 1.18 - 15,
    candyY - (thickness / 2) * 1.35 + thickness + 29.5
  );
  vertex(
    candyX - (length / 2) * 1.18 - 33,
    candyY - (thickness / 2) * 1.35 + thickness + 29.5
  );
  endShape();

  //Quadralateral end 2 (jagged end)
  beginShape();
  vertex(
    candyX - (length / 2) * 1.18 + length + 73,
    candyY - (thickness / 2) * 1.35 - 8.5
  );
  vertex(
    candyX - (length / 2) * 1.18 + length + 55,
    candyY - (thickness / 2) * 1.35 - 8.5
  );
  vertex(
    candyX - (length / 2) * 1.18 + length + 40,
    candyY - (thickness / 2) * 1.35
  );
  vertex(
    candyX - (length / 2) * 1.18 + length + 40,
    candyY - (thickness / 2) * 1.35 + thickness + 20
  );
  vertex(
    candyX - (length / 2) * 1.18 + length + 55,
    candyY - (thickness / 2) * 1.35 + thickness + 29.5
  );
  vertex(
    candyX - (length / 2) * 1.18 + length + 73,
    candyY - (thickness / 2) * 1.35 + thickness + 29.5
  );
  endShape();

  //Letters
  fill("blue");
  textSize(48);
  textAlign(CENTER);
  textFont(myFont); //LunchTimeNormal
  text("SNICKERS", candyX * 1.01, candyY * 1.09);

  //jagged line
  fill(85, 35, 0);
  translate(33, 158);
  rotate(HALF_PI);
  var x = -16;
  beginShape();
  for (var i = 0; i < 44; i++) {
    vertex(i * 2, x);
    if (x == -2) {
      x = 2;
    } else {
      x = -2;
    }
  }
  vertex(i * 2, x - 18);
  endShape();

  //jagged line(right)
  fill(85, 35, 0);
  translate(367, 158);
  rotate(HALF_PI);
  rotate(PI);
  var y = -16;
  beginShape();
  for (var k = 0; k < 44; k++) {
    vertex(k * 2, y);
    if (y == -2) {
      y = 2;
    } else {
      y = -2;
    }
  }
  vertex(k * 2, y - 18);
  endShape();
}