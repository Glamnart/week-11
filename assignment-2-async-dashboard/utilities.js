export function average(arr){ // Calculates the average 
    const avg = arr.reduce((avg, {amount})=> avg + (amount/arr.length), 0)
    return avg.toFixed(2);
}

export function active(arr){
        const active = arr.reduce((active, {isActive})=>{
            active[isActive] = (active[isActive] || 0) + 1;
            return active;
        },{})
        
        return active.true 
} 