import { total } from "./statistics.js"
export function dataFill (arr){
    let info = '<table><thead><tr><th></th><th colspan="4">Subjects</th></tr><tr><th>Name</th><th>Mathematics</th><th>English</th><th>Basic Science</th><th>Art &amp; Crafts</th></tr></thead><tbody>'

    arr.forEach(x => {
        info += `<tr><td>${x.name}</td><td>${x.subject.Maths}</td><td>${x.subject.English}</td><td>${x.subject.Science}</td><td>${x.subject.Arts}</td></tr>`
    })

    info += "</tbody><tfooter>"

    let totals = total(arr);

    info += `<tr><th>Average</th><th>${totals.Maths/arr.length}</th><th>${totals.English/arr.length}</th><th>${totals.Science/arr.length}</th><th>${totals.Arts/arr.length}</th></tr>`

    info += "</tfooter></table>"
    return info;
}


 
