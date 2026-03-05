/**
 * Starter — Assignment 2: Async Data Dashboard (Node + fs/promises)
 *
 * Run:
 *   npm install
 *   npm run start
 */

import { readFile } from "node:fs/promises";

function average(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

function countBy(items, keyFn) {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
}

async function loadJson(path) {
  const raw = await readFile(path, "utf8");
  return JSON.parse(raw);
}

async function main() {
  try {
    // Load both datasets in parallel (faster than sequential for independent work)
    const [users, orders] = await Promise.all([
      loadJson(new URL("./data/users.json", import.meta.url)),
      loadJson(new URL("./data/orders.json", import.meta.url))
    ]);

    // Compute insights with array methods
    const activeUsers = users.filter((u) => u.isActive);
    const orderAmounts = orders.map((o) => o.amount);
    const avgOrder = average(orderAmounts);
    const ordersByStatus = countBy(orders, (o) => o.status);

    // Output report
    console.log("\n=== Async Data Dashboard ===");
    console.log(`Total users: ${users.length}`);
    console.log(`Active users: ${activeUsers.length}`);
    console.log(`Total orders: ${orders.length}`);
    console.log(`Average order amount: ${avgOrder.toFixed(2)}`);

    console.log("\nOrders by status:");
    console.table(
      Object.entries(ordersByStatus).map(([status, count]) => ({ status, count }))
    );

    // Extra: top 3 orders
    const top3 = [...orders].sort((a, b) => b.amount - a.amount).slice(0, 3);
    console.log("\nTop 3 orders:");
    console.table(top3);
  } catch (err) {
    console.error("Dashboard failed:", err.message);
    process.exitCode = 1;
  }
}

await main();

