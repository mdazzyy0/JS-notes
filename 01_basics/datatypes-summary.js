// Primitive
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const user = "azhar";

const digit = 10;
const score = 20.8;

const isLoggedIn = true;

let userEmail;

const outsideTemp = null;

const bigInt = 54646586868;

// Non-Primitive/Reference
// Array, Object, Function

const superHeros = ["iron man", "thor"];

const obj = {
  name: "azhar",
  age: 30,
};

const myFunction = function () {
  console.log("Hello World");
};

// -------------------Memory----------------------

// Stack (Primitive), Heap (Non-Primitive)

let website = "azhar.com";

let websiteOne = website;
websiteOne = "azhar.org";

// output is different because here stack memory is used
console.log(website);
console.log(websiteOne);

let userOne = {
  email: "user@google.com",
  upi: "user@okaxis",
};

let userTwo = userOne;

userTwo.email = "azhar@google.com";

// output is same because here heap memory is used
console.log(userOne.email);
console.log(userTwo.email);
