$(function () {
  var timeOfDay = $('#time-display');
  var saveButtons = $('.saveBtn');

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm a');
    timeOfDay.text(rightNow);
  }

  displayTime();
  setInterval(displayTime, 1000);

  function pastPresentFuture() {
    var currentHour = parseInt(dayjs().format('H'));
    
    console.log(currentHour)
    
    $('.time-block').each(function() {
      var rowId = parseInt($(this).attr('id').substring(5));
    
      if (rowId < currentHour) {
        $(this).addClass('past');
      } else if (rowId === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }
    
  saveButtons.on('click', function() {
    var eventDescription = $(this).siblings('textarea').val();
    var events = JSON.parse(localStorage.getItem('events')) || {};
    var timeBlockId = this.parentElement.getAttribute('id');

    events[timeBlockId] = eventDescription;

    localStorage.setItem('events', JSON.stringify(events));
  });

  function displayEvents() {
    var events = JSON.parse(localStorage.getItem('events'));

    if (events) {
      Object.keys(events).forEach(function(timeBlockId) {
        var eventDescription = events[timeBlockId];
        $('#' + timeBlockId).find('textarea').val(eventDescription);
      });
    }
  }

  pastPresentFuture();
  displayEvents();
});
