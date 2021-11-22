/*
let js="amazing";
// console.log(40+8+23-10);

console.log("Jonas");
console.log(23);

let firstName = "Andy";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let John_Chris = "JC";
let $function = 20;

let person = "John";
let PI = 3.1415;

let myFirstJob = "shit";
let myCurrentJob = "nice";

let job1 = 'bad';
let job2 = 'good';

console.log(myCurrentJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'john');

javascriptIsFun = 'yes';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2077;
console.log(typeof year);

console.log(typeof null);









let age = 19;
age = 20;

const birthYear = 2002;
// birthYear = 2000;
// const job;

var job = 'programer';
job = 'artist';

lastName = 'Kayumov';
console.log(lastName);



//math operators
const now = 2077
const ageJohn = now - 2002;
const ageAndy = now - 2003;
console.log(ageJohn, ageAndy);

console.log(ageJohn * 2, ageJohn / 10, 2**3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'John';
const lastName = 'Kay';
console.log(firstName + ' ' + lastName);

//asignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4;
x ++;
x --;
x --;
console.log(x);

// comparison operators
console.log(ageJohn > ageAndy);
console.log(ageAndy >= 18);

const isFullAge = andyage >= 18;

console.log(now - 2002 > now - 2003);


const now = 2077
const ageJohn = now - 2002;
const ageAndy = now - 2003;

console.log(now - 2002 > now - 2003);

console.log(25-10-5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJohn + ageAndy) / 2
console.log(ageJohn, ageAndy, averageAge);

/////////////////////////////////
//coding challenge #1

//BMI = mass / height ** 2 = mass / (height * height)
test data 1
Mark 78kg 1.69m
John 92kg 1.95m

test data 2
Mark 95kg 1.88m
John 85kg 1.76m

*/

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI,johnBMI);

const markHigherBMI = markBMI > johnBMI;

if(markHigherBMI = true) {
    console.log("Mark's BMI is higher than John's")}
else(console.log("Mark's BMI is not higher than John's"));