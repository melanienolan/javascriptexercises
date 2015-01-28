// The dates and times..

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = today.getHours();
var minutes = today.getMinutes();
var date = today.getDate();
var month = today.getMonth();
var monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var datend;
var year = today.getFullYear();

//to add th or st etc to the number depending on which number it is

switch (date) {
	case 1:
	datend = date + "st";
	break;

	case 2:
	datend = date + "nd";
	break;

	case 3:
	datend = date + "rd";
	break;

	case 21:
	datend = date + "st";
	break;

	case 22:
	datend = date + "nd";
	break;

	case 23:
	datend = date + "rd";
	break;

	case 31:
	datend = date + "st";
	break;

	default:
	datend = date + "th";
	break;
};

//to put the date in Day, xxth Month Year format

var el = document.getElementById("dayz");
el.innerHTML = "The date today is: <strong>" + daylist[day] + ", " + datend + " " + monthlist[month] + " " + year + "</strong>";

// to add a zero to the minutes if the minutes are under 10. Otherwise it would show 17:0 and not 17:00

var zerominutes;

if (minutes < 10) {
	zerominutes = "0" + minutes;
} else {
	zerominutes = minutes;
};

var el2 = document.getElementById("timez");
el2.innerHTML = "And the time is: <strong>" + hours + ":" + zerominutes + "</strong>";


// to put the time into 12 hour format, adding AM or PM

var twelvetime;

if (hours > 12) {
      twelvetime = (hours - 12) + ":" + zerominutes + "PM";
	} else {
      twelvetime = hours + ":" + zerominutes + "AM";
	};

var el3 = document.getElementById("othertime");
el3.innerHTML = "Or in the 12 hour format, the time is: <strong>" + twelvetime + "</strong>";

// Random number generator
/*
// original solution

var randomNumber;
var el4;

function pickaNumber() {
	var randomNumber = Math.floor((Math.random() * 10) + 1);
	var el4 = document.getElementById("number");
	el4.innerHTML = randomNumber;
};

var el5 = document.getElementById("randomiser");
el5.onclick = pickaNumber;

*/

//new solution with event listener - puts number in button

var el4 = document.getElementById("randomiser");
var randomNumber;

function pickaNumber() {
	var randomNumber = Math.floor((Math.random() * 10) + 1);
	el4.innerHTML = '<p style="font-size: 50px">' + randomNumber + '</p>';
};
	
el4.addEventListener('click', pickaNumber, false);

// Area of a box

// hide form until start button is clicked
var fullForm = document.getElementById("formFields");
fullForm.style.display = 'none';

var startButton = document.getElementById("toStart");

function showForm(){
	fullForm.style.display = '';
	startButton.style.display = 'none';
};

startButton.onclick = showForm;

// calculate area of box

function calculateArea(){
	var length = document.getElementById("lengthEntered").value;
	var width = document.getElementById("widthEntered").value;
	var area = length * width;
	if (isNaN(area)) {
		document.getElementById("answer").innerHTML = "<p>You didn't enter two numbers. Please try again.</p>"
	} else {
		document.getElementById("answer").innerHTML = '<p>The total area is: ' + area + '</p>';
	};
};

document.getElementById("totalArea").onclick = calculateArea;



// fizzbuzz

var el7= document.getElementById("fizzbuzz");
var msg = "";

for (i = 1; i <= 100; i++) {
	if ((i % 3 == 0) && (i % 5 == 0)) {
		msg += "fizzbuzz <br>";
	} else if (i % 3 == 0) {
		msg += "fizz <br>";
	} else if (i % 5 == 0) {
		msg += "buzz <br>";
	} else {
		msg += i + "<br>";
	};
};

el7.innerHTML = msg;