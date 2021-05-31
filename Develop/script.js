var currentDay = moment().format("ddd MMM DD, YYYY hh:mm A");
var currentHour = moment().format("HH");
var descriptionEl = $(".description");
var nineA = $("#9A")
var tenA = $("#10A")
var elevA = $("#11A")
var twelP = $("#12P")
var oneP = $("#1P")
var twoP = $("#2P")
var thrP = $("#3P")
var fourP = $("#4P")
var fiveP = $("5P")
var sixP = $("#6P")
var sevP = $("#7P")
var eightP = $("#8P")
var nineP = $("#9P")
var tenP = $("#10P")
var elevP = $("#11P")

var displayDate = function() {
  $("#currentDay").text(currentDay);
};

var checkTimePresent = function(hour, section) {
  if (currentHour === hour) {
    section.addClass("present")
  }
};



displayDate();
checkTimePresent('09', nineA);
checkTimePresent('06', $("#6P"));
