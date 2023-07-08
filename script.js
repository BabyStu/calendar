$(function () {
  
  var timeOfDay = $('#time-display');
  var eventDescriptionText = $('#event-form');
  var saveButtons = $('.saveBtn');
  const rows = document.getElementsByClassName('row');

  function displayTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      timeOfDay.text(rightNow);
    }

  displayTime();
  setInterval(displayTime, 1000);

  function pastPresentFuture() {

    var currentHour = parseInt(dayjs().format('H'));
    
    console.log(currentHour)
    
    $('.time-block').each(function() {
      var rowId = parseInt($(this).attr('id'));
    
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
      var events = eventDescriptionText.val();

      localStorage.setItem('events', JSON.stringify(events));
      console.log(events)
    });

    function displayEvents() {
      $('.time-block').each(function() {
        // var rowId = $(this).attr('id');
        var events = localStorage.getItem('events');


        if (events) {
          eventDescriptionText.val(JSON.parse(events));
        } else {
          events = [];
        }
      });
    }

    pastPresentFuture();
    displayEvents();
  });