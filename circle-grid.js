createCanvas (340, 340);
background (0);
for (var column = 1; column < 13; column ++){
  for (var i = 5; i <= 340; i = i + 30) {
  
  var x = 26*column;
  var y = i+15;
  var w = 20;
  var h = 20;
  fill(255);
  ellipse(x, y, w, h);
  
  }
}