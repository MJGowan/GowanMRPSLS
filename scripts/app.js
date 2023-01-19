let startPage = document.getElementById("startPage");
let navTitle = document.getElementById("navTitle");
let cpuBtn = document.getElementById("cpuBtn");
let pvpBtn = document.getElementById("pvpBtn");
let oneBtn = document.getElementById("oneBtn");
let fiveBtn = document.getElementById("fiveBtn");
let sevenBtn = document.getElementById("sevenBtn");
let subStartBtn = document.getElementById("subStartBtn");

let cpuValue = false;
let pvpValue = false;
let oneValue = false;
let fiveValue = false;
let sevenValue = false;

navTitle.addEventListener("click", function () {
    open(url = "../index.html");
});


cpuBtn.addEventListener("click", function () {
    cpuValue = true;
    pvpValue = false;
});
pvpBtn.addEventListener("click", function () {
    pvpValue = true;
    cpuValue = false;
});
oneBtn.addEventListener("click", function () {
    oneValue = true;
    fiveValue = false;
    sevenValue = false;
});
fiveBtn.addEventListener("click", function () {
    fiveValue = true;
    oneValue = false;
    sevenValue = false;
});
sevenBtn.addEventListener("click", function () {
    sevenValue = true;
    oneValue = false;
    fiveValue = false;
});

subStartBtn.addEventListener("click", function () {
    if (cpuValue == true && oneValue == true) {
        cpuOne();
    }
    else if (cpuValue == true && fiveValue == true) {
        cpuFive();
    }
    else if (cpuValue == true && sevenValue == true) {
        cpuSeven();
    }
    else if (pvpValue == true && oneValue == true) {
        pvpOne();
    }
    else if (pvpValue == true && fiveValue == true) {
        pvpFive();
    }
    else if (pvpValue == true && sevenValue == true) {
        pvpSeven();
    }
});


function cpuOne() {
    open(url = "../pages/cpuOne.html");
}

function cpuFive() {
    open(url = "../pages/cpuFive.html");
}

function cpuSeven() {
    open(url = "../pages/cpuSeven.html");
}

function pvpOne() {
    open(url = "../pages/pvpOne.html");
}

function pvpFive() {
    open(url = "../pages/pvpFive.html");
}

function pvpSeven() {
    open(url = "../pages/pvpSeven.html");
}

let won = document.getElementById("won");
let lost = document.getElementById("lost");
let draw = document.getElementById("draw");
let yourChoice = document.getElementById("yourChoice");
let cpuChoice = document.getElementById("cpuChoice");

won = 0;
lost = 0;
draw = 0;
yourChoice = "";
cpuChoice = "";

let cpuChose = "";
let pickUrl = "";

let rock = document.getElementById("rock");
let paper = document.getElementById("rock");
let scissors = document.getElementById("rock");
let lizard = document.getElementById("rock");
let spock = document.getElementById("rock");


rock.addEventListener("click", function () {
    yourChoice = "rock";
    pickApi()
});
paper.addEventListener("click", function () {
    yourChoice = "paper";
    pickApi()
});
scissors.addEventListener("click", function () {
    yourChoice = "scissors";
    pickApi()
});
lizard.addEventListener("click", function () {
    yourChoice = "lizard";
    pickApi()
});
spock.addEventListener("click", function () {
    yourChoice = "spock";
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