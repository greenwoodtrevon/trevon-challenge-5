$(document).ready(() =>{
var now = moment().format("ddd MMM DD, YYYY hh:mm A");
var currentHour24 = moment().format("HH");
var currentHour12 = moment().format('hh');
var descriptionEl = $(".description");

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

var checkAllTimes = function() {
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
};

$('.description').on('click', function(){
  var className = $(this).attr('class');
  var $el = $(this);
  var elId = $el.attr("id");
  console.log(elId);
              
  var task = $('<input/>')
    .addClass(className)
    .val($el.text());

  $el.replaceWith(task);
  
  var save = function(){
    var $p = $('<textarea/>')
      .addClass(className)
      .attr('id', elId)
      .text(task.val());
      
    task.replaceWith($p);

    
  };
  task.on('blur', save).focus();
  
});

$(".saveBtn").on("click", function() {
  var taskText = $(this).siblings('.description').val();
  var time = $(this).siblings('.hour').attr('id');
  console.log(time);
  localStorage.setItem(time, taskText);
});

var keepStorage

displayDate();
checkAllTimes();
});
