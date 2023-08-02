// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let today = dayjs();
let currentDayEl = $('#currentDay');
let timeBlockEl = $(".time-block");
let timeInputEl = timeBlockEl.children(".description");

// $('#currentDay').text(today.format('[Today is]MMM D, YYYY, h:mm:ss a'));
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  timeBlockEl.on('click','button', function(){
    const blockId = $(this).closest('.time-block').attr('id');
    const blockInput = $(this).siblings('.description');
    localStorage.setItem(blockId, blockInput.val());
  })
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  timeBlockEl.each(function(){
    hourId = $(this).attr('id');
    currentHour = dayjs().format('HH')
    if(hourId<currentHour){
      $(this).removeClass('present future');
      $(this).addClass('past');
    }
    else if (hourId == currentHour){
      $(this).removeClass('past future');
      $(this).addClass('present');
    }
    else {
      $(this).removeClass('present past');
      $(this).addClass('future');
    }
    savedHour = localStorage.getItem(hourId);
    $(this).find('.description').val(savedHour)
  })
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});

//display date & time
$('#currentDay').text(today.format('[Today is ]dddd, MMMM D, YYYY'));
$('#currentHour').text(today.format('[The time is ]h:mm a'));