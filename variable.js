//Activity 1
// let array=['egg', 'rice', 'soup'];

// console.log(`For breakfast I will eat ${array[0]}. For lunch I will eat ${array[1]} and I will eat ${array[2]} for dinner`);

// array=['cornflakes', 'chicken', 'burger']

// console.log(`For breakfast I will eat ${array[0]}. For lunch I will eat ${array[1]} and I will eat ${array[2]} for dinner`);


//Activity 3

const d= new Date();

const birthDate= new Date(1995,08,24);
let oneday= 60*60*1000*24;
let diffDays= Math.round((d - birthDate)/oneday);
console.log(diffDays);