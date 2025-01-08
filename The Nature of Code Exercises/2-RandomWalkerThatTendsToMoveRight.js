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
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(1);
    circle(this.x, this.y, 1);
  }

  step() {
    let r = random(1);

    if(r < 0.4){
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
  }
}