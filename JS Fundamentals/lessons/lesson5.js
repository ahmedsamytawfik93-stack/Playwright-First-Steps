// Logical operators

// AND (&&) operator
let a = true;
let b = false;
console.log(a && b); // false (all values have to be TRUE for expression to be True)

// OR (||) operator
console.log(a || b); // true (any value should be TRUE for expression to be True)

// NOT (!) operator
console.log(!a); // false (inverts the value)
console.log(!b); // true (inverts the value)

// Combining logical operators
let c = true;
console.log(a && b || c); // true (b is FALSE but c is TRUE, so overall expression is TRUE)
console.log(!(a && b) || c); // true (a && b is FALSE, NOT makes it TRUE, overall expression is TRUE)

// End of Logical operators lesson