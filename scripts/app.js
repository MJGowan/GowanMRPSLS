let startPage = document.getElementById("startPage");
let navTitle = document.getElementById("navTitle");
let cpuBtn = document.getElementById("cpuBtn");
let pvpBtn = document.getElementById("pvpBtn");
let oneBtn = document.getElementById("oneBtn");
let fiveBtn = document.getElementById("fiveBtn");
let sevenBtn = document.getElementById("sevenBtn");
let subStartBtn = document.getElementById("subStartBtn");

let replaceMe = document.getElementById("replaceMe");

let cpuValue = false;
let pvpValue = false;
let oneValue = false;
let fiveValue = false;
let sevenValue = false;

// function ClearStart(){
//     startPage.innerHTML = "";
// }

navTitle.addEventListener("click", function(){
    open (url= "../index.html");
});


cpuBtn.addEventListener("click", function(){
    cpuValue = true;
    pvpValue = false;
});
pvpBtn.addEventListener("click", function(){
    pvpValue = true;
    cpuValue = false;
});
oneBtn.addEventListener("click", function(){
    oneValue = true;
    fiveValue = false;
    sevenValue = false;
});
fiveBtn.addEventListener("click", function(){
    fiveValue = true;
    oneValue = false;
    sevenValue = false;
});
sevenBtn.addEventListener("click", function(){
    sevenValue = true;
    oneValue = false;
    fiveValue = false;
});

subStartBtn.addEventListener("click", function(){
    if(cpuValue == true && oneValue == true){
        cpuOne();
    }
    else if(cpuValue == true && fiveValue == true){
        cpuFive();
    }
    else if(cpuValue == true && sevenValue == true){
        cpuSeven();
    }
    else if(pvpValue == true && oneValue == true){
        pvpOne();
    }
    else if(pvpValue == true && fiveValue == true){
        pvpFive();
    }
    else if(pvpValue == true && sevenValue == true){
        pvpSeven();
    }
});




function cpuOne(){
    alert("i'm working!");

    open (url="../pages/cpuOne.html");

    // let navA = document.createElement("a");
    // navA.id = "navTitle";
    // navA.className = "navbar-brand";
    // navA.href ="#";
    // navA.textContent = "RPSLS";

    // let navDiv = document.createElement("div");
    // navDiv.className = "container-fluid d-flex justify-content-center";
    // navDiv.appendChild(navA);

    // let nav = document.createElement("nav");
    // nav.className = "navbar";
    // nav.appendChild(navDiv);
}

function cpuFive(){
    alert("i'm working!");

    open (url="../pages/cpuFive.html");
}

function cpuSeven(){
    alert("i'm working!");

    open (url="../pages/cpuSeven.html");
}

function pvpOne(){
    alert("i'm working!");

    open (url="../pages/pvpOne.html");
}

function pvpFive(){
    alert("i'm working!");

    open (url="../pages/pvpFive.html");
}

function pvpSeven(){
    alert("i'm working!");

    open (url="../pages/pvpSeven.html");
}