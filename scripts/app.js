let startPage = document.getElementById("startPage");

let navTitle = document.getElementById("navTitle");
let cpuBtn = document.getElementById("cpuBtn");
let pvpBtn = document.getElementById("pvpBtn");
let oneBtn = document.getElementById("oneBtn");
let fiveBtn = document.getElementById("fiveBtn");
let sevenBtn = document.getElementById("sevenBtn");
let subStartBtn = document.getElementById("subStartBtn");

cpuBtn.addEventListener("click", function(){

});
pvpBtn.addEventListener("click", function(){
    
});
oneBtn.addEventListener("click", function(){
    
});
fiveBtn.addEventListener("click", function(){
    
});
sevenBtn.addEventListener("click", function(){
    
});
subStartBtn.addEventListener("click", function(){
    ClearStart();
    
});

function ClearStart(){
    startPage.innerHTML = "";
}

function cpuOne(){
    let navA = document.createElement("a");
    navA.id = "navTitle";
    navA.className = "navbar-brand";
    navA.href ="#";
    navA.textContent = "RPSLS";

    let navDiv = document.createElement("div");
    navDiv.className = "container-fluid d-flex justify-content-center";
    navDiv.appendChild(navA);

    let nav = document.createElement("nav");
    nav.className = "navbar";
    nav.appendChild(nav);



}

function cpuFive(){
    let navA = document.createElement("a");
    navA.id = "navTitle";
    navA.className = "navbar-brand";
    navA.href ="#";
    navA.textContent = "RPSLS";

    let navDiv = document.createElement("div");
    navDiv.className = "container-fluid d-flex justify-content-center";
    navDiv.appendChild(navA);

    let nav = document.createElement("nav");
    nav.className = "navbar";
    nav.appendChild(nav);

}

function cpuSeven(){
    let navA = document.createElement("a");
    navA.id = "navTitle";
    navA.className = "navbar-brand";
    navA.href ="#";
    navA.textContent = "RPSLS";

    let navDiv = document.createElement("div");
    navDiv.className = "container-fluid d-flex justify-content-center";
    navDiv.appendChild(navA);

    let nav = document.createElement("nav");
    nav.className = "navbar";
    nav.appendChild(nav);
}

function pvpOne(){
    let navA = document.createElement("a");
    navA.id = "navTitle";
    navA.className = "navbar-brand";
    navA.href ="#";
    navA.textContent = "RPSLS";

    let navDiv = document.createElement("div");
    navDiv.className = "container-fluid d-flex justify-content-center";
    navDiv.appendChild(navA);

    let nav = document.createElement("nav");
    nav.className = "navbar";
    nav.appendChild(nav);
}

function pvpFive(){
    let navA = document.createElement("a");
    navA.id = "navTitle";
    navA.className = "navbar-brand";
    navA.href ="#";
    navA.textContent = "RPSLS";

    let navDiv = document.createElement("div");
    navDiv.className = "container-fluid d-flex justify-content-center";
    navDiv.appendChild(navA);

    let nav = document.createElement("nav");
    nav.className = "navbar";
    nav.appendChild(nav);
}

function pvpSeven(){
    let navA = document.createElement("a");
    navA.id = "navTitle";
    navA.className = "navbar-brand";
    navA.href ="#";
    navA.textContent = "RPSLS";

    let navDiv = document.createElement("div");
    navDiv.className = "container-fluid d-flex justify-content-center";
    navDiv.appendChild(navA);

    let nav = document.createElement("nav");
    nav.className = "navbar";
    nav.appendChild(nav);
}