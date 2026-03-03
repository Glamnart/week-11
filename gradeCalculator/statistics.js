export function total(arr){
    let totals = arr.reduce((totals, x) => {
        for (let key in x.subject) {
            totals[key] = (totals[key] || 0) + Number(x.subject[key]);
        }
        return totals;
    }, {});
    
    return totals;
}