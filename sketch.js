var gameWon = false;

var t = "Where is the laire of the rare square?"

var rectangle = {
  x : 0,
  y : 0,
  l : 150
};

var circle = {
  x : 0,
  y : 0,
  d : 30
};

var distanceToRect;

function setup() {
  createCanvas(windowWidth, windowHeight - 4);

  textSize(50);
  textAlign(CENTER);
  fill(255);
  text(t, windowWidth/2, 100);

  rectangle.x = random(75, windowWidth - rectangle.l/2);
  rectangle.y = random(75, windowHeight - rectangle.l/2 + 4);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);

  var colRect = ('rgba(0, 0, 0, 0)');

  var colEllipse = (255);

  rColEllipse = map(distanceToRect, 0, sqrt(sq(windowWidth) + sq(windowHeight)), 255, 0);
  bColEllipse = map(distanceToRect, 0, sqrt(sq(windowWidth) + sq(windowHeight)), 0, 255);

  background(51);

  if (rectangle.x - rectangle.l / 2 < mouseX && rectangle.x + rectangle.l / 2 > mouseX && rectangle.y - rectangle.l / 2 < mouseY && rectangle.y + rectangle.l / 2 > mouseY) {
    colRect = (255);
    gameWon = true;
  }

  noStroke();
  fill(colRect);
  rect(rectangle.x, rectangle.y, rectangle.l, rectangle.l);

  circle.x = mouseX;
  circle.y = mouseY;

  noStroke();
  fill(rColEllipse, 0, bColEllipse);
  ellipse(circle.x, circle.y, circle.d, circle.d);

  distanceToRect = int(dist(circle.x, circle.y, rectangle.x, rectangle.y));
}

//to-do

/*
use button to load game
timer of x seconds to find item
display title
*/
