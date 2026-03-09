export function average(arr){ // Calculates the average 
    const avg = arr.reduce((avg, {amount})=> avg + (amount/arr.length), 0)
    return avg.toFixed(2);
}

export function active(arr){ // Counts the number of active members
        const active = arr.filter(({isActive}) => isActive === true);
        return active.length
} 
