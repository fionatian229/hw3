function setup() { 
  createCanvas(400, 400);
  noStroke();
}

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
 
  if (key == 1) {
    diameter = 10;
  } else if (key == 2) {
    diameter = 20;
  } else if (key == 3) {
    diameter = 30;
  }

    
}