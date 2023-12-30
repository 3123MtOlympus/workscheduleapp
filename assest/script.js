// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    $(".saveBtn").on("click", function () {
        // Use DOM traversal to get the "hour-x" id of the time-block containing the button
        var blockId = $(this).closest(".time-block").attr("id");
        
        // Save the user input in local storage using the time-block id as a key
        var userDescription = $(this).siblings(".description").val().trim();
        localStorage.setItem(blockId, userDescription);
      });

     // TODO: Add code to apply the past, present, or future class to each time block.
  function updateHourStyles() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // Remove previous classes
      $(this).removeClass("past present future");

      // Add the appropriate class based on the comparison with the current hour
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
 
// Call the function to initially set the time-block styles
updateHourStyles();

// TODO: Add code to get any user input saved in localStorage and set the values of corresponding textarea elements.
function loadSavedData() {
  $(".time-block").each(function () {
    var blockId = $(this).attr("id");
    var savedData = localStorage.getItem(blockId);

    // Update the textarea with the saved data
    $(this).find(".description").val(savedData);
  });
}

// Call the function to load saved data on page load
loadSavedData();

    // TODO: Add code to display the current date in the header of the page.
  });
  
  