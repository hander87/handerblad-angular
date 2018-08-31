// Sätt in: <canvas id="canvas1"></canvas>

var canvas = document.querySelector('#canvas1');

// c står för context
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 40;
// var minRadius = 4;

// Profile 1
var colorArray = [

	'rgba(252, 247, 255, 0.85)',
	'rgba(209, 218, 232, 0.85)',
	'rgba(247, 255, 251, 0.85)',
	'rgba(227, 232, 209, 0.85)',
	'rgba(255, 246, 229, 0.85)'

/*
	'#FCF7FF',
	'#D1DAE8',
	'#F7FFFB',
	'#E3E8D1',
	'#FFF6E5'
*/
];

console.log(Math.random() * colorArray.length);

window.addEventListener('mousemove',
	function(event){
	mouse.x = event.x;
	mouse.y = event.y;
} );


window.addEventListener('resize',
	function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});


function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;

	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
		this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0 ) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		// interactivity
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
			mouse.y - this.y < 50 && mouse.y - this.y > -50) {

			if (this.radius < maxRadius) {
				this.radius += 1;
			}
		} else if (this.radius > this.minRadius ) {
			this.radius -=1;
		}
		this.draw();
	}
}

var circleArray = [];

function init() {
	circleArray = [];
	for (var i = 0; i < 500; i++) {

		var radius = Math.random() * 3 + 1;
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx  = (Math.random() - 0.5) * 2;
		var dy = (Math.random() - 0.5) * 2;

		circleArray.push(new Circle(x, y, dx, dy, radius));

	}

}

function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, innerWidth, innerHeight);


	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}

}
animate();

console.log(Math.floor(Math.random() * 4 + 1))

init ();