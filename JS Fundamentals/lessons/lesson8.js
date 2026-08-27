// Functions

// Declarative Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression
const farewell = function(name) {
    return `Goodbye, ${name}!`;
}
console.log(farewell("Bob")); // Output: Goodbye, Bob!

// Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// Arrow Function with Block Body
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(4, 6)); // Output: 24

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!

// Function with Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(3)); // Output: 9
console.log(power(2, 3)); // Output: 8

// Function with Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// Function with Callback
function processUserInput(callback) {
    const name = "Charlie";
    console.log(callback(name));
}
processUserInput(greet); // Output: Hello, Charlie!

// Recursive Function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Higher-Order Function
function mapArray(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
}
const numbers = [1, 2, 3, 4];
const squaredNumbers = mapArray(numbers, x => x * x);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

// Function Returning a Function
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = makeMultiplier(2);
console.log(double(5)); // Output: 10
const triple = makeMultiplier(3);
console.log(triple(5)); // Output: 15

// Function with Closure
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const myCounter = counter();
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3

// Function with Named Parameters (using object destructuring)
function createUser({name, age, email}) {
    return `Name: ${name}, Age: ${age}, Email: ${email}`;
}
console.log(createUser({name: "Dave", age: 30, email: "dave@example.com"})); // Output: Name: Dave, Age: 30, Email: dave@example.com

// Async Function
async function fetchData() {
    return "Data fetched!";
}
fetchData().then(data => console.log(data)); // Output: Data fetched!

// Generator Function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // Output: 1, 2, 3

// Function with Error Handling
function safeDivide(a, b) {
    try {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    } catch (error) {
        return error.message;
    }
}
console.log(safeDivide(10, 2)); // Output: 5
console.log(safeDivide(10, 0)); // Output: Division by zero

// Function with Memoization
function memoizedFibonacci() {
    const cache = {};
    function fib(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return n;
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }
    return fib;
}
const fibonacci = memoizedFibonacci();
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(50)); // Output: 12586269025

// Function with Currying
function curriedAdd(a) {
    return function(b) {
        return a + b;
    }
}
const addFive = curriedAdd(5);
console.log(addFive(10)); // Output: 15
console.log(curriedAdd(3)(7)); // Output: 10

// Function with Type Checking
function safeAdd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Both arguments must be numbers");
    }
    return a + b;
}
console.log(safeAdd(4, 5)); // Output: 9
console.log(safeAdd(4, "5")); // Throws TypeError: Both arguments must be numbers

// Function with Side Effects
let globalCounter = 0;
function incrementGlobalCounter() {
    globalCounter++;
}
incrementGlobalCounter();
incrementGlobalCounter();
console.log(globalCounter); // Output: 2

// Function with Documentation Comment
/**
 * Calculates the area of a rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @return {number} The area of the rectangle.
 */
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10)); // Output: 50

// End of Functions Lesson