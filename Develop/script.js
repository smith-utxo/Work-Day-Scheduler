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
    $('.time-row').each(function(){
    var rowId = parseInt($(this).attr('id'));
    
      if(rowId == currentHour){
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
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
})
