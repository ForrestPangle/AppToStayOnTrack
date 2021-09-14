var displayCurrent = document.getElementById("currentDay");
var todayDateTime = moment().format("dddd, MMMM Do YYYY, h:mm a");

function loadCurrent() {
  displayCurrent.innerHTML = todayDateTime;
}
loadCurrent();

$("currentDay").html(todayDateTime);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  // color change timer
  function timeTracker() {
    var beginningTime = moment().hour();
    console.log(beginningTime);
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id"));

      console.log($(this).children()[1]);
      if (blockTime < beginningTime) {
        $(this).children().eq(1).removeClass("future");
        $(this).children().eq(1).removeClass("present");
        $(this).children().eq(1).addClass("past");
      } else if (blockTime === beginningTime) {
        $(this).children().eq(1).removeClass("past");
        $(this).children().eq(1).removeClass("future");
        $(this).children().eq(1).addClass("present");
      } else {
        $(this).children().eq(1).removeClass("present");
        $(this).children().eq(1).removeClass("past");
        $(this).children().eq(1).addClass("future");
      }
    });
  }
  timeTracker();
  let interval = setInterval(timeTracker, 30000);

  $("#8 textarea").val(localStorage.getItem("8"));
  $("#9 textarea").val(localStorage.getItem("9"));
  $("#10 textarea").val(localStorage.getItem("10"));
  $("#11 textarea").val(localStorage.getItem("11"));
  $("#12 textarea").val(localStorage.getItem("12"));
  $("#13 textarea").val(localStorage.getItem("13"));
  $("#14 textarea").val(localStorage.getItem("14"));
  $("#15 textarea").val(localStorage.getItem("15"));
  $("#16 textarea").val(localStorage.getItem("16"));
  $("#17 textarea").val(localStorage.getItem("17"));
});