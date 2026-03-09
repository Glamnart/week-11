import { readFile } from "node:fs/promises";

async function dashboard() {
    try{
        const [orders,users] = await Promise.all([
            readFile("data/orders.json", "utf-8"),
            readFile("data/users.json", "utf-8")
        ])
    }
    catch (error)
    {
        console.log(error)
    }  
}

dashboard();

