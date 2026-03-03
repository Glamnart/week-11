
document.addEventListener("submit", function (e){
    e.preventDefault(); // Stops the normal function of submit which is to add to the webpage name
    const formData = new FormData(document.getElementById("quizSettings")); // Gets all the form data and stores 
    const subjectName = formData.get("subjects"); // picks only the subject value to store
    const userName = formData.get("name"); // picks only the name value to store
    const studentScore = formData.get("score");
    localStorage.setItem("subject", subjectName); 
    localStorage.setItem("name", userName);
    localStorage.setItem("score", studentScore)
})


