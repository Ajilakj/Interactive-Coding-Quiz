var timeLeft=2;
var index=0;
var correct=0;
var wrong=0;
var dataArray={question:["The typeof operator in JavaScript returns ........ for arrays","Which operator is used to check both the value and type","How to insert the javascript file script.js in html file?",
                         "We can use ......... to insert an item in the beginning of an array",
                         "What method we can use to place an item before a particular element"],
     options:[["array","object","undefined","string"],["==","!=","===","<>"],["<script src='script.js'>","<script href='script.js'>","<link src='script.js'>","<link href='script.js'>"],[".append()",".push()",".unShift()",".pop()"],[".append()",".appendChild()",".preppend()",".preppendChild()"]],
     answer:["object","===","<script src='script.js'>",".unShift()",".preppend()"]
};
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var start=document.getElementById("start");
var submitBtn=document.getElementById("submit");
var previousScore=localStorage.getItem("score");

document.getElementById("questions").classList.add("sectionHide");
document.getElementById("options").classList.add("sectionHide");
document.getElementById("finalScore").classList.add("sectionHide");
// document.getElementById("initials").classList.add("sectionHide");
// document.getElementById("submit").classList.add("sectionHide");



document.getElementById("previousScore").textContent="Previous score: "+previousScore;
submitBtn.addEventListener("click", function() {
     var initial=document.getElementById("initial").value;
     localStorage.setItem("initials", initial);
     localStorage.setItem("score", (correct*5));
   });

function displayResult(){
     // document.getElementById("questions").classList.add("sectionHide");
     // document.getElementById("options").classList.add("sectionHide");
     //alert("correct:"+correct);
     document.getElementById("finalScore").classList.add("sectionVisible");
     document.getElementById("score").textContent="Final Score: You attended "+index+" questions. "+correct+" correct answers. Your score is "+correct*5 +" Enter your initials then press submit to keep your information";
}


function displayQuestion(){
     if(index<dataArray.answer.length && timeLeft>0){
          document.getElementById("questions").textContent=dataArray.question[index];
          var currentQuestionOptions=dataArray.options[index];
          //alert(currentQuestionOptions);
          // for(var j=0;j<2;j++){
          //      var currentOption=("opt"+(j+1));
          //      alert(currentOption);
          //      alert(currentQuestionOptions[j]);
          //      currentOption.textContent=currentQuestionOptions[j];
          //      alert(currentOption.textContent);
          // }
          opt1.textContent=currentQuestionOptions[0];
          opt2.textContent=currentQuestionOptions[1];
          opt3.textContent=currentQuestionOptions[2];
          opt4.textContent=currentQuestionOptions[3];
     }
     else{
          displayResult();
     }
}

//function to manage time left
function timeDecrement(){
     document.getElementById("timeLeft").textContent="Time left: "+timeLeft;
}

//to check the answer against user selection
function checkAnswer(fromUser){
     if(fromUser===dataArray.answer[index]){
          correct++;
          document.getElementById("result").textContent="Correct";
     }
     else{
          if(timeLeft>0){
               timeLeft--;
          }
          wrong++;
          document.getElementById("result").textContent="Wrong";
          timeDecrement();
     }
     index++;
     displayQuestion();
}
opt1.addEventListener("click", function() {
     checkAnswer(opt1.textContent);
});
opt2.addEventListener("click", function() {
     checkAnswer(opt2.textContent);
});
opt3.addEventListener("click", function() {
     checkAnswer(opt3.textContent);
});
opt4.addEventListener("click", function() {
     checkAnswer(opt4.textContent);
});

startBtn.addEventListener("click", function() {
     document.getElementById("startBtn").classList.add("sectionHide");
     document.getElementById("questions").classList.add("sectionVisible");
     document.getElementById("options").classList.add("sectionVisible");
     
     timeDecrement();
     displayQuestion();
});