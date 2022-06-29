# Javascript Quiz Game

## Summary
This coding assignment is meant to be a quiz, in which the participant would choose answers from multiple questions with a timed loop. With each incorrect answer, 10 seconds is taken off the clock. When all the questions are answered, the user can save a name via prompt and the scores are shown on the screen. If the user takes the quiz again, they can see their previous score. 

## Languages
* HTML
* CSS
* JavaScript

## Section of Code 
This portion of code was written to begin the question, and create an array with possible choices. As such, the array moves through and a list element is created, with the target function being the correct answer (Jimmy Page). If the target answer is not chosen, the player is docked 10 seconds.
~~~~
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
~~~~

## GIF
[Video](assets/Javascript-quiz.gif)

## Links
* [GitHub](https://github.com/dylankreisman/Javascript-Quiz-Game)
* [Application](https://dylankreisman.github.io/Javascript-Quiz-Game/)

