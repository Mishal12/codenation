//activity 1
// let songsFav = [
//     "Adele",
//     "queen",
//     "ssss"
// ];
// songsFav.push("great");
// for(i=0; i< songsFav.length; i++){
//     console.log(songsFav[i]);
// }

//console.log(songsFav)

// let age=15;
// while(age<18){
//     console.log("You are child")
//     age++;
// }

// console.log("You are adult")

// let cards= ["d","s","H", "C"]
// let currentCard= "C"

// while(currentCard != "s"){

//     console.log(currentCard);
//     currentCard=cards[Math.floor(Math.random()*4)]
// }

// console.log(currentCard)

//Activity 2:
// for(i=0; i<6; i++){
//     console.log(Math.floor(Math.random()*50+1))
// }

//Activity 3:
// for(i=0;i<=9;i++)
// {
//     console.log(i);
// }

// for(i=9;i>=0;i--)
// {
//     console.log(i);
// }

//Activity 4
// let flims= ["raid2",
//             "raid",
//             "ghostbhusters",
//             "red"
// ];
// for(i=0;i<1;i++){
//    console.log(flims);}
//     if(flims[3]=="ghostbhusters"){
//         console.log("yay its ghostbusters");}
//         else{
//             console.log("Boo!we want ghostbusters")
// }

//Activity 5

// for(i=0; i<6; i++){
//     let random= Math.floor(Math.random()*30+1)
//     //console.log(random)
//     if(random % 7==0){
//         console.log(`${random}is divisible by 7`)}
//         else{

//         console.log(`${random} is not divisible by 7`)
//     }
// }

// Activity 6

// let bobsFollwers= ["a","b","c","d"]
// let hannahsFollowers=["c","d","e","f"]
// let mutualFollowers=[]

// for(i=0; i<bobsFollwers.length; i++){
//     for(j=0;j<hannahsFollowers.length;j++){
//         if(hannahsFollowers[j]==bobsFollwers[i]){
//             console.log((bobsFollwers[i]))
//     }
// }
// }

// function createPhoneNumber(numbers){
//     let firstpart=""
//     let secondpart=""
//     let thirdpart=""
//     for(i=0; i<numbers[i].length;i++){
//         if(i<3){
//             firstpart.concat(numbers[i].toString())
//         }
//         else if(3<i<6){
//             secondpart.concat(numbers[i].toString())
//         }

//     }
//     return console.log(`${firstpart}`)
// }

// createPhoneNumber([1,2,3,4,5,6,7,8,9,0])

let childPrice= 8
let adultPrice= 10.95
let seniorPrice= 7.5
let age= 17
if(age<18){
    console.log(`Since it is a child price is ${childPrice}`)
}
else if(age>60){
    console.log(`Adult so price is ${seniorPrice}`)
}