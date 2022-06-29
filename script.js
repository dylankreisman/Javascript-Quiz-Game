//characters
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
var woodstock = "What year was the first Woodstock Festival?"
var timer = document.querySelector("#time");
var timeLeft = 60;
var questions 

//start click
startBtn.addEventListener("click", function() {
   var setTime = setInterval(function(){
       timer.textContent = timeLeft
       timeLeft--
   }, 1000)
  

   intro.style = "display: none;"
   
   //beginning first question
   questText.innerHTML = zepQues
   var zeppelin = ['Robert Plant ', 'Jimmy Page ', 'John Bonham ', 'Bono'];
   var zepNodes = zeppelin.map(lang => {
      var li = document.createElement('li');
       ansOne.appendChild(li)
      li.textContent = lang;
      li.addEventListener("click", function(e){
       console.log(e.target.textContent)
       if(e.target.textContent !== 'Jimmy Page '){
           timeLeft-=10
       }

       clearInterval(setTime)
// prompt and score
       var userName = prompt("Enter your name to match with your score!")
       localStorage.setItem(userName, timeLeft)
       highScoresDiv.style = "display: block; font-size: 20px;"
       for (let i = 0; i < localStorage.length; i++) {
       var li = document.createElement('li');
       highScores.appendChild(li)
       li.textContent = localStorage.key(i) + ': ' + localStorage.getItem(localStorage.key(i))
       }
      })
     

  
   });
  
  
  




});
