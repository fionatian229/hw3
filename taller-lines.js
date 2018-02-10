createCanvas (340, 340);

for (var i = 5; i <= 340; i = i + 5) {
  var startX = i;
  var startY = 0;
  var endX = i;
  var endY = i+90;
  line(startX, startY, endX, endY);
}