// Conditional staement

// if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// if...else if...else statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount:", discount);

// Nested conditional statements
let temperature = 30;
if (temperature > 30) {
    console.log("It's a hot day.");
}   else {
    if (temperature >= 20) {
        console.log("It's a warm day.");
    } else {
        console.log("It's a cold day.");
    }
}

// Logical operators in conditions
let hasID = true;
let hasTicket = false;
if (hasID && hasTicket) {
    console.log("You can enter the event.");
} else {
    console.log("You cannot enter the event.");
}
if (hasID || hasTicket) {
    console.log("You have at least one requirement.");
} else {
    console.log("You have neither requirement.");
}

// Nested switch statement
let fruit = "apple";
let color = "red";
switch (fruit) {
    case "apple":
        switch (color) {
            case "red":
                console.log("Red apple");
                break;
            case "green":
                console.log("Green apple");
                break;
            default:
                console.log("Unknown color apple");
        }
        break;
    case "banana":
        console.log("Banana");
        break;
    default:
        console.log("Unknown fruit");
}

// Using break and continue in loops with conditions
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping number 5");
        continue;
    }
    if (i === 8) {
        console.log("Stopping at number 8");
        break;
    }
    console.log(i);
}

// Example of using conditional statements in functions
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(7)); // Output: Odd
console.log(checkEvenOdd(10)); // Output: Even

// Example of nested ternary operator
let marks = 75;
let result = (marks >= 90) ? "A" :
                (marks >= 80) ? "B" :
                (marks >= 70) ? "C" : "F";
console.log("Result:", result);

// Example of using conditional statements with arrays
let numbers = [10, 15, 20, 25, 30];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log("Even Numbers:", evenNumbers);

// Example of using conditional statements with objects
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
if (person.age >= 18) {
    console.log(person.name + " is an adult.");
}
if (person.city === "New York") {
    console.log(person.name + " lives in New York.");
}

// End of Conditional staement lesson