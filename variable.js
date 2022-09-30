//Activity 1
let person = ['mishal', 27, 'red']
console.log(`My name is ${person[0]} and my age is ${person[1]}. Also, my fav color is ${person[2]}`)

//Activity 2
let array = ['egg', 'rice', 'soup'];

console.log(`For breakfast I will eat ${array[0]}. For lunch I will eat ${array[1]} and I will eat ${array[2]} for dinner`);

array = ['cornflakes', 'chicken', 'burger']

console.log(`For breakfast I will eat ${array[0]}. For lunch I will eat ${array[1]} and I will eat ${array[2]} for dinner`);


//Activity 3
//new date shows current date unless specified
const d = new Date();

const birthDate = new Date(1995, 08, 24);
let oneday = 60 * 60 * 1000 * 24;// converting into milliseconds
let diffDays = Math.round((d - birthDate) / oneday);
console.log(diffDays); // shows days from my birthday till now

//activity 4
let space1= 'x',space2= 'x',space3= 'o' ,space4= 'x'
let space5= 'x', space6='o', space8='o' ,space9='0'

let displayBoard = [`${space1}   |  |  `,
    ` ${space1}  |  |  `,
    "   |  |  "]
let line = "-----------"
//for loop to iterate array 3 times
 for(let i=0; i<displayBoard.length; i++){
    for(let j=0; j<displayBoard.length; j++){
        console.log(displayBoard[i])
    }
    if(i<2){
        console.log(line)
    }
    
 }



