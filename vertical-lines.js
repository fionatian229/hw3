
createCanvas (340, 340);

for (var i = 20; i <= 340; i = i + 10) {
  var startX = i;
  var startY = 0;
  var endX = i;
  var endY = height;
  line(startX, startY, endX, endY);
}