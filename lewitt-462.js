
createCanvas(340, 340);
background(0);

for (var i = 10; i <= 800; i = i + 50) {
  stroke(255);
  strokeWeight(10);
  noFill();
  var X = width/2;
  var Y = 0;
  var W = i;
  var H = i;
  ellipse(X, Y, W, H);
}
