let l;  //keeps the currently used language

//translate
let l1 = ["p1d1FR", "p1d1EN", "p1d1DE", "p1d3natFR", "p1d3natEN", "p1d3natDE", "creFR", "creEN", "creDE", "conFR", "conEN", "conDE"];    //id's from page 1
let l2 = ["p2d1FR", "p2d1EN", "p2d1DE", "p2d2FR", "p2d2EN", "p2d2DE", "creFR", "creEN", "creDE", "conFR", "conEN", "conDE"];    //id's from page 2

function translate1(lan){
    l = lan;
    for(let i=0; i<l1.length; i++){
        let y = document.getElementById(l1[i]);
        if(l1[i].slice(-2) == lan){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

function translate2(lan){
    l = lan;
    for(let i=0; i<l2.length; i++){
        let y = document.getElementById(l2[i]);
        if(l2[i].slice(-2) == lan){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

//initiate page 1
function initiateP1(){
    if(l == "EN"){
        translate1(EN);
    }
    else if(l == "DE"){
        translate1(DE);
    }
    else{
        l="FR";
        translate1(FR);
    }
}

//initiate page 2
function initiateP2(){
    if(l == "EN"){
        translate2(EN);
    }
    else if(l == "DE"){
        translate2(DE);
    }
    else{
        l="FR";
        translate2(FR);
    }
}

//show or hide dishes list
function showDishes(linkElement){
    if(linkElement.id.slice() == "nat"){
        let x = document.getElementById("p1d3nat"+l);
        x.style.display = "block";
    }
    else{
        let n = linkElement.id.slice(-2);
        let x = document.getElementById("p1d3"+n);
        x.style.display = "block";
    }
}

function hideDishes(linkElement){
    let x =
    x.style.display = "none";
    let y = getElementById("p1d3nat"+l);
    y.style.display = "block";
}