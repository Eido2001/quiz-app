const question = document.querySelector('#question');
const nextBtn = document.querySelector('#next');
const backBtn = document.querySelector('#back');
const doneBtn = document.querySelector('#home');
const answerText = document.querySelector('.answer-input');
const questionNumber = document.querySelector('.questions-number');
var answer = ' ';



/*TIme Counter*/
const countDownEl = document.querySelector('.time-counter');
const startingMinutes = 5;
let time = startingMinutes *60;

function updateCountDown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countDownEl.innerHTML ='Time : ' + minutes + ':' + seconds ;
    time = time -1;

    if(time < 0)
    {
    doneQuestions();
    }
}

var timer = setInterval(updateCountDown , 1000);

function stopTimer(){
    clearInterval(timer);

}

/*time COunter*/


var questions = [
    {
       question :" 2 <br> 5 <br> -5 <br> 4 <br>",
       answer: '6',
    },

    {
      question : " 1 <br> 2 <br> -3 <br> 4 <br>",
      answer: '4',
    },

    {
      question : " 2 <br> 3 <br> -2 <br> 5 <br>",
      answer: '8',
    },
    {
       question :" 6 <br> 4 <br> -7 <br> 1 <br>",
       answer: "4",
    },

    {
      question : " 4 <br> 2 <br> -1 <br> 4 <br>",
      answer: "9",
    },

    {
      question : " 5 <br> 1 <br> -2 <br> 9 <br>",
      answer: '13',
    },
]


const max_score = 3;
const max_questions =3;
let questionCounter = 0;
let avaliableQuestions = [];
let score = 0;
let scoreTextValue= answerText.value;



function startGame(){
    questionCounter = 0;
    score = 0;
    avaliableQuestions = [...questions];

    if(questionCounter == 0){
        backBtn.classList.add('disabled-btn');
    }
    getNewQuestion();    
    
}


var correctAnswer = ' ';
var questionSelect = ' ';
var questionsIndex = 0;
function getNewQuestion(){

    questionsIndex = Math.floor(Math.random() * questions.length);
    questionSelect = questions[questionsIndex].question;
    checkAnswer();
    question.innerHTML = questionSelect;
    questions.splice(questionsIndex, [questionsIndex]);
    questionCounter++;
    questionNumber.innerText = 'Question ' + questionCounter + ' From ' + max_questions;  
    
    
    backBtn.classList.remove('disabled-btn');
    
}

function checkAnswer(){
    correctAnswer = questions[questionsIndex].answer;
}

function addScore(){
    score++;

    console.log('score is: ' + score);
}
function doneQuestions(){
    
        question.innerHTML = 'You Got ' + score +' from ' + max_questions + ' questions.';
        doneBtn.classList.remove('disapear');
        nextBtn.classList.add('disapear');
        answerText.style.display = 'none';
        backBtn.style.display='none';
        /*stop Time*/
        stopTimer();        
        /*page of Result*/
        
}

answerText.addEventListener('click' , function(){
    
    console.log(correctAnswer);
})

nextBtn.addEventListener('click' , function(){
    if(answerText.value == correctAnswer)
    {
        score += 1;
        console.log('score is '  + score);
        
    }
    else{
        console.log('wrong Answer');
        
    }

    if(questionCounter == max_questions ){
        doneQuestions();
        return;
    }

    
    answerText.value = "";
    getNewQuestion();
})




backBtn.addEventListener('click' , function(){
    questionCounter--;
    score--;
    question.innerHTML = questions[questionCounter].question;
    if(questionCounter == 0){
        backBtn.classList.add('disabled-btn');
    }

})

document.addEventListener('DOMContentLoaded' , startGame());





