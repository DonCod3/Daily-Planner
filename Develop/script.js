let today = dayjs();
let currentDayEl = $('#currentDay');
let timeBlockEl = $(".time-block");
let timeInputEl = timeBlockEl.children(".description");

$(function () {

  // listener for click events on the save button. saving  description in local storage.
  timeBlockEl.on('click','button', function(){
    const blockId = $(this).closest('.time-block').attr('id');
    const blockInput = $(this).siblings('.description');
    localStorage.setItem(blockId, blockInput.val());
  })

  // comparing the id to the current hour. 
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
});

//display date & time
$('#currentDay').text(today.format('[Today is ]dddd, MMMM D, YYYY'));
$('#currentHour').text(today.format('[The time is ]h:mm:ss a'));

