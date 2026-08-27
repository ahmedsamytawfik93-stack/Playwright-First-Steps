// Loops

// for loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

// while loop
let j = 0;
while (j < 5) {
    console.log("While loop iteration:", j);
    j++;
}

// do...while loop
let k = 0;
do {
    console.log("Do...while loop iteration:", k);
    k++;
} while (k < 5);

// for each with index
numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});

// for...in loop (iterating over object properties)
const person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// for...of loop (iterating over iterable objects)
const array = [10, 20, 30, 40, 50];
for (let value of array) {
    console.log("For...of loop value:", value);
}

// Nested loops
for (let m = 1; m <= 3; m++) {
    for (let n = 1; n <= 2; n++) {
        console.log(`Nested loop - m: ${m}, n: ${n}`);
    }
}   
// Using break and continue
for (let p = 0; p < 10; p++) {
    if (p === 5) {
        console.log("Breaking the loop at p =", p);
        break; // Exit the loop when p is 5
    }
    if (p % 2 === 0) {
        console.log("Continuing at even p =", p);
        continue; // Skip even numbers
    }
    console.log("Current p value:", p);
}

// Labelled statements with loops
outerLoop: for (let x = 1; x <= 3; x++) {
    innerLoop: for (let y = 1; y <= 3; y++) {
        if (x === 2 && y === 2) {
            console.log("Breaking out of outer loop at x =", x, "and y =", y);
            break outerLoop; // Breaks out of the outer loop
        }
        console.log(`x: ${x}, y: ${y}`);
    }
}

// Looping through a string
const str = "Hello";
for (let char of str) {
    console.log("Character in string:", char);
}

// Using Array methods as an alternative to loops
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    console.log("Array forEach value:", num);
});
const doubled = numbers.map(num => num * 2);
console.log("Doubled array using map:", doubled);
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers using filter:", evenNumbers);

// Summing numbers using reduce
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of numbers using reduce:", sum);

// End of Loops lesson