var startBtn = document.querySelector("#start-btn");
console.log(startBtn)
var quesContainer = document.querySelector(".container");
var zepQues = "Who is the lead guitarist for Led Zeppelin?";
var questText = document.querySelector(".question");
var ansOne = document.querySelector('#answers');
var intro = document.querySelector('.card')
var highScores = document.querySelector("#score");
var highScoresDiv = document.querySelector('#highscores')
highScoresDiv.style = "display: none;"

startBtn.addEventListener("click", function() {
    var setTime = setInterval(function(){
        timer.textContent = timeLeft
        timeLeft--
    }, 1000)
   
    var timer = document.querySelector("#time");
    var timeLeft = 60;
    intro.style = "display: none;"
    questText.innerHTML = zepQues
