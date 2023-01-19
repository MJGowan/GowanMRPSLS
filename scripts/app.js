let startPage = document.getElementById("startPage");
let navTitle = document.getElementById("navTitle");
let cpuBtn = document.getElementById("cpuBtn");
let pvpBtn = document.getElementById("pvpBtn");
let oneBtn = document.getElementById("oneBtn");
let fiveBtn = document.getElementById("fiveBtn");
let sevenBtn = document.getElementById("sevenBtn");
let subStartBtn = document.getElementById("subStartBtn");

navTitle.addEventListener("click", function(){
    ClearStart();
});


cpuBtn.addEventListener("click", function(){
    cpuBtn == true;
    pvpBtn == false;
});
pvpBtn.addEventListener("click", function(){
    pvpBtn == true;
    cpuBtn == false;
});
oneBtn.addEventListener("click", function(){
    oneBtn == true;
    fiveBtn == false;
    sevenBtn == false;
});
fiveBtn.addEventListener("click", function(){
    fiveBtn == true;
    oneBtn == false;
    sevenBtn == false;
});
sevenBtn.addEventListener("click", function(){
    sevenBtn == true;
    oneBtn == false;
    fiveBtn == false;
});

subStartBtn.addEventListener("click", function(){
    ClearStart();
    
});


function ClearStart(){
    startPage.innerHTML = "";
}


function cpuOne(){
    startPage.innerHTML = "";
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