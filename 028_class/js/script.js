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
