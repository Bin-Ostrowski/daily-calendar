//list current date in jumbotron
const currentDate = $("#currentDay").text(new Date()); // change this to show Ex: Thursday, September 10th. 

//store tasks in an array so can save to local storage
// const tasks = [nineAm, tenAm];

//add function that creates (.time-block)
const createTimeBlock = function(){
    //includes three divs in a row - (.row)
    var timeBlockLi = $("<li>").addClass("row");
    //div 1(.hour) on left is  and states the hour - takes up 1/12 of row
    var hourBlock = $("<p>").addClass("hour col");
    //div 2 is a form input - takes up 10/12 of row in center
    var taskBlock = $("<p>").addClass("textArea col-10");
    //div 3 is on right - with save icon
    var saveBlock = $("<div>").addClass("saveBtn col");
    var saveIcon = $("<i>").addClass("fa-solid fa-floppy-disk");
    //append i el to div
    saveBlock.append(saveIcon);
    //append p, span, and div element to li
    timeBlockLi.append(hourBlock, taskBlock, saveBlock);
    //append li to div class .container
    $(".container").append(timeBlockLi);
}

//create object holding timeblocks for each our of the work day with corresponding text in hour block.
//add Id's
const nineAm = function (){
    createTimeBlock();
    $(".hour").find(".hour").text("9am"); //can i use this to change text?
    
};
nineAm();
const tenAm = function (){
    createTimeBlock();
    $(".hour").text("10am");
};
tenAm();

//if/else statment to turn blocks colors depending on in past, present, or eminent

//create form input for tasks
// $(".textArea").on("click", "p", function() {
//     var text = $(this)
//     .text()
//     .trim();
//     var textInput =$("<textarea>")
//     .addClass("form-control")
//     .val(text);
//     $(this).replaceWith(textInput);
//     textInput.trigger("focus");
//   });

//add click event to save button to save textInput to local storage

// //loadTasks
// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {
//         nineAm: [],
//         inProgress: [],
//         inReview: [],
//         done: []
//       };
//     }
   
// }  

// //safe tasks
// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

// loadTasks(); // this stays on bottom
