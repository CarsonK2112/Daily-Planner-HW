// const moment = require('moment')
var time = moment().format('LTS');

var form = document.getElementById("button-form")
form.addEventListener("submit", function(event){
event.preventDefault()
})

  var buttons = document.getElementsByClassName ("btn")

  function handleclick(event) {
  event.preventDefault()
  console.log(event.target)
  var buttonid = event.target.dataset.id
  var input = document.getElementById("inputTask" + buttonid)
  localStorage.setItem(buttonid, input.value)
  console.log(localStorage.getItem(buttonid))
}


// render local storage keys to the dom
// select all buttons on page
// Attach event listener to the buttons
// Use local storage to save strings as they appear in the input boxes
// Create function that pulls button id keys from local storage

var currenttime = moment().format('LT')

document.getElementById('textbox').innerHTML = currenttime

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleclick);
  console.log(i, localStorage.getItem(i+1))
  var input = document.getElementById("inputTask" + (i+1))
  console.log(input)
  var lstoragevalue = localStorage.getItem(i+1) 
  if (lstoragevalue !== null) {
    input.value = lstoragevalue
  }
  var labels = document.getElementsByTagName("label")
  console.log(labels)
  // Get the for attribute
  // compare times
  // get time out of the row
}

// console.log(moment().format('LT'))
const momentTime = moment().format('LT')
console.log(momentTime)
var test = document.getElementById('test').textContent
console.log(test)
// const splitter = test.split(':')
// console.log(splitter)
for (var i = 0; i < test.length; i++) {
if (momentTime < test) {

}
}



// Set the color to green before the current time stated by the button
// Set color orange when it is during the hour stated by the button
// Set the color red when it is after the hour stated by the button
// Set Moment into a variable to be utilized in the while loop

// var standard = moment().format('LT')
// while (standard < )


