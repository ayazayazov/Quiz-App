const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const answerBtns = document.getElementById('answerButtons')
const nextBtn = document.getElementById('nextBtn')
const btn = document.querySelector('btn');
const questions = [
    {
      title: "Question 1",
      trueAnswer: "answer1",
      variants: ["answer1", "answer2", "answer3", "answer4"],
    },
    {
      title: "Question 2",
      trueAnswer: "answer2",
      variants: ["answer1", "answer2", "answer3", "answer4"],
    },
    {
      title: "Question 3",
      trueAnswer: "answer1",
      variants: ["answer1", "answer2", "answer3", "answer4"],
    },
    {
      title: "Question 4",
      trueAnswer: "answer3",
      variants: ["answer1", "answer2", "answer3", "answer4"],
    },
    {
      title: "Question 5",
      trueAnswer: "answer2",
      variants: ["answer1", "answer2", "answer3", "answer4"],
    },
    {
      title: "Question 6",
      trueAnswer: "answer3",
      variants: ["answer1", "answer2", "answer3", "answer4"],
    },
    {
      title: "Question 7",
      trueAnswer: "answer2",
      variants: ["answer1", "answer2", "answer3", "answer4"],
    },
];

class QuizGame {
    point = 0;
    qIndex = -1;
    qData = [];
    currentQuestion = null;

    constructor(data){
        this.qData = data;
    }

    returnQuestion(){
        if(this.qIndex === this.qData.length - 1){
            console.log('oyun bitdi');
            return 0;
        }
        else{
            this.qIndex++;
            const questionItem = this.qData[this.qIndex];
            this.currentQuestion = questionItem;
            // this.currentQuestion = this.qData[this.qIndex];
            // return this.qData[this.qIndex];
        }
    }
}

const game = new QuizGame(questions);
// const questionItem = game.returnQuestion();

function startGame(){
    game.returnQuestion();
    question.innerHTML = game.currentQuestion.title;
    answerBtns.innerHTML = game.currentQuestion.variants.map((item) => `<button class="btn" id="${item}" onclick="clickBtn('${item}')">${item}</button>`).join('');
    nextBtn.style.display = 'none';
}

startGame();

function clickBtn(userChoice){
    nextBtn.style.display = 'block';
    if(userChoice == game.currentQuestion.trueAnswer){
        game.point++;
        console.log('duzgun cavab');
        document.getElementById(`${game.currentQuestion.trueAnswer}`).style.backgroundColor = '#9aeabc';
    }
    else{
        console.log('yanlis cavab');
        document.getElementById(`${userChoice}`).style.backgroundColor = 'red';
    }
    btn.disabled = true;
}

nextBtn.addEventListener('click', ()=>{
    startGame();
})