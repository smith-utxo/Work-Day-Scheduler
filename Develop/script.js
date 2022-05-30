var today = moment().format('dddd, MMMM DD'); 
var currentHour = moment().format('h a');
console.log(currentHour);

var displayDay = document.getElementById('currentDay');


displayDay.innerText = today; 

