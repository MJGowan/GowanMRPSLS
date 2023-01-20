let pvpOnePage = document.getElementById("pvpOnePage");
let navTitle = document.getElementById("navTitle");

navTitle.addEventListener("click", function () {
    open(url = "../index.html");
});

let p1won = document.getElementById("p1won");
let p1lost = document.getElementById("p1lost");
let p2won = document.getElementById("p2won")
let p2lost = document.getElementById("p2lost");
let draw = document.getElementById("draw");
let p1Choice = document.getElementById("p1Choice");
let p1Chose = "";
let p2Choice = document.getElementById("p2Choice");
let p2Chose = "";

let submitBtn = document.getElementById("submitBtn");

let p1victory = 0;
let p1defeat = 0;
let p2victory = 0;
let p2defeat = 0;
let tie = 0;

let p1rock = document.getElementById("p1rock");
let p1paper = document.getElementById("p1paper");
let p1scissors = document.getElementById("p1scissors");
let p1lizard = document.getElementById("p1lizard");
let p1spock = document.getElementById("p1spock");

let p2rock = document.getElementById("p2rock");
let p2paper = document.getElementById("p2paper");
let p2scissors = document.getElementById("p2scissors");
let p2lizard = document.getElementById("p2lizard");
let p2spock = document.getElementById("p2spock");


p1rock.addEventListener("click", function () {
    //p1Choice.innerText = "Rock";
    p1Chose = "Rock";
    console.log("Player 1 has made their choice");
});
p1paper.addEventListener("click", function () {
    //p1Choice.innerText = "Paper";
    p1Chose = "Paper";
    console.log("Player 1 has made their choice");
});
p1scissors.addEventListener("click", function () {
    //p1Choice.innerText = "Scissors";
    p1Chose = "Scissors";
    console.log("Player 1 has made their choice");
});
p1lizard.addEventListener("click", function () {
    //p1Choice.innerText = "Lizard";
    p1Chose = "Lizard";
    console.log("Player 1 has made their choice");
});
p1spock.addEventListener("click", function () {
    //p1Choice.innerText = "Spock";
    p1Chose = "Spock";
    console.log("Player 1 has made their choice");
});



p2rock.addEventListener("click", function () {
    //p2Choice.innerText = "Rock";
    p2Chose = "Rock";
    console.log("Player 2 has made their choice");
});
p2paper.addEventListener("click", function () {
    //p2Choice.innerText = "Paper";
    p2Chose = "Paper";
    console.log("Player 2 has made their choice");
});
p2scissors.addEventListener("click", function () {
    //p2Choice.innerText = "Scissors";
    p2Chose = "Scissors"
    console.log("Player 2 has made their choice");
});
p2lizard.addEventListener("click", function () {
    //p2Choice.innerText = "Lizard";
    p2Chose = "Lizard";
    console.log("Player 2 has made their choice");
});
p2spock.addEventListener("click", function () {
    //p2Choice.innerText = "Spock";
    p2Chose = "Spock";
    console.log("Player 2 has made their choice");
});



submitBtn.addEventListener("click", function () {
    result();
});

function result() {
    if (p1Chose == "Rock") {
        switch (p2Chose) {
            case "Rock":
                console.log("Player 1 chose rock");
                console.log("Player 2 chose rock");
                tie++;
                break;
            case "Paper":
                console.log("Player 1 chose rock");
                console.log("Player 2 chose paper");
                p1defeat++;
                p2victory++;
                break;
            case "Scissors":
                console.log("Player 1 chose rock");
                console.log("Player 2 chose scissors");
                p1victory++;
                p2defeat++;
                break;
            case "Lizard":
                console.log("Player 1 chose rock");
                console.log("Player 2 chose lizard");
                p1victory++;
                p2defeat++;
                break;
            case "Spock":
                console.log("Player 1 chose rock");
                console.log("Player 2 chose spock");
                p1defeat++;
                p2victory++;
                break;
        }
    }
    if (p1Chose == "Paper") {
        switch (p2Chose) {
            case "Rock":
                console.log("Player 1 chose paper");
                console.log("Player 2 chose rock");
                p1victory++;
                p2defeat++;
                break;
            case "Paper":
                console.log("Player 1 chose paper");
                console.log("Player 2 chose paper");
                tie++;
                break;
            case "Scissors":
                console.log("Player 1 chose paper");
                console.log("Player 2 chose scissors");
                p1defeat++;
                p2victory++;
                break;
            case "Lizard":
                console.log("Player 1 chose paper");
                console.log("Player 2 chose lizard");
                p1defeat++;
                p2victory++;
                break;
            case "Spock":
                console.log("Player 1 chose paper");
                console.log("Player 2 chose spock");
                p1victory++;
                p2defeat++;
                break;
        }
    }
    if (p1Chose == "Scissors") {
        switch (p2Chose) {
            case "Rock":
                console.log("Player 1 chose scissors");
                console.log("Player 2 chose rock");
                p1victory++;
                p2defeat++;
                break;
            case "Paper":
                console.log("Player 1 chose scissors");
                console.log("Player 2 chose paper");
                p1defeat++;
                p2victory++;
                break;
            case "Scissors":
                console.log("Player 1 chose scissors");
                console.log("Player 2 chose scissors");
                tie++;
                break;
            case "Lizard":
                console.log("Player 1 chose scissors");
                console.log("Player 2 chose lizard");
                p1victory++;
                p2defeat++;
                break;
            case "Spock":
                console.log("Player 1 chose scissors");
                console.log("Player 2 chose spock");
                p1defeat++;
                p2victory++;
                break;
        }
    }
    if (p1Chose == "Lizard") {
        switch (p2Chose) {
            case "Rock":
                console.log("Player 1 chose lizard");
                console.log("Player 2 chose rock");
                p1defeat++;
                p2victory++;
                break;
            case "Paper":
                console.log("Player 1 chose lizard");
                console.log("Player 2 chose paper");
                p1victory++;
                p2defeat++;
                break;
            case "Scissors":
                console.log("Player 1 chose lizard");
                console.log("Player 2 chose scissors");
                p1defeat++;
                p2victory++;
                break;
            case "Lizard":
                console.log("Player 1 chose lizard");
                console.log("Player 2 chose lizard");
                tie++;
                break;
            case "Spock":
                console.log("Player 1 chose lizard");
                console.log("Player 2 chose spock");
                p1victory++;
                p2defeat++;
                break;
        }
    }
    if (p1Chose == "Spock") {
        switch (p2Chose) {
            case "Rock":
                console.log("Player 1 chose spock");
                console.log("Player 2 chose rock");
                p1victory++;
                p2defeat++;
                break;
            case "Paper":
                console.log("Player 1 chose spock");
                console.log("Player 2 chose paper");
                p1defeat++;
                p2victory++;
                break;
            case "Scissors":
                console.log("Player 1 chose spock");
                console.log("Player 2 chose scissors");
                p1victory++;
                p2defeat++;
                break;
            case "Lizard":
                console.log("Player 1 chose spock");
                console.log("Player 2 chose lizard");
                p1defeat++;
                p2victory++;
                break;
            case "Spock":
                console.log("Player 1 chose spock");
                console.log("Player 2 chose spock");
                tie++;
                break;
        }
    }

    p1won.textContent = p1victory;
    p1lost.textContent = p1defeat;
    p2won.textContent = p2victory;
    p2lost.textContent = p2defeat;
    draw.textContent = tie;

    p1Choice.textContent = p1Chose;
    p2Choice.textContent = p2Chose;

    if (p1victory + p1defeat + tie >= 7 || p1victory == 4 || p2victory == 4) {
        p1Chose = "X";
        p2Chose = "X";
        if(p1victory > p2victory){
            alert("Player 1 wins!");
        }
        else if(p1victory < p2victory){
            alert("Player 2 wins!");
        }
        else if(p1victory = p2victory){
            alert("It's a tie!");
        }

    }
};