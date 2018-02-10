createCanvas(340,340);

for (var i = 10; i <= 170; i = i + 10) {
  var startX = width/2-i;
  var startY = i;
  var endX = width/2 + i;
  var endY = i;
  line(startX, startY, endX, endY);

}

for (var r = 10; r <= 170; r = r + 10) {
  var startX1 = r;
  var startY1 = height/2 + r;
  var endX1 = width - r;
  var endY1 = height/2 + r;
  line(startX1, startY1, endX1, endY1);
}
