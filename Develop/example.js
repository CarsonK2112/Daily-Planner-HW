const moment = require('moment')
const momentTime = moment().format('h')
let example10AM = '10:00AM'

let example9AM = '9:00AM'

const split10 = example10AM.split(':')
const split9 = example9AM.split(':')
console.log(split10[0])

console.log(split9[0])




// if(buttonTime < momentTime) {
//     //set the background to red
// } else if (buttonTime > momentTime){
//     //set the background to whatever for the future
// } else if (buttontime === momentTime) {
//     // set to be present
// }


console.log(momentTime)

