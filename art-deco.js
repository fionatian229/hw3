createCanvas (340, 340);

for (var column = 1; column < 7; column ++){
	for (var i = 10; i <= 40; i = i + 10) {
  noFill();
  var x = 60*column-i/2;
  var y = height/2- i/2;
  var w = i+5;
  var h = i+5;
  rect(x,y,w,h);
  
	}
}