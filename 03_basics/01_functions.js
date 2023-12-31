/*
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

// addTwoNumbers(2, 6);

const result = addTwoNumbers(2, 5);

// if i print result, i get undefined because addTwoNumbers() is not returning anything, result variable is empty
console.log(result);
*/

function addTwoNumbers(num1, num2) {
    /*
    let result = num1 + num2;
    return result;
    console.log("Azhar"); // this line will not be executed, code after return keyword does not execute this is rule
    */
    // another way to return something
    return num1 + num2;
}

const result = addTwoNumbers(3, 6);
// console.log(result);

function loginUserMessage(username) {
    if (!username) {
        return "Enter valid value";
    } else {
        return `Hi ${username} 🙂, you just login`;
    }
}

// console.log(loginUserMessage(""));

// rest operator ...num1
// rest operator returns array

function calculateCartPrice(...price) {
    return price;
}

// console.log(calculateCartPrice(200, 500, 700, 900));

const user = {
    username: "azhar",
    price: 299,
};

function objectHandler(anyObject) {
    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

// objectHandler(user);
