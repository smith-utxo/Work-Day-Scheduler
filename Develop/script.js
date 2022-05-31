// Time variables
var today = moment().format('dddd, MMMM DD'); 
var currentHour = moment().format('H');
var displayDay = document.getElementById('currentDay');

displayDay.innerText = today; 

console.log(currentHour); 



//Save Button event Listener 
var save = document.querySelectorAll('.saveBtn')

// Required syntax to use jquery 
$(document).ready(function() {

  rowColorAlgorithm();
 //Call function to assign colors to each hour 
  function rowColorAlgorithm() {
    $('hour').each(function(){
    var rowId = parseInt($(this).attr('id'));
    
      if(rowId === currentHour){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else if (rowId < currentHour){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }

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
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
})
