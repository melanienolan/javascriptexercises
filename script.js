// The dates and times..

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var el = document.getElementById("dayz");
el.textContent = "The day today is: " + daylist[day] + ".";

var hours = today.getHours();
var minutes = today.getMinutes();

var el2 = document.getElementById("timez");
el2.textContent = "And the time is: " + hours + ":" + minutes + ".";

var twelvetime;

if (hours >= 12) {
      twelvetime = (hours - 12) + ":" + minutes + "PM";
	} else {
      twelvetime = hours + ":" + minutes + "AM";
	};

var el3 = document.getElementById("othertime");
el3.textContent = "Or if you would prefer it in the 12 hour format, the time is: " + twelvetime + ".";
