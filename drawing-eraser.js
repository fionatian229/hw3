
function setup() { 
  createCanvas(400, 400);}

var diameter = 10;


function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}


function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill (0, 0, 255); 
  } else if(key == 'A'){
    fill (95,217,212);
  } else if (key =='C'){
  
  fill (255,180,45);
  } else if (key == 'D'){
    fill (142, 99, 169);
  } 
  else if (key == '1'){
  ellipse(mouseX, mouseY, 10);
  } else if (key == '2'){
    ellipse(mouseX, mouseY, 15);
  
  }
  else if (key == '3'){
  ellipse(mouseX, mouseY, 20);
    
  }

  else if (key == 'E'){
  clear();
  }
    
}



