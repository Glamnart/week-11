# Students' Scores Analyzer

## Project Description

This program analyzes a list of students and their scores and provides useful insights about the class. It outputs:

* Students who passed
* The best student
* The class average
* A leaderboard ranking students by score

The project demonstrates the difference between **legacy JavaScript code** and **modern ES6+ code** by implementing both versions.

---

## How to Run the Code

Make sure **Node.js** is installed on your system.

Run one of the following commands inside the project folder:

Run the legacy version:

```
node legacy.js
```

Run the modern ES6 version:

```
node modern.js
```

---

## Project Structure

The project files are located in the folder:

```
assignment-1-es6-refactor
```

Inside the folder:

```
legacy.js
modern.js
students.js
utilities.js
leaderBoard.js
package.json
README.md
```

### File Descriptions

* **legacy.js** – Contains the legacy-style implementation using older JavaScript syntax.
* **modern.js** – Refactored version using ES6+ features.
* **students.js** – Stores the student data.
* **utilities.js** – Contains helper functions for analyzing scores.
* **leaderBoard.js** – Generates the leaderboard ranking students by score.
* **package.json** – Node configuration file.
* **README.md** – Project documentation.

---

## ES6 Features Used

The modern implementation makes use of the following ES6+ features:

* `let` and `const`
* Object destructuring
* Template literals
* Array methods:

  * `map`
  * `filter`
  * `reduce`
  * `find`
* JavaScript modules (`import` / `export`)

These features help make the code more **readable, modular, and concise**.

---

## What I Learned

Through this assignment I learned how to:

* Refactor older JavaScript code into modern ES6 syntax
* Use array methods like `map`, `filter`, `reduce`, and `find` to process data
* Structure code using **modules** with `import` and `export`
* Use **destructuring and template literals** to write cleaner code

---

## Challenges

One of the main challenges was figuring out how to **create a leaderboard without using `sort()`**.

This required thinking through how to compare scores and arrange students manually. Implementing the leaderboard logic in both the **legacy version** and the **modern ES6 version** was the most difficult part of the assignment.

---

## Summary

This project shows how modern JavaScript features can significantly improve the **clarity, structure, and maintainability** of code compared to older JavaScript styles.
