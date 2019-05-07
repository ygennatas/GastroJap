//translate
let listDiv1 = ["p1d1FR", "p1d1EN", "p1d3natFR", "p1d3natEN", "creFR", "creEN", "conFR", "conEN"];    //id's from page 1
let listDiv2 = ["p2d1FR", "p2d1EN", "p2d2FR", "p2d2EN", "creFR", "creEN", "conFR", "conEN"];    //id's from page 2

function translate1(lan){
    document.cookie = "language="+lan;
    for(let i=0; i<listDiv1.length; i++){
        let y = document.getElementById(listDiv1[i]);
        if(listDiv1[i].slice(-2) === lan){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

function translate2(lan){
    document.cookie = "language="+lan+";";
    for(let i=0; i<listDiv2.length; i++){
        let y = document.getElementById(listDiv2[i]);
        if(listDiv2[i].slice(-2) === lan){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

//initiate with the correct language
function initiateP1(){
    if(document.cookie.valueOf().slice(-2) === "FR"){
        translate1("FR");
    }
    else{
        translate1("EN");
    }
}

function initiateP2(){
    translate2(document.cookie.valueOf().slice(-2));
}

//show or hide dishes list
function showDishes(linkElement){
    let all = document.getElementsByClassName("list");
    for(let i=0; i<all.length; i++){
        all[i].style.display = "none";
    }
    let n = linkElement.id.slice(-2);
    let x = document.getElementById("p1d3"+n);
    x.style.display = "block";
}

function hideDishes(linkElement){
    let x = linkElement.parentElement;
    x.style.display = "none";
    let y = document.getElementById("p1d3nat"+document.cookie.valueOf().slice(-2));
    y.style.display = "block";
}