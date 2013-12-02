function Shape() {
	this.x = 0;
	this.y = 0;
}

Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	console.info("Shape was moved!");
}

Shape.prototype.doSomething = function() {
	console.info("I'm doing something here!");
}

function Rectangle() {
	Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.info(rect instanceof Rectangle);
console.info(rect instanceof Shape);

rect.move(1,1);
rect.doSomething();


function Person() {
	this.name = "John Doe";
	this.age = 0;
	this.gender = "N/A";
	this.phone = "(000) 000-0000";
}

Person.prototype.show = function() {
	console.log(this.name + ", " + this.age + ", " + this.gender + ", " + this.phone);
}

Person.prototype.setName = function(name) {
	this.name = name;
	console.log("Name has been set to: " + name);
}

function Mariano() {
	Person.call(this);
}

function Mariano(name, age, gender, phone) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.phone = phone;
}

Mariano.prototype = Object.create(Person.prototype);
Mariano.prototype.constructor = Mariano;

var marian = new Mariano();
var marian2 = new Mariano("Bobo", 25, "M", "888-111-2222");
var person = new Person();


person.show();


//marian.setName("Marianito");
marian.show();
marian2.show();