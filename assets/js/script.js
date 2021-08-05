
var container=$('.container');
var hourRow=$('#currentDay');

var currentTime= moment().format('MMMM Do YYYY, HH:mm:ss a'); 

console.log(currentTime)

var updateToday= setInterval(function() {
    var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    hourRow.html(today);
}, 1000);

var nineSlot= document.getElementById('9');
var tenSlot= document.getElementById('10');
var elevenSlot= document.getElementById('11');
var twelveSlot= document.getElementById('12');
var oneSlot= document.getElementById('1');
var twoSlot= document.getElementById('2');
var threeSlot= document.getElementById('3');
var fourSlot= document.getElementById('4');
var fiveSlot= document.getElementById('5');

var timeSlot= [nineSlot, tenSlot, elevenSlot, twelveSlot, oneSlot, twoSlot, threeSlot, fourSlot, fiveSlot];

var nineAmTimeEvent= JSON.parse(localStorage.getItem('9AM Event')) || [];
var tenAmTimeEvent= JSON.parse(localStorage.getItem('10AM Event')) || [];
var elevenAmTimeEvent= JSON.parse(localStorage.getItem('11AM Event'))|| [];
var twelvePmTimeEvent= JSON.parse(localStorage.getItem('12PM Event')) || [];
var onePmTimeEvent= JSON.parse(localStorage.getItem('1PM Event')) || [];
var twoPmTimeEvent= JSON.parse(localStorage.getItem('2PM Event')) || [];
var threePmTimeEvent= JSON.parse(localStorage.getItem('3PM Event')) || []; 
var fourPmTimeEvent= JSON.parse(localStorage.getItem('4PM Event')) || [];
var fivePmTimeEvent= JSON.parse(localStorage.getItem('5PM Event')) || [];


// for (let timeSlot > currentTime; i < timeSlot.length; i++) {
//     timeSlot.forEach.classlist.add("future")
    
// }

// var timeFunction() {

// }