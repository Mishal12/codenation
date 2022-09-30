//activity1

// let age= 17;
// let country= "UK";

// if (age>17 && country == "UK"){
//     console.log("yes i can serve you")
// }
// else {
//     console.log("you aren't old enough")
// }

//activity 2
// let pizzaTopping = "Pineapple";

// switch (pizzaTopping){
//     case "Peperoni":
//     case "Ham":
//     case "Cheese":
//     case "Tomato":
//         console.log(`I don't mind having ${pizzaTopping}`)
//         break;
//     case "Pineapple":
//     case "cabbage":
//     case "sweetcorn":
//     console.log(`I don't like ${pizzaTopping}`)
//         break;       
// }

// activity 3

// let len= "password";
// if(len.length<8){
//  console.log(`Password is too short`);   
//  }
//  else{
//     console.log(len);   
     
//  }

// activity 3.2

// let len= 12;
// if((len%3==0) || (len%5==0)){
//     console.log(`This number is divisible by 3 or 5`);
// }
// else{
//     console.log(`nothing to report`)
// }

//activity 4

let num= 19;
if(num%3==0){
    console.log("fizz");
}
else if(num%5==0){
    console.log("buzz")
}
else if(num%3==0 || num%5==0){
    console.log("fizzbuzz")
}
else{
    console.log(num)
}

// activity 5 palindrome

//let n= prompt();
let sum=0;
let n=1001,r;
 temp=n;

while(n>0)
{
    r=n%10;
    sum=(sum*10)+r;
    n = (n/10).toFixed(0);
    console.log(n);
}
if (temp==sum){
    console.log("it is palindrome")}
    else{
        console.log("it isnot palindrome")
    }

    //Activity 6

 let time= new Date();
 let hourTime= time.getHours();
 console.log(hourTime);
 let placeOfWork= "Euston";
 let townOfHome= "Reading";
 if(hourTime<9 || hourTime>17){
     console.log(townOfHome)
 }
else{
    console.log(townOfHome)
}

//Activity 7
let myString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh';
let vowel =  ['a','e','i','o','u'];
let letter= vowel.map(myString.lastIndexOf(letter))
const lastVowel= Math.max.apply(letter)

// // calculate lastIndex for each vowel separately, then take the greatest
// const lastVowel = Math.max.apply(null, substr.map(letter => myString.lastIndexOf(letter)));

console.log(lastVowel, myString[lastVowel]);
// let random= ('jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh\n
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi');
// let vowel= ("aeiou");
// let lastVowel= random.charAt(random.length-1)
// if (lastvowel==vowel){
//     console.log()
// }

//Activity 8
let string=("PulP")
let firstString= string.charAt(0);
//console.log(firstString)

let secondString= string.charAt(string.length-1);
//console.log(secondString)

if(firstString==secondString){
    console.log(true)
}
else{
    console.log(false)
}

//Activity 9
let num1=2;
let num2=7;
let numSum= num1+num2;
if(numSum%2==0){
    console.log(numSum);
}
else
    console.log(num1*num2);

    









