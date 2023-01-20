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

let victory = 0;
let defeat = 0;
let tie = 0;

let pickUrl = "";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");


rock.addEventListener("click", function () {
    yourChoice.innerText = "Rock";
    console.log("Your choice was rock");
    pickApi();
});
paper.addEventListener("click", function () {
    yourChoice.innerText = "Paper";
    console.log("Your choice was paper");
    pickApi();
});
scissors.addEventListener("click", function () {
    yourChoice.innerText = "Scissors";
    console.log("Your choice was scissors");
    pickApi();
});
lizard.addEventListener("click", function () {
    yourChoice.innerText = "Lizard";
    console.log("Your choice was lizard");
    pickApi();
});
spock.addEventListener("click", function () {
    yourChoice.innerText = "Spock";
    console.log("Your choice was spock");
    pickApi();
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            //cpuChoice = data;
            cpuChoice.textContent = data;
            console.log(cpuChoice.textContent);
        }
    )
}

function pickApi() {
        pickUrl = "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption";
        urlCall(pickUrl);
        result();
    }

function result() {
    if (yourChoice.textContent == "Rock") {
        switch (cpuChoice.textContent) {
            case "Rock":
                tie++;
                break;
            case "Paper":
                defeat++;
                break;
            case "Scissors":
                victory++;
                break;
            case "Lizard":
                victory++;
                break;
            case "Spock":
                defeat++;
                break;
        }
    }
    if (yourChoice.textContent == "Paper") {
        switch (cpuChoice.textContent) {
            case "Rock":
                victory++;
                break;
            case "Paper":
                tie++;
                break;
            case "Scissors":
                defeat++;
                break;
            case "Lizard":
                defeat++;
                break;
            case "Spock":
                victory++;
                break;
        }
    }
    if (yourChoice.textContent == "Scissors") {
        switch (cpuChoice.textContent) {
            case "Rock":
                victory++;
                break;
            case "Paper":
                defeat++;
                break;
            case "Scissors":
                tie++;
                break;
            case "Lizard":
                victory++;
                break;
            case "Spock":
                defeat++;
                break;
        }
    }
    if (yourChoice.textContent == "Lizard") {
        switch (cpuChoice.textContent) {
            case "Rock":
                defeat++;
                break;
            case "Paper":
                victory++;
                break;
            case "Scissors":
                defeat++;
                break;
            case "Lizard":
                tie++;
                break;
            case "Spock":
                victory++;
                break;
        }
    }
    if (yourChoice.textContent == "Spock") {
        switch (cpuChoice.textContent) {
            case "Rock":
                console.log("rude");
                victory++;
                break;
            case "Paper":
                defeat++;
                break;
            case "Scissors":
                victory++;
                break;
            case "Lizard":
                defeat++;
                break;
            case "Spock":
                tie++;
                break;
        }
    }

    console.log(victory);
    won.textContent = victory;
    lost.textContent = defeat;
    draw.textContent = tie;

};