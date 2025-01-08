/*Copied for the most part by following along with the book: 
"The Nature of Code" by Daniel Shiffman.
NOT my own original work.
*/

function setup() {
  createCanvas(640, 240);
  background(255);
}

function draw(){
  let x = randomGaussian(320, 60);

  noStroke();
  fill(0, 10);
  circle(x, 120, 16);
}
