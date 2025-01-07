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
    //This seems outdated, originally worked in 1.7 from the book version.
    //Used a tiny circle instead.
    //point(this.x, this.y); 
    circle(this.x, this.y, 1);
  }

  step() {
    //====[ Four Directional ]====
    /*const choice = floor(random(4));
    if (choice == 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }*/
    
    //====[ Eight Directional ]====
   /*let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;
    
    this.x += xstep;
    this.y += ystep;
    */
    //====[ Smooth ]====
    let xstepSmooth = random(-1, 1);
    let ystepSmooth = random(-1, 1);
    this.x += xstepSmooth;
    this.y += ystepSmooth;
  }
}