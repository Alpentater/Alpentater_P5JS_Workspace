/*Copied for the most part by following along with the book: 
"The Nature of Code" by Daniel Shiffman.
NOT my own original work.
*/

let randomCounts = [];
let total = 20;

function setup(){
	createCanvas(640, 240);
	for(let i = 0; i < total; i++){
		randomCounts[i] = 0;
	}
}

function draw(){
	background(0);

	//Picking a random number and increasing the count of how many times it has been chosen.
	let index = floor(random(randomCounts.length));
	randomCounts[index]++;
	
	stroke(255);
	fill(0);
	let w = width / randomCounts.length;

	//Graphing the results.
	for(let x = 0; x < randomCounts.length; x++){
		rect(x*w, height - randomCounts[x], w - 1, randomCounts[x]);
	}
}