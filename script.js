$(function () {
  
  var timeOfDay = $('#time-display');
  var saveButtons = $('.saveBtn');
  // const rows = document.getElementsByClassName('row');

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
    var events = localStorage.getItem('events');
    var rowId = $(this).attr('id');

    events = JSON.parse(events) || {};


      console.log(events)
    // get events from local storage
    // take the string and parse it into an object
    // get ID of timeblock
    // use ID to update events
    // 

    


    localStorage.setItem('events', JSON.stringify(events));
        
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