
createCanvas(340,340);

var rate = 0.15;
var x = 0;
var target = 100;

while (true) {
  ellipse(mouseX, mouseY, 15, 15);
  noStroke();
  fill(203,59,37);
  x = target*rate + x*(1-0.15); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
  clear();
}