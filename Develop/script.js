var now = moment().format("ddd MMM DD, YYYY hh:mm A");
var currentHour24 = moment().format("HH");
var currentHour12 = moment().format('hh');
var descriptionEl = $(".description");

var sos = false;



var nineA = $("#9A");
var tenA = $("#10A");
var elevA = $("#11A");
var twelP = $("#12P");
var oneP = $("#1P");
var twoP = $("#2P");
var thrP = $("#3P");
var fourP = $("#4P");
var fiveP = $("#5P");
var sixP = $("#6P");
var sevP = $("#7P");
var eightP = $("#8P");
var nineP = $("#9P");
var tenP = $("#10P");
var elevP = $("#11P");

var displayDate = function() {
  $("#currentDay").text(now);
};

var checkTime = function(hour, section) {
  console.log(currentHour24);
  if (hour < currentHour24) {
    section.addClass("past");
  };
  if (hour === currentHour24) {
    section.addClass("present");
  };
  if (hour > currentHour24) {
    section.addClass("future");
  };
};


displayDate();
checkTime('09', nineA);
checkTime('10', tenA);
checkTime('11', elevA);
checkTime('12', twelP);
checkTime('13', oneP);
checkTime('14', twoP);
checkTime('15', thrP);
checkTime('16', fourP);
checkTime('17', fiveP);
checkTime('18', sixP);
checkTime('19', sevP);
checkTime('20', eightP);
checkTime('21', nineP);
checkTime('22', tenP);
checkTime('23', elevP);
