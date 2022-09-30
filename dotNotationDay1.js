//Activity 1
console.log("    |  |");
console.log("    |  |");
console.log("    |  |");
console.log("-------------");
console.log("    |  |");
console.log("    |  |");
console.log("    |  |");
console.log("-------------");
console.log("    |  |");
console.log("    |  |");
console.log("    |  |");



//Activity stretch
let displayBoard = ["   |  |  ",
    "   |  |  ",
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
