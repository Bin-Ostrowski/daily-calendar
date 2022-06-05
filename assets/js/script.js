// // const moment = require('moment'); // download package.json 


// const nineAm = new Date('June, 4, 2022 09:00:00');
// const today = new Date();

// const tenAm = new Date(`${today.toDateString()} 10:00:00`);

// const eleven =  new Date(`${today.toDateString()} 11:00:00`);
// console.log(eleven.getHours());


// const nineAmEl = document.createElement('<div>');
// nineAmEl.className = "container"
// nineAmEl.style.width = '50px';
// nineAmEl.style.height = '50px';






// //format page for each hour



// //compage if this time is in the past
// console.log(Date.now() > eleven);

// console.log('this is moment: ', moment().format());
const hourBlocks = document.querySelector(".container");

const nineAmEl = document.createElement('div');
    nineAmEl = new Date('June, 4, 2022 09:00:00');
    nineAmEl.className = "nineAmEl"
    nineAmEl.style.width = '50px';
    nineAmEl.style.height = '50px';
    hourBlocks.appendChild(nineAmEl);
    console.log (nineAmEl);

const today = new Date();
console.log(Date.now());

const tenAm = new Date(`${today.toDateString()} 10:00:00`);
const elevenAm =  new Date(`${today.toDateString()} 11:00:00`);
const twelvePm = new Date(`${today.toDateString()} 12:00:00`);
console.log(elevenAm.getHours());


const blockColor = function (){
    if (nineAmEl > Date.now()) {
    nineAmEl.style.backgroundColor = 'red';
} else {
    nineAmEl.style.backgroundColor = 'green';
}}
