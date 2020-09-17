
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

