createCanvas(340,340);

for (var i = 0; i <= 340; i = i + 10) {
  var startX = 0;
  var startY = i+10;
  var endX = 340;
  var endY = i + 10;
  line(startX, startY, endX, endY);
}