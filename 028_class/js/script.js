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
		return `Current point position X: ${this.x}; Y: ${this.y}`;
	}
}

let p = new Point(3, 5);

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
// a.printWhileInk(
// 	"A: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
// 	out1
// );

let b = new RefuelingMarker('green', 4, 6);
b.refueling();
// b.printWhileInk(
// 	"B: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
// 	out2
// );

// =============== 3 =============

const employeesWrapper = document.querySelector('.employees__wrapper');

class Employee {
	constructor(name, age, position, salary) {
		this.name = name;
		this.age = age;
		this.position = position;
		this.salary = salary;
	}
}

const emploeesArr = [
	new Employee('Johne', 23, 'cashier', 1200),
	new Employee('Marta', 30, 'sales manager', 2000),
	new Employee('Igor', 28, 'credit manager', 2200),
	new Employee('Natasha', 27, 'senior cashier', 1700),
	new Employee('Marti', 34, 'director', 4000),
];

class EmpTable {
	constructor(employees) {
		this.employees = employees;
	}

	getHtml() {
		const table = document.createElement('table');
		table.classList.add('employees__table');

		const trTitles = document.createElement('tr');
		trTitles.classList.add('employees__titles');
		const titles = Object.keys(this.employees[0]);

		for (let i = 0; i < titles.length; i++) {
			const thTitle = document.createElement('th');
			thTitle.textContent = titles[i];
			trTitles.append(thTitle);
		}

		table.append(trTitles);

		for (const employee of this.employees) {
			const trEmployee = document.createElement('tr');
			for (const key in employee) {
				const td = document.createElement('td');
				td.textContent = employee[key];
				trEmployee.append(td);
			}
			table.append(trEmployee);
		}

		employeesWrapper.append(table);
	}
}

const f = new EmpTable(emploeesArr);
f.getHtml();
