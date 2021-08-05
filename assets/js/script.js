
var container=$('.container');
var hourRow=$('#currentDay');

var currentTime= moment().format('MMMM Do YYYY, h:mm:ss a'); 

console.log(currentTime)

var updateToday= setInterval(function() {
    var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    hourRow.html(today);
}, 1000);

// workSchedule.forEach{function(timeBlock) {
//     var timeRow = $("<form>").attr( {
//         "class": "row"
//     });
//     $(".container").append(timeRow);

//     var timeBox = ("<div>")
//         .text('${thisHour.hour}${thisHour.meridiem}')
//         .attr( {
//             "class": 
//         })
// }
// }
var saveButton=$('')

var status = '';

