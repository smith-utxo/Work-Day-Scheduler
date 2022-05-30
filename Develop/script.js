var today = moment().format('dddd, MMMM DD'); 
var currentHour = moment().format('h a');
var displayDay = document.getElementById('currentDay');




console.log(currentHour);
displayDay.innerText = today; 

/*var auditHour = function(){
  if (currentHour == );
}

auditHour(); */
