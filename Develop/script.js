// Time variables
var today = moment().format('dddd, MMMM DD'); 
var currentHour = moment().format('h a');
var displayDay = document.getElementById('currentDay');

displayDay.innerText = today; 


//Save Button event Listener 
var save = document.querySelectorAll('.saveBtn')

// Required syntax to use jquery 
$(document).ready(function() {
    
  //event listener in jquery.
  $(save).on('click', function() {
    var userText = $(this).siblings(".description").val(); 
    var hour = $(this).parent().attr('id'); 
    console.log(userText);
    console.log(hour);

  localStorage.setItem(userText, hour); 

});


});



