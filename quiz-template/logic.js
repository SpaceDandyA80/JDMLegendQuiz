var displaySeconds = document.querySelector("#seconds");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");
var questTitle = document.querySelector("#question-title");
var start = document.querySelector("#start");
var time = document.querySelector("#time");
var choiceList = document.querySelector("#choices");

var timeleft = 75;
var questionCounter = 0;
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

function showNextQuestion() {
    var nextQuestion = questionsA[questionCounter];
    
    var question = nextQuestion.title;
    var choices = nextQuestion.choices;

    questTitle.textContent = question;
    choiceList.textContent = choices;

    var section = document.createElement("section");
    section.textContent = choices;

    section.setAttribute("class","btn");
    choiceList.appendChild(section);
   


    questionCounter++;
}

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

choices.addEventListener("click", function () {

    showNextQuestion();
});


// new function    time left -10 for answer wrong 

// var questionContent = "";

// for (var i = 0; i < questionsA.length; i++) {

// }

