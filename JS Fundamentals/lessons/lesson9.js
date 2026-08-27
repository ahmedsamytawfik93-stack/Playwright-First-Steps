// Class and Methods
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
// Example usage
const rect = new Rectangle(10, 5);
console.log("Area:", rect.area()); // Output: Area: 50
console.log("Perimeter:", rect.perimeter()); // Output: Perimeter: 30

// Inheritance
class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
}
// Example usage of inheritance
const square = new Square(7);
console.log("Square Area:", square.area()); // Output: Square Area: 49
console.log("Square Perimeter:", square.perimeter()); // Output: Square Perimeter: 28

// Static Methods
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}
// Example usage of static methods
console.log("Add:", MathUtils.add(5, 3)); // Output: Add: 8
console.log("Subtract:", MathUtils.subtract(5, 3)); // Output: Subtract: 2
console.log("Multiply:", MathUtils.multiply(5, 3)); // Output: Multiply: 15
console.log("Divide:", MathUtils.divide(5, 0)); // Throws Error: Division by zero is not allowed.
console.log("Divide:", MathUtils.divide(5, 2)); // Output: Divide: 2.5

// Getters and Setters
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value <= 0) {
            throw new Error("Radius must be positive.");
        }
        this._radius = value;
    }
}
// Example usage of getters and setters
const circle = new Circle(10);
console.log("Circle Radius:", circle.radius); // Output: Circle Radius: 10
circle.radius = 15;
console.log("Updated Circle Radius:", circle.radius); // Output: Updated Circle Radius: 15
try {
    circle.radius = -5; // Throws Error: Radius must be positive.
} catch (e) {
    console.error(e.message);
}

// Private Fields
class BankAccount {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    getBalance() {
        return this.#balance;
    }
}
// Example usage of private fields
const account = new BankAccount(1000);
account.deposit(500);
console.log("Account Balance:", account.getBalance()); // Output: Account Balance: 1500

// Attempting to access private field directly will result in an error
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// Method Chaining
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }
    add(num) {
        this.value += num;
        return this;
    }
    subtract(num) {
        this.value -= num;
        return this;
    }
    multiply(num) {
        this.value *= num;
        return this;
    }
    divide(num) {
        if (num === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        this.value /= num;
        return this;
    }
    getResult() {
        return this.value;
    }
}
// Example usage of method chaining
const calc = new Calculator();
const result = calc.add(10).subtract(2).multiply(3).divide(4).getResult();
console.log("Chained Calculation Result:", result); // Output: Chained Calculation Result: 6

// Exporting classes for use in other modules
export { Rectangle, Square, MathUtils, Circle, BankAccount, Calculator };

// End of Class and Methods lesson