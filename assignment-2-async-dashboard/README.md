# Async Data Dashboard

## Project Description

This project is a Node.js script that loads two datasets asynchronously and generates a small data dashboard in the console.

The program reads **orders** and **users** data from local JSON files and calculates several insights using JavaScript array methods. The results are then printed in a clear dashboard-style report.

The dashboard displays:

* Total number of users
* Number of active users
* Total number of orders
* Average order amount
* Orders grouped by status
* Top 3 highest-value orders

---

## Project Structure

```
assignment-2-async-dashboard/
│
├── data/
│   ├── orders.json
│   └── users.json
│
├── index.js
├── utilities.js
├── package.json
├── package-lock.json
└── README.md
```

### File Descriptions

**index.js**
Main script that:

* Loads the datasets using `fs/promises`
* Uses `Promise.all` to read both files in parallel
* Processes the data
* Prints the dashboard report

**utilities.js**
Contains helper functions used to analyze the data:

* `average()` – calculates the average order amount
* `active()` – counts active users
* `count()` – groups orders by status
* `top3()` – returns the top three orders by amount

**data/**
Contains the JSON datasets used in the dashboard.

**package.json**
Configures Node to use ES modules.

---

## How to Run the Project

1. Open the project folder in your terminal.

2. Run the script using Node:

```
node index.js
```

The console will display the **Async Data Dashboard** with the calculated insights.

---

## Key Concepts Used

This project demonstrates the following JavaScript concepts:

* **Async/Await** for asynchronous programming
* **Promise.all()** to run multiple async operations in parallel
* **try/catch** for error handling
* **Node.js fs/promises** for reading files asynchronously
* **Array methods** such as:

  * `reduce`
  * `filter`
  * `map`
  * `slice`
  * `sort`
* **ES Modules** using `import` and `export`
* **console.table()** to display structured data in the console

---

## What I Learned

Through this assignment I learned how to:

* Load multiple datasets asynchronously using `Promise.all`
* Work with `async/await` to handle asynchronous operations more clearly
* Handle errors using `try/catch`
* Process data using array methods like `reduce`, `filter`, and `sort`
* Organize code by separating utility functions into a different module

---

## Challenges

One of the main challenges was understanding how to properly use **asynchronous file reading** with `fs/promises`.

Another challenge was ensuring the two JSON files were **loaded in parallel using `Promise.all`**, rather than sequentially.

Structuring the dashboard output in a **clear and readable format** using `console.table()` also required some experimentation.

---

## Example Output

```
=== Async Data Dashboard ===

Total users: 3
Active users: 2
Total orders: 4
Average order amount: 2000.00

Orders by status:
(status table)

Top 3 orders:
(order table)
```

This output provides a quick summary of the dataset and key insights.
