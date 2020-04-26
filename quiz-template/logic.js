var displaySeconds = document.querySelector("#seconds");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");
var questTitle = document.querySelector("#question-title");
var start = document.querySelector("#start");
var time = document.querySelector("#time");
var choiceList = document.querySelector("#choices");
//var answerButton = document.querySelector(".answer-button");

//total time 
var timeleft = 75;
// question array begins at 0
var questionCounter = 0;
//object array
var questionsA = [
    {
        title: "The MK3 supra was know for what engine inside of it?",
        choices: ["the 4age", "the 4g63", "the 1jz", "the ej25"],
        anwser: "the 1jz"
    },
    {
        title: "What car is known as godzilla?",
        choices: ["the supra MK3", "the nissan skyline", "the mitsubishi lancer", "the subaru impreza sti"],
        anwser: "the nissan skyline"
    },
    {
        title: "What car is a drift machine with an s-chassis?",
        choices: ["the nissan silvia", "the honda nsx", "the mitsubishi eclipse", "the suzuki swift"],
        anwser: "the nissan silvia"
    },
    {
        title: "Which was best known for it's easy maneuverability drifting because of it's 50/50 weight distribution?",
        choices: ["the toyota celica", "the datsun 240z", "the nissan 240sx", "the toyota trueno"],
        anwser: "the toyota trueno"
    }

]
// gets called once the start button is clicked 
function showNextQuestion() {
    
    choiceList.innerHTML = "";
    
    var nextQuestion = questionsA[questionCounter];
   var question = nextQuestion.title;
    var choices = nextQuestion.choices;

    // for (var i = 0; i < nextQuestion.choices.length; i++) 
    
        choices.forEach(function(choiceFromArray){
        //console.log(nextQuestion.choices[i]);
        var sectionButton = document.createElement("section");

        sectionButton.setAttribute("class", "btn");
        sectionButton.setAttribute("value", "choice");


        sectionButton.textContent = choiceFromArray;
        sectionButton.onclick = questAnswer;
        console.log(sectionButton.onclick)
        choiceList.appendChild(sectionButton);
    });
        
     questTitle.textContent = question;
    // //choiceList.textContent = choices;
    // questionCounter++;
}
// listens for the click on start button
start.addEventListener("click", function () {

    startScreen.setAttribute("class", "hide");

    questions.setAttribute("class", "block");

    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("time").innerHTML = "Finished";
        } else {
            document.getElementById("time").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);

    showNextQuestion();
});
// shows next question once choice is clicked.
// answerButton.addEventListener("click", function () {
// console.log(this);
//   //  if(===)


//     showNextQuestion();
// });

// suppose to verify if answer is correct 
function questAnswer(){

    if(this.value !== questionsA[questionCounter].answer){
        timeLeft -=10;
    }
};
//suppose to end quiz 
function endQuiz(){
    clearInterval(timeleft);
}



