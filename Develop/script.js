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

    //Save userInput to local storage 
  localStorage.setItem(hour, userText); 

  });

  //Get Calendar inputs from local storage if any exist 
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));
  $("#hour6 .description").val(localStorage.getItem("hour6"));
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
})
