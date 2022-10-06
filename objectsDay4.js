//activity
const alarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "get up at 7am"
};

let day = "saturday"
if (day === "saturday" || day === "sunday") {
    console.log(alarm.weekendAlarm)
}
else {
    console.log(alarm.weekdayAlarm)
}
alarm.weekdayAlarm = ['okay', 'no']

//random
const removeSpaces= str =>{
    return console.log(str.split(" "))
}


const example = 'Welcome To Our        Website   ';

console.log(example.split(' ').join(''));

//random
// var s = "04.07.2012";
// console.log(s.replace(new RegExp("[0-9]","g"), "X")); 
// let fakeBin = x =>{

//     return console.log(x.replace(new RegExp("[0-4]", "g"), 0));
//   }

//   fakeBin(3)

// const fakeBin = x => {

//     return console.log(x.replace(/[1234]/g, '0').replace(/[56789]/g, '1'));
// }

