// In JS, modules are just separate files with clear responsibilities, then wired together with import/export.
import { add, multiply, PI } from "./math.js";
import formatCurrency from "./format.js";

const total = add(30, 700);

const times = multiply(30, 800);

console.log(total);
console.log(times * PI);
console.log(formatCurrency(times));
/* Less Chaos
 DEbugguing easy
 Reusability
 Team Scaling 
 Changes can be made easily*/
