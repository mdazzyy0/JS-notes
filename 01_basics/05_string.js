const name = "azhar";
const repoCount = 10;

// console.log(name + repoCount + " some value"); // outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("azhar");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 2);
console.log(anotherString);

const newStringOne = "  azhar   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://azhar.com/mohammad%10azhar";
console.log(url.replace("%10", "-"));

console.log(url.includes("azhar"));
