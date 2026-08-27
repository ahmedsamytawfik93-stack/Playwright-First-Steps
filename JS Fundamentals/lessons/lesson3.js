// Objects and Arrays

// Object
var customer = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    cars: ["Toyota", "Honda", "Ford"]
};

// Dot notation
customer.firstName = "Mike";

// Bracket notation
customer["lastName"] = "Smith";

console.log(`Customer Name: ${customer.firstName} ${customer.lastName}`);
console.log(`First car: ${customer.cars[0]}`);

// Array
var cars = ["Toyota", "Honda", "Ford"];

// Accessing array elements
console.log(`First car: ${cars[0]}`);

// Modifying array elements
cars[1] = "Chevrolet";
console.log(`Modified second car: ${cars[1]}`);

// Adding new elements
cars.push("BMW");
console.log(`Added new car: ${cars[cars.length - 1]}`);

// Removing elements
cars.pop();
console.log(`Cars after removal: ${cars.join(", ")}`);

// Looping through an array
console.log("All cars:");
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Using forEach method
console.log("All cars using forEach:");
cars.forEach(function(car) {
    console.log(car);
});

// Nested Objects and Arrays
var store = {
    name: "AutoShop",
    location: "123 Main St",
    inventory: [
        { make: "Toyota", model: "Camry", year: 2020 },
        { make: "Honda", model: "Civic", year: 2019 },
        { make: "Ford", model: "Mustang", year: 2021 }
    ]
};
console.log(`Store Name: ${store.name}`);
console.log("Inventory:");
store.inventory.forEach(function(car) {
    console.log(`${car.year} ${car.make} ${car.model}`);
});

// Summary
// Objects are collections of key-value pairs, while arrays are ordered lists of values.
// Both can be nested within each other to create complex data structures.

// Practice Exercises
// 1. Create an object representing a book with properties like title, author, and pages.
// 2. Create an array of objects representing multiple books.
// 3. Write a function to display the titles of all books in the array.
// 4. Modify the author of a specific book in the array.

// Exercise 1
var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
};
console.log(`Book Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`);

// Exercise 2
var library = [
    { title: "1984", author: "George Orwell", pages: 328 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 214 }
];
console.log("Library Books:");
library.forEach(function(book) {
    console.log(`${book.title} by ${book.author}, Pages: ${book.pages}`);
});

// Exercise 3
function displayBookTitles(books) {
    books.forEach(function(book) {
        console.log(book.title);
    });
}
displayBookTitles(library);

// Exercise 4
library[1].author = "Harper Lee (Updated)";
console.log(`Updated Author of second book: ${library[1].author}`);

// End of Objects and Arrays lesson