let startPage = document.getElementById("startPage");
let navTitle = document.getElementById("navTitle");

let cpuValue = false;
let pvpValue = false;
let oneValue = false;
let fiveValue = false;
let sevenValue = false;

navTitle.addEventListener("click", function () {
    open(url = "../index.html");
});

let won = document.getElementById("won");
let lost = document.getElementById("lost");
let draw = document.getElementById("draw");
let yourChoice = document.getElementById("yourChoice");
let cpuChoice = document.getElementById("cpuChoice");

won = 0;
lost = 0;
draw;
yourChoice = "";
cpuChoice = "";

let pickUrl = "";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");


rock.addEventListener("click", function () {
    yourChoice = "rock";
    console.log("Your choice was rock");
    pickApi()
});
paper.addEventListener("click", function () {
    yourChoice.innerText = "paper";
    console.log("Your choice was paper");
    pickApi()
});
scissors.addEventListener("click", function () {
    yourChoice = "scissors";
    console.log("Your choice was scissors");
    pickApi()
});
lizard.addEventListener("click", function () {
    yourChoice = "lizard";
    console.log("Your choice was lizard");
    pickApi()
});
spock.addEventListener("click", function () {
    yourChoice = "spock";
    console.log("Your choice was spock");
    pickApi()
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            cpuChoice.textContent = data;
            console.log(data);
        }
    )
}

function pickApi() {
        pickUrl = "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption";
        urlCall(pickUrl);
        result();
    }

function result() {
    if (yourChoice == "rock") {
        switch (cpuChoice) {
            case "rock":
                draw++;
                break;
            case "paper":
                lost++;
                break;
            case "scissors":
                won++;
                break;
            case "lizard":
                won++;
                break;
            case "spock":
                lost++;
                break;
        }
    }
    if (yourChoice == "paper") {
        switch (cpuChoice) {
            case "rock":
                won++;
                break;
            case "paper":
                draw++;
                break;
            case "scissors":
                lost++;
                break;
            case "lizard":
                lost++;
                break;
            case "spock":
                won++;
                break;
        }
    }
    if (yourChoice == "scissors") {
        switch (cpuChoice) {
            case "rock":
                won++;
                break;
            case "paper":
                lost++;
                break;
            case "scissors":
                draw++;
                break;
            case "lizard":
                won++;
                break;
            case "spock":
                lost++;
                break;
        }
    }
    if (yourChoice == "lizard") {
        switch (cpuChoice) {
            case "rock":
                lost++;
                break;
            case "paper":
                won++;
                break;
            case "scissors":
                lost++;
                break;
            case "lizard":
                draw++;
                break;
            case "spock":
                won++;
                break;
        }
    }
    if (yourChoice == "spock") {
        switch (cpuChoice) {
            case "rock":
                won++;
                break;
            case "paper":
                lost++;
                break;
            case "scissors":
                won++;
                break;
            case "lizard":
                lost++;
                break;
            case "spock":
                draw++;
                break;
        }
    }
};