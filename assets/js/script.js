var container=$('.container');
var hourRow=$('#currentDay');

var currentTime= moment().format('MMMM Do YYYY, h:mm:ss a'); 

console.log(currentTime)

var updateToday= setInterval(function() {
    var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    hourRow.html(today);
}, 1000);


var saveButton=$('')

