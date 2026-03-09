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

        
  } catch (err) {
    console.error("Dashboard failed:", err.message);
  }
}

dashboard();

