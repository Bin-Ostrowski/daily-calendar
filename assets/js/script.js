//list current date in jumbotron
const currentDate = $("#currentDay").text(moment().format('dddd, MMMM Do')); // change this to show Ex: Thursday, September 10th. 

//create timeblocks in html with Id's  "9,10,11 etc." to parent block. 
    //a div for hour, a textarea, and a button
    //add css and bootstap classes
    //add icon to button

//load textarea from local storage
$("#9 .description").val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem('10'));
$("#11 .description").val(localStorage.getItem('11'));
$("#12 .description").val(localStorage.getItem('12'));
$("#13 .description").val(localStorage.getItem('13'));
$("#14 .description").val(localStorage.getItem('14'));
$("#15 .description").val(localStorage.getItem('15'));
$("#16 .description").val(localStorage.getItem('16'));
$("#17 .description").val(localStorage.getItem('17'));

//event listener to this button to save text area to this id.
$('.saveBtn').on('click', function(){

//store tasks in an object so can save to local storage
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val() 
    // save content from textarea into localstorage
    localStorage.setItem(key, value)
});

//if/else statment to turn blocks colors depending on in past, present, or eminent
function start(){

     // need to compare the current hour against the id of the time block
    var currentHour = moment().hours();

    $('.time-block').each(function (){
        var timeBlockHour= parseInt($(this).attr('id'))

        if (currentHour > timeBlockHour) {
             $(this).addClass("past");
        } else if ( currentHour === timeBlockHour) {
             $(this).addClass("present");
        } else {
            $(this).addClass("future");
         };

    });
};

//run function to style by time
start();
