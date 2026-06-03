// AI Tutor
function askAI(){
  let question=document.getElementById("q").value;
  let answer="I am still learning.";
  if(question.toLowerCase().includes("html")) answer="HTML is the structure of a website.";
  if(question.toLowerCase().includes("css")) answer="CSS styles websites.";
  if(question.toLowerCase().includes("javascript")) answer="JavaScript adds interactivity.";
  document.getElementById("answer").innerText=answer;
}

// Quiz checker
function checkAnswer(){
  let correct = document.querySelector('input[name="q1"]:checked');
  if(!correct){
    alert("Select an answer");
    return;
  }
  alert(correct.value==="correct" ? "Correct 🎉" : "Wrong ❌");
}