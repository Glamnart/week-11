const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// expected: { apple: 3, banana: 2, orange: 1 } 

// New method
const frequency = fruits.reduce((x,fruit) => 
    {
    x[fruit] = (x[fruit] || 0) + 1;
    return x;}, {});

    console.log(frequency);


const people = [
  { name: "Ava", role: "dev" },
  { name: "Ben", role: "designer" },
  { name: "Cara", role: "dev" },
  { name: "Dan", role: "manager" }
];
// expected:
// {
//   dev: ["Ava", "Cara"],
//   designer: ["Ben"],
//   manager: ["Dan"]
// }

let roles = people.reduce((roles,{name,role}) => {
    (roles[role] = roles[role] || []).push(name); 
    return roles;
}, {})

console.log(roles);


const products = [
  { id: "p1", name: "Mouse", price: 25 },
  { id: "p2", name: "Keyboard", price: 70 }, 
  { id: "p2", name: "Printer", price: 70 },
  { id: "p3", name: "Monitor", price: 220 }
];
// expected:
// {
//   p1: { id: "p1", name: "Mouse", price: 25 },
//   p2: { id: "p2", name: "Keyboard", price: 70 },
//   p3: { id: "p3", name: "Monitor", price: 220 }
// } 

let tags = products.reduce((tags, product)=>{
    tags[product.id] = product;
    return tags;
}, {})

console.log(tags)

const scores = [1,2,7];
// expected: 82

const avg = scores.reduce((avg, score) => avg + (score/scores.length),0);

console.log(avg);

const words = ["Reduce", "can", "build", "strings", "too"];
// expected: "Reduce can build strings too."

const sent = words.reduce((sent, word, i) => 
    {
        i === (words.length -1) ? sent += (word + ".") : sent += (word + " ") 
        return sent;
    }
, "");

console.log(sent);