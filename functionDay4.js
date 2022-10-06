//Activity 1
const factorial = (n) => {
    if((n===0) || (n===1)){
        return 1;
    }else{
            return(n* factorial(n-1));
        }
    }

    console.log(factorial(2));


//activity 2

let ordercount = 0;

const takeOrder= (topping, topping2) => {
    console.log(`Pizza with ${topping} and ${topping2}`)
    ordercount++
}

takeOrder ("ham", "cheese")

//Activity 3

// pin correct and balance eql or more----  cash dispense


const cashDispense= (pin, balance) => {
if(pin=== 2345 && balance >= 4000 ){
    return("cash withdraw succesfull")}
    else {
        return("either pin incorrect or no balance")
    }
}
console.log(cashDispense(2345, 3000));

const correctPin = 1234;
let currentBalance = 10000;

const checkPin = (pin) => {
    if (correctPin === pin) {
        return true;
    }
    return false;

}

const canWithDraw = (withDrawAmount) => {
    if (withDrawAmount <= currentBalance) {
        return true
    }
    return false;
}

const handleTransaction = (pin, withDrawAmount) => {
    if(!checkPin(pin)){
        console.log("Incorrect pin")
        return ;
    }
    if(!canWithDraw(withDrawAmount)){
        console.log("No sufficinet balance")
        return
    }

    //currentBalance-= withDrawAmount;
    console.log("succesfully completed transaction")
}

handleTransaction(1234, 2000);

//random
const fun =(str) => {
    return console.log( str.split('').reverse().join(''))
}

fun('liverpool FC'); 
