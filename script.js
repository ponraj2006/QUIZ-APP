const questions=[
    {
        question :" Which planet is known as the Red Planet?",
        answer: [
        {text:"Venus",correct:false},
        {text:"Mars",correct:true},
        {text: "Jupiter",correct:false},
        {text:"Saturn",correct:false},
     ]

    },
    {
        question :"What is the largest mammal in the world?",
        answer: [
       
        {text:"Elephant",correct:false},
        {text:"Blue Whale",correct:true},
        {text:"Giraffe",correct:false},
        {text:" Hippopotamus",correct:false},
     ]

    },
    {
        question :"Which is the largest organ in the human body?",
        answer: [

        {text:"Skin",correct:true},
        {text:"Liver",correct:false},
        {text:"Heart",correct:false},
        {text:"Brain",correct:false},
     ]

    },
    {
        question :"What is the smallest unit of life?",
        answer: [
        {text:"Cell",correct:true},
        {text:"Atom",correct:false},
        {text:"Molecule",correct:false}, 
        {text:"Tissue",correct:false},
     ]

    },
    {
        question :"In which continent is the Amazon Rainforest located?",
        answer: [
       
        {text:"Africa",correct:false},
        {text:"South America",correct:true},
        {text:"Asia",correct:false},
        {text:"Australia",correct:false},
     ]

    },
    {
        question :" Which gas is most abundant in Earth's atmosphere?",
        answer: [
            
       {text:" Nitrogen",correct:true},
        {text:"Oxygen",correct:false},
        {text:" Carbon Dioxide",correct:false},
        {text:" Hydrogen",correct:false},
     ]

    },
    {
        question :"What is the hardest natural substance on Earth?",
        answer: [
       
        {text:"Gold",correct:false},
        {text:" Silver",correct:false},
        {text:"Diamond",correct:true},
        {text:"Iron",correct:false},
     ]

    },
    {
        question :"In which year did World War II end?",
        answer: [
       
        {text:"1944",correct:false},
        {text:"1941",correct:false},
        {text:"1947",correct:false},
        {text:"1945",correct:true},
     ]

    },
    {
        question :"Which language has the most native speakers worldwide?",
        answer: [
       
        {text:"English",correct:false},
        {text:" Hindi",correct:false},
        {text:"Mandarin Chinese",correct:true},
        {text:"Spanish",correct:false},
     ]

    },
    {
        question :"Which is the longest river in the world?",
        answer: [

       {text:"Nile",correct:true},
        {text:"Amazon",correct:false},
        {text:"Yangtze",correct:false},
        {text:"Mississippi",correct:false},
     ]

    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo+ ". " + currentQuestion.
    question;
 currentQuestion.answer.forEach(answer =>{
    const button =document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
       button.dataset.correct = answer.correct; 
    }
    button.addEventListener("click",selectAnswer);

 });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>
        {
            if (button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        }
    );
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display ="block";

}

function handleNextButton(){
 currentQuestionIndex++;
 if(currentQuestionIndex < questions.length){
    showQuestion();
 }else{
    showScore();
 }
}

nextButton.addEventListener("click", ()=>{
 if(currentQuestionIndex < questions.length){
    handleNextButton();
 }else{
    startQuiz();
 }
});

startQuiz();