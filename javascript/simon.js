var colors = [
  [0, 255, 0],
  [255, 0, 0],
  [0, 0, 255],
  [255, 255, 0],
];

//var numIterations = 3;
var ans = [1, 2, 3, 4];
var res = [];
var id = [];
var correct = true;
var total = 1;
var getUser = false;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  for (var a = 1; a <= ans.length; a++) {
    res[a - 1] = new Rectangle(a - 1, a * 200, a * 200, a * 200, a);
    id[a - 1] = res[a - 1].getId();
  }
  //setInterval(start(), 1000);
}

function draw() {
  background(220);
  noLoop();
  //show();
  start();
  for (var a = 0; a < ans.length; a++) {
    res[a].show();
  }
}

function start() {
  for (var i = 0; i < ans.length; i++) {
    ans[i] = int(random(1, 4));
  }
  console.log(ans);
  console.log(res);
  console.log(id);
  light();
}

function light() {
  for (var k = 0; k < ans.length; k++) {
    if (ans[k] == 1) {
      fill(0, 230, 0);
      rect(0, 0, 200, 200);
    }
    if (ans[k] == 2) {
      fill(230, 0, 0);
      rect(200, 0, 200, 200);
    }
    if (ans[k] == 3) {
      fill(0, 0, 230);
      rect(200, 200, 200, 200);
    }
    if (ans[k] == 4) {
      fill(230, 230, 0);
      rect(0, 200, 200, 200);
    }
    //show();
    getUser = true;
    mouseClicked();
  }
}

function check() {
  for (let t = 0; t < ans.length; t++) {
    if (res[t] != ans[t]) {
      correct = false;
      text(
        "Your game is over! Final score:" + total + "!",
        width / 2,
        width / 8
      );
      res[t] = null;
    }
  }
}

function mouseClicked() {
  for (var a = 0; a < ans.length; a++) {
    res[a].clicked();
  }
}

class Rectangle {
  constructor(x, y, w, h, id) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.id = id;
  }

  show() {
    fill(colors[0]);
    rect(0, 0, 200, 200);
    fill(colors[1]);
    rect(200, 0, 200, 200);
    fill(colors[2]);
    rect(200, 200, 200, 200);
    fill(colors[3]);
    rect(0, 200, 200, 200);
    fill("black");
    ellipse(200, 200, 125);
    fill("white");
    textSize(25);
    text("Simon", 165, 205);
  }
  clicked() {
    for (var zz = 0; zz < res.length; zz++) {
      if (id[zz] == zz + 1) {
        fill("black");
        text("Click Correct Box", 15, 35);
        text("Good Luck!", 15, 65);
      }
    }

    if (getUser) {
      for (var s = 0; s < ans.length; s++) {
        if (mouseX < 200 && mouseX > 0 && mouseY < 200 && mouseY > 0) {
          id[s] = 1;
        }
        if (mouseX < 400 && mouseX > 200 && mouseY < 200 && mouseY > 0) {
          id[s] = 2;
        }
        if (mouseX < 400 && mouseX > 200 && mouseY < 400 && mouseY > 200) {
          id[s] = 3;
        }
        if (mouseX < 200 && mouseX > 0 && mouseY < 400 && mouseY > 200) {
          id[s] = 4;
        }
      }
    }
  }
  getId() {
    return this.id;
  }
}
