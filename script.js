







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

//to put the date in Day, xxth Month format

var el = document.getElementById("dayz");
el.innerHTML = "The date today is: <strong>" + daylist[day] + ", " + datend + " " + monthlist[month] + "</strong>";

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
el3.innerHTML = "Or if you would prefer it in the 12 hour format, the time is: <strong>" + twelvetime + "</strong>";
