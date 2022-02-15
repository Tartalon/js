'use strict';

class Point {
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;
	}

	get coordinates() {
		return [this.x, this.y];
	}

	set coordinates(newCoords) {
		[this.x, this.y] = [...newCoords];
	}

	position() {
		console.log(`Current point position X: ${this.x}; Y: ${this.y}`);
	}
}

let p = new Point(3, 5);
p.position();

const out1 = document.querySelector('.out_1');
const out2 = document.querySelector('.out_2');
class Marker {
	constructor(color, inkQuantity) {
		this.color = color;
		this.inkQuantity = inkQuantity;
	}

	printWhileInk(string, out) {
		const spaces = string.split(' ').length - 1;
		const stringOut = string.substring(0, this.inkQuantity / 0.5 + +spaces);

		out.textContent = stringOut;
		out.style.color = this.color;
	}
}

class RefuelingMarker extends Marker {
	constructor(color, inkQuantity, refuel) {
		super(color, inkQuantity);

		this.refuel = refuel;
	}

	refueling(string) {
		this.inkQuantity = this.refuel;
	}
}

let a = new Marker('red', 5);
a.printWhileInk(
	"A: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
	out1
);

let b = new RefuelingMarker('green', 4, 6);
b.refueling();
b.printWhileInk(
	"B: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
	out2
);
