createCanvas(340,340);
noFill();
for (var i = 0; i <= 340; i = i + 10) {
  var X = width/2;
  var Y = height/2;
  var W = i-10;
  var H = i-10;
  ellipse(X, Y, W, H);
}