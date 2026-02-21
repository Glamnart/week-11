/**
 * Exercise 2 — Valid Parentheses (stack)
 *
 * Problem:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * A string is valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 *
 * Run:
 *   node exercises/ex2-valid-parentheses.js
 */

 function isValidParentheses(input) {

  // TODO:
  // 1) Create an empty stack array
  let opening = []
  let worked
  // 2) Create a map of closing->opening brackets: { ')':'(', ']':'[', '}':'{' }
  const brackets = [
    {')':'('},
    {']':'['},
    {'}':'{'}
  ]
  // 3) Iterate through characters:
  input.split('').forEach(x => {
    //    - if it's an opening bracket, push to stack
      if (brackets.find(open => open[")"] === x || open["]"] === x || open["}"] === x ))
        opening.push(x)
       //    - if it's a closing bracket:
       else
      {
        //        - pop last opening
        last = opening.pop();
        //        - if it doesn't match, return false 
        if (brackets.find(open=> open[x]=== last)) 
        last = ""
        else
          worked = true;
      }
    })
    if(worked)
    return false;
    // 4) At the end, string is valid if stack is empty
    else if(opening.length === 0)
      return true;
    else 
      return false;
}

const tests = [
  { input: "()", expected: true },
  { input: "()[]{}", expected: true },
  { input: "(]", expected: false },
  { input: "([)]", expected: false },
  { input: "{[]}", expected: true },
  { input: "(((", expected: false }
];

console.log("\n=== Valid Parentheses Tests ===");
for (const { input, expected } of tests) {
  const result = isValidParentheses(input);
  console.log(`${input.padEnd(8)} => ${String(result).padEnd(5)} (expected ${expected})`);
}
