import { readFile } from "node:fs/promises"; // Imports the readFile() function
import { active, average, count, top3} from "./utilities.js";

async function dashboard() {
    try{
        // Reads both files *in parallel*
        const [ordersRaw,usersRaw] = await Promise.all([
            readFile("data/orders.json", "utf-8"),
            readFile("data/users.json", "utf-8")
        ])

        // Turns them back into arrays 
        const orders = JSON.parse(ordersRaw);
        const users = JSON.parse(usersRaw);

        console.log("=== Async Data Dashboard ===")
        console.log(`Total users: ${users.length}`);
        console.log(`Active users: ${active(users)}`);
        console.log(`Total orders: ${orders.length}`);
        console.log(`Average order amount: ${average(orders)}`);

        console.log("\nOrders by status:");
        console.table(count(orders));

        console.log("\nTop 3 orders:");
        console.table(top3(orders));

  } catch (err) {
    console.error("Dashboard failed:", err.message);
  }
}

dashboard();

