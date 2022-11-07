const data = [
    {
        id : 1,
        question : "which of this is html tag",
        answers :[
            {answer : "paragraph" , value:false},
            {answer : "span" , value:true},
            {answer : "h7" , value:false},
            {answer : "background" , value:false}
        ]
    },
    {
        id : 2,
        question : "what is the normal display for div ",
        answers :[
            {answer : "none" , value:false},
            {answer : "inline-block" , value:false},
            {answer : "block" , value:true},
            {answer : "flex" , value:false}
        ]
    },
    {
        id : 3,
        question : "What does HTML stand for?",
        answers :[
            {answer : "Home Tool Markup" , value:false},
            {answer : "Hyperlink and Text Markup Language" , value:false},
            {answer : "Hyper Text Markup Language" , value:true},
            {answer : "none of that" , value:false}
        ]
    },
    {
        id : 4,
        question : "which of this is html tag",
        answers :[
            {answer : "alt" , value:true},
            {answer : "title" , value:false},
            {answer : "src" , value:false},
            {answer : "longdesc" , value:false}
        ]
    },
    {
        id : 5,
        question : "The HTML <canvas> element is used to:",
        answers :[
            {answer : "create draggable elements" , value:false},
            {answer : "display database records" , value:false},
            {answer : "manipulate data in MySQL" , value:false},
            {answer : "draw graphics" , value:true}
        ]
    },
]

let game = document.querySelector('.game');
let question = document.querySelector('.question');
let answerContainer = document.querySelector('.answers');
let submit = document.querySelector('.submit');

let result = document.querySelector('.result');


let questionIndex =0;
let CorrectAnswer = 0;
let wrongAnswer = 0;
let Total = data.length;
let selectedAnswer;

const ShowResultPage = ()=>{
    game.style.display="none";
    result.style.display = "block";
    document.querySelector('.correct').textContent=`correct answer : ${CorrectAnswer}`
    document.querySelector('.wrong').textContent = `wrong answer :${wrongAnswer}`
    document.querySelector('.score').textContent = `score :${CorrectAnswer}/${Total}`
}

const ShowQuestion = (qNumber)=>{
    selectedAnswer=null
    if (qNumber == data.length ) return  ShowResultPage()
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers.map((item , index)=>{
    return (   `
        <div class="answer">
        <input type="radio" name="answer" id=${index} value=${item.value}>
        <label for=${index}>${item.answer}</label>
        </div>
        `)}
    ).join("");

    SelectedAnswer();

}

const SelectedAnswer = ()=>{
    let input = document.querySelectorAll("input")
    input.forEach((e)=> {
        e.addEventListener("click",(e)=>{
        selectedAnswer= e.target.value;
        console.log(selectedAnswer)
        })
    });
}

const SubmitFunction = ()=>{
    submit.addEventListener('click',()=>{
        if(selectedAnswer !== null ){
            selectedAnswer === "true" ? CorrectAnswer ++ : wrongAnswer ++ ;        
            questionIndex +=1;
            ShowQuestion(questionIndex)
             
            console.log(selectedAnswer);
            console.log("c",CorrectAnswer);
            console.log('w',wrongAnswer);
                
        }else{
            window.alert("you should select answer")
        }
    })
}

SubmitFunction()
ShowQuestion(questionIndex)


let play = document.querySelector('.play');
play.addEventListener("click" , ()=>{
    game.style.display="block";
    result.style.display= "none";
    questionIndex =0;
    CorrectAnswer = 0;
    wrongAnswer = 0;
    ShowQuestion(0)
})

