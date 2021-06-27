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
  console.log('cool');
});

var keepStorage = function() {
  var a9 = localStorage.getItem('9AM');
  var a10 = localStorage.getItem('10AM');
  var a11 = localStorage.getItem('11AM');
  var p12 = localStorage.getItem('12PM');
  var p1 = localStorage.getItem('1PM');
  var p2 = localStorage.getItem('2PM');
  var p3 = localStorage.getItem('3PM');
  var p4 = localStorage.getItem('4PM');
  var p5 = localStorage.getItem('5PM');
  var p6 = localStorage.getItem('6PM');
  var p7 = localStorage.getItem('7PM');
  var p8 = localStorage.getItem('8PM');
  var p9 = localStorage.getItem('9PM');
  var p10 = localStorage.getItem('10PM');
  var p11 = localStorage.getItem('11PM');

  nineA.text(a9);
  tenA.text(a10);
  elevA.text(a11);
  twelP.text(p12);
  oneP.text(p1);
  twoP.text(p2);
  thrP.text(p3);
  fourP.text(p4);
  fiveP.text(p5);
  sixP.text(p6);
  sevP.text(p7);
  eightP.text(p8);
  nineP.text(p9);
  tenP.text(p10);
  elevP.text(p11);
};

keepStorage();
displayDate();
checkAllTimes();
});
