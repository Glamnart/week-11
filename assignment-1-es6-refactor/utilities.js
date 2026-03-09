export function average(arr) { // Calculates Average of scores
    return arr.reduce((avg, {score}) => avg += (score/arr.length), 0);   
}

export function bestStudent(arr) // Finds best student
{
    let student;
    const bestScore = arr.reduce((bestScore,{name,score}) => {
        bestScore = Math.max(bestScore,score) // For the bigger score
        bestScore == score ? student = name : null; // Saves the name of the bigger score temporarily till a bigger one comes along
        return bestScore;
    },0)
    return student;
}