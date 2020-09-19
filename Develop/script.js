
var time = moment().format('LTS');

var form = document.getElementById("button-form")
form.addEventListener("submit", function(event){
event.preventDefault()
console.log
})

var count = 1;
    function setColor(btn, color) {
        var property = document.getElementById(btn);
        if (count == 0) {
            property.style.backgroundColor = "#FFFFFF"
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#7FFF00"
            count = 0;
        }
    }

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

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleclick);
  console.log(i, localStorage.getItem(i+1))
  var input = document.getElementById("inputTask" + (i+1))
  console.log(input)
  var lstoragevalue = localStorage.getItem(i+1) 
  if (lstoragevalue !== null) {
    input.value = lstoragevalue
  }
  
}

