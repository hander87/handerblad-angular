// Lyssnar efter: <canvas id="canvas1"></canvas>
var canvas = document.querySelector('#canvas1');

var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 25;

// Color Profile
var colorArray = [
	'rgba(252, 247, 255, 0.85)',
	'rgba(209, 218, 232, 0.85)',
	'rgba(247, 255, 251, 0.85)',
	'rgba(227, 232, 209, 0.85)',
	'rgba(255, 246, 229, 0.85)'
];

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

		// Mouse Circle Size
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
			mouse.y - this.y < 50 && mouse.y - this.y > -50) {

			if (this.radius < maxRadius) {
        // Circle Size Speed
				this.radius += 0.5;
			}
		} else if (this.radius > this.minRadius ) {
			this.radius -=1;
		}
		this.draw();
	}
} // Circle

var circleArray = [];

function init() {
  circleArray = [];

  // Nr of Circles
	for (var i = 0; i < 500; i++) {

    // Paths
		var radius = Math.random() * 3 + 1;
		var x = Math.random() * (innerWidth - radius * 1.1) + radius;
		var y = Math.random() * (innerHeight - radius * 1.1) + radius;
		var dx  = (Math.random() - 0.5) * 1.1;
		var dy = (Math.random() - 0.5) * 1.1;

		circleArray.push(new Circle(x, y, dx, dy, radius));

	}

}

// Animate function
function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}

}
animate();
init ();
