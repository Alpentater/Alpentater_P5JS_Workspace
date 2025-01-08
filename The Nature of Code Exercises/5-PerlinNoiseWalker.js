/*Copied for the most part by following along with the book: 
"The Nature of Code" by Daniel Shiffman.
NOT my own original work.
*/

let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.tx = 0;
    this.ty = 1000;
  }

  show() {
    stroke(1);
    circle(this.x, this.y, 3);
  }

  step() {
   this.x = map(noise(this.tx), 0, 1, 0, width);
   this.y = map(noise(this.ty), 0, 1, 0, height);
   this.tx += 0.01;
   this.ty += 0.01;
}