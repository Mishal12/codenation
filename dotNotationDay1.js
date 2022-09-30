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
let array = ["   |  |  ",
    "   |  |  ",
    "   |  |  "]
let line = "-----------"
//for loop to iterate array 3 times
for (grid = 0; grid <= 3; grid++) {
    console.log(array[grid]);
    //iterate line two times
    if (grid < 2) {
        console.log(line);
    }
}

