export function average(arr){ // Calculates the average 
    const avg = arr.reduce((avg, {amount})=> avg + (amount/arr.length), 0)
    return avg.toFixed(2);
}