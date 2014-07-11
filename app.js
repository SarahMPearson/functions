var prompt = require('sync-prompt').prompt;

//creating a function
function increment(x) {
  x++;
  //x = x + 1 other option
  return x;
}

//calling a function

var z = increment(3);
console.log(z)
z = increment(7);
console.log(z);
z = increment(9);
console.log(z)
z = increment(12);
console.log(z);

function square(y) {
  y *= y;
  return y;
}

var t = square(4);
console.log("This is Square " +t);
t = square(5);
console.log("This is Square " + t);
t = square(3);
console.log("This is Square " + t);
t = square(9);
console.log("This is square " + t);

function area(width, height) {
 var a =  width*height;
  return a;
}

var z  = area(3,6);
 console.log("This is room size " + z);

function volume(length, width, height) {
  return length * width * height;
}

var v = volume(3,5, 8);
console.log("This is volume " + v);

z =area(square(increment(3) + increment(4)), square(2));
 console.log(z)

function sayHello(){
  console.log("hello");
}
sayHello();

function makeUpper(string) {
  return  string.toUpperCase();
  
}
console.log(makeUpper("world"));

function canDrink(age) {
  if(age <21) {
    return "false" ;
  } else {
    return "true";
  }
}

console.log(canDrink(17));
console.log(canDrink(21));

// function letterGrade when a number is entered it returns a grade letter
function letterGrade(num) {
  if (num >90 && num <=100) {
    return "A";
  }else if (num >80 && num <= 89 ) {
    return "B";
  }else if (num >70 && num <= 79){
    return "C";
  }else if(num >60 && num <= 69){
    return "D";
  }else {
    return "F";
  }}


console.log(letterGrade(100));
console.log(letterGrade(79));
console.log(letterGrade(62));
console.log(letterGrade(45));
console.log(letterGrade(81));

// function adding the tax to the amount of a purchase
function addTax(amount, tax){
  var taxP = tax/100
  return (amount*taxP) + amount
}

var w = addTax(100, 10);
  console.log(w);

//functiong getting the sum of an array
//
function sum(array){
  var sum = 0;
  for( var k = 0; k < array.length; k++) {
  sum += array[k];
  } return sum;
}

var numbers = [3,4,5];
console.log(sum(numbers));

//function that prints out the factorial number
//
function factorial(fact){
  if(fact===0) {
    return 1;
  }
  return fact * factorial(fact-1);
}
  var fact = 1
  console.log(factorial(fact));

  //his way for factorial
  //function factorial(n){
  //  var product = 1;
  //
  //  for(var i =2; i<=n; i++) {
  //  product *=i;
  //  }
  //
  //  return product;
  //  }
  //
  //  console.log(factorial(0));
  //  console.log(factorial(1)):
  //  console.log(factorial(2));
  //


function rollDie() {
  return Math.floor(Math.random() * 6) +1;
}

function isPair(roll1, roll2){ //this is the hammer
  return roll1 === roll2;
}

function countPairs(x){
  var count = 0;

  for(var i= 0 ; i < x; i++) {
    if(isPair(rollDie(), rollDie())) {
      count++;

var z;

for(var i=0; i <10; i++) {
  z = rollDie();
  console.log("roll:", z);
}

z = isPair(3,4); // this is using the hammer
console.log(z);
z = isPair(4,4);
console.log(z);


function countPairs(x){
  var count = 0;
  
 
z = countPairs(10000);
console.log(z);


