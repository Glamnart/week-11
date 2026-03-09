export function average(arr) { // Calculates Average of scores
    return arr.reduce((avg, {score}) => avg += (score/arr.length), 0);   
}

