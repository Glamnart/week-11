export function average(arr){ // Calculates the average 
    const avg = arr.reduce((avg, {amount})=> avg + (amount/arr.length), 0)
    return avg.toFixed(2);
}

export function active(arr){ // Counts the number of active members
        const active = arr.filter(({isActive}) => isActive === true);
        return active.length
} 

export function count(arr){ // Counts the number of people under each status
    const count = arr.reduce((count, {status})=>{
        count[status] = (count[status] || 0) + 1
        return count;
    },{})
     
    const tableFormat = Object.entries(count).map(([status, count]) => ({ status, count })); // puts in the form reqiuired by assignment

    return tableFormat;
}

export function top3(arr){ // takes the highest 3 orders
    const top3 = arr.sort((a,b) => b.amount - a.amount).slice(0,3);
    return top3;
}