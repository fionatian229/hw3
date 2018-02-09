createCanvas(340,340);
background(255,227,93);
for (var i = 0; i <= 340; i = i + 10) {
  var X = 0;
  var Y = i;
  var x2 = width;
  var y2 = i;
  noFill();
  stroke(188,20,20);
  line(X, Y, x2, y2);
  noFill();
}

fill(255,227,93);
stroke(35,90,135);
rect(70,70,200,200);
for(var n = 0;n <=200; n=n+10){
  var X3 =n+70;
  var Y3 =70;
  var X4 =n+70;
  var Y4 =width -70;
  line(X3, Y3, X4, Y4);
  noFill();
}
