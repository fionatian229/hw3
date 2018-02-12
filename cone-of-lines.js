createCanvas(340,340);
noFill();
for (var i = 20; i <= 300; i = i + 10) {
  var startX = width/2;
  var startY = 0;
  var endX = i+10;
  var endY = height;
  line(startX, startY, endX, endY);
}