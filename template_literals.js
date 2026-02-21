const firstName = "Ada";
const lastName = "Lovelace";

console.log("Hello " + firstName + " " + lastName);
console.log (`Hello ${firstName} ${lastName}`);

function greet(name = "Student") {
     return `Welcome, ${name}!`
}

console.log(greet("Favour"));