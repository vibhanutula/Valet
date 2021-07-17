canvas = document.getElementById('Valet');
ctx = canvas.getContext("2d");

CarO_width = 100;
CarO_height = 100;

background_image = "Park.jpg";
CarO_image = "CarO.jpg";

CarO_x = 10;
CarO_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

    CarO_imgTag = new Image(); //defining a variable with a new image
	CarO_imgTag.onload = uploadCarO; // setting a function, onloading this variable
	CarO_imgTag.src = CarO_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCarO() {
	ctx.drawImage(CarO_imgTag, CarO_x, CarO_y, CarO_width, CarO_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(CarO_y >=0)
	{
		CarO_y = CarO_y - 10;
		console.log("When up arrow is pressed,  x = " + CarO_x + " | y = " +CarO_y);
		 uploadBackground();
		 uploadCarO();
	}
}
function down()
{
	if(CarO_y <=500)
	{
		CarO_y =CarO_y+ 10;
		console.log("When down arrow is pressed,  x = " + CarO_x + " | y = " +CarO_y);
		uploadBackground();
		 uploadCarO();
	}
}
function left()
{
	if(CarO_x >= 0)
	{
		CarO_x =CarO_x - 10;
		console.log("When left arrow is pressed,  x = " + CarO_x + " | y = " +CarO_y);
		uploadBackground();
		 uploadCarO();
	}
}
function right()
{
	if(CarO_x <= 700)
	{
		CarO_x =CarO_x + 10;
		console.log("When right arrow is pressed,  x = " + CarO_x + " | y = " +CarO_y);
		uploadBackground();
		uploadCarO();
   }
}
