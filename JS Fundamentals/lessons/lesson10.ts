// TypeScript vs JavaScript

// In TypeScript, we can define types for our variables and objects to ensure type safety.
var customerFirstName: string = "John";
var customerLastName: string = "Doe";
var customerAge: number = 30;

// We can also define custom types using interfaces or type aliases.
type Customer = {
    firstName: string;
    lastName: string;
    age: number;
    active: boolean;
};

var firstCustomer: Customer = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    active: true
};

// End of TypeScript vs JavaScript lesson