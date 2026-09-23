
let userName = "Waleed";
const age = 22;

console.log("Name:", userName);
console.log("Age:", age);



let name = "Waleed";       // String
let userAge = 22;          // Number
let isDeveloper = true;    // Boolean
let value = null;          // Null
let city;                  // Undefined

console.log(typeof name);
console.log(typeof userAge);
console.log(typeof isDeveloper);
console.log(typeof city);


let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division

console.log(a > b);
console.log(a === b);



let marks = 75;

if (marks >= 50) {
    console.log("You passed");
} else {
    console.log("You failed");
}


function addNumbers(x, y) {
    return x + y;
}

let result = addNumbers(10, 20);

console.log("Result:", result);


const multiply = (x, y) => {
    return x * y;
};

console.log("Multiplication:", multiply(5, 4));


// Short arrow function

const square = number => number * number;

console.log("Square:", square(5));


const developerName = "Waleed";
const developerAge = 22;

const message = `My name is ${developerName} and I am ${developerAge} years old.`;

console.log(message);



const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);

console.log("Number of fruits:", fruits.length);


// Add item

fruits.push("Orange");

console.log(fruits);


// Remove last item

fruits.pop();

console.log(fruits);


const user = {
    name: "Waleed",
    age: 22,
    profession: "Web Developer"
};

console.log(user);

console.log(user.name);
console.log(user.age);
console.log(user.profession);



const { name: personName, age: personAge } = user;

console.log(personName);
console.log(personAge);



const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);



const numbers1 = [1, 2, 3];

const numbers2 = [...numbers1, 4, 5];

console.log(numbers2);


// Object spread

const updatedUser = {
    ...user,
    age: 23
};

console.log(updatedUser);



function calculateTotal(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(calculateTotal(10, 20, 30));



for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}



const languages = ["HTML", "CSS", "JavaScript"];

for (let language of languages) {
    console.log(language);
}


const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log("Doubled:", doubledNumbers);



const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even:", evenNumbers);


const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log("Total:", total);


const users = [
    {
        name: "Ali",
        age: 17
    },
    {
        name: "Ahmed",
        age: 25
    },
    {
        name: "Waleed",
        age: 22
    }
];

console.log(users);


// Get names

const userNames = users.map(user => user.name);

console.log("Names:", userNames);


// Get adults

const adults = users.filter(user => user.age >= 18);

console.log("Adults:", adults);



function greetUser(user) {

    return `Hello ${user.name}, welcome to JavaScript!`;

}

console.log(greetUser(user));



const button = document.getElementById("btn");
const output = document.getElementById("output");



button.addEventListener("click", () => {

    output.textContent = "Button clicked successfully!";

});


const loggedIn = true;

if (loggedIn) {

    console.log("Welcome to your dashboard");

} else {

    console.log("Please login");

}


const username = null;

const displayName = username ?? "Guest";

console.log(displayName);



const myPromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data loaded successfully");
    } else {
        reject("Something went wrong");
    }

});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });



getData();
async function getData() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log("API Data:", data);

    } catch (error) {

        console.log("Error:", error);

    }

}

getData();