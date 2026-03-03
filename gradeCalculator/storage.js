import { dataFill } from "./table.js";
let students = []
document.addEventListener("submit", function ()
{
    let  score = localStorage.getItem("score");

    if (students.find(student => student.name === localStorage.getItem("name")))
    {
        let  person = students.find(student => student.name === localStorage.getItem("name"));
        
        switch(localStorage.getItem("subject"))
        {
            case "Maths":
                person.subject.Maths = score;
                break;
            case "English":
                person.subject.English = score;
                break;
            case "Basic Science":
                person.subject.Science = score;
                break;
            default:
                person.subject.Arts = score;
        }
    }
    else 
    {
        students.push({
            name : localStorage.getItem("name"),
            subject : 
            {
                Maths:"" ,
                English:"",
                Science: "",
                Arts: ""
            }
        })

        switch(localStorage.getItem("subject"))
        {
            case "Maths":
                students.at(-1).subject.Maths = score;
                break;
            case "English":
                students.at(-1).subject.English = score;
                break;
            case "Basic Science":
                students.at(-1).subject.Science = score;
                break;
            default:
                students.at(-1).subject.Arts = score;
        }
    }
    localStorage.clear;

    document.getElementById("resultTable").innerHTML = dataFill(students); 

   
})