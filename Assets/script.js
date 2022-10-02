var timeLeft=10;
var dataArray={question:"We can use ......... to insert an item in the beginning of an array",
     options:[".append()",".push()",".unShift()",".pop()"],
     answer:"o1"
};
document.getElementById("questions").textContent=dataArray.question;
document.getElementById("option1").textContent=dataArray.options[0];
document.getElementById("option2").textContent=dataArray.options[1];
document.getElementById("option3").textContent=dataArray.options[2];
document.getElementById("option4").textContent=dataArray.options[3];
document.getElementById("timeLeft").textContent="Time left: "+timeLeft;