//show or hide translations
var l1 = ["div11FR", "div11EN", "div11DE", "creFR", "creEN", "creDE", "conFR", "conEN", "conDE"];    //id's from index
var l2 = ["div21FR", "div21EN", "div21DE", "div22FR", "div22EN", "div22DE", "creFR", "creEN", "creDE", "conFR", "conEN", "conDE"];    //id's from info

function showFR1(){
    for(var i=0; i<l1.length; i++){   //wrong?
        var y = document.getElementById(l1[i]);
        if(l1[i].slice(-2) == "FR"){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

function showEN1(){
    for(var i=0; i<l1.length; i++){   //wrong
        var y = document.getElementById(l1[i]);
        if(l1[i].slice(-2) == "EN"){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

function showDE1(){
    for(var i=0; i<l1.length; i++){   //wrong
        var y = document.getElementById(l1[i]);
        if(l1[i].slice(-2) == "DE"){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

function showFR2(){
    for(var i=0; i<l2.length; i++){   //wrong?
        var y = document.getElementById(l2[i]);
        if(l2[i].slice(-2) == "FR"){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

function showEN2(){
    for(var i=0; i<l2.length; i++){   //wrong
        var y = document.getElementById(l2[i]);
        if(l2[i].slice(-2) == "EN"){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

function showDE2(){
    for(var i=0; i<l2.length; i++){   //wrong
        var y = document.getElementById(l2[i]);
        if(l2[i].slice(-2) == "DE"){
            y.style.display = "block";
        }
        else{
            y.style.display = "none";
        }
    }
}

//show or hide dishes list
function showDishes(){
    var x = document.getElementById("div13");
    x.style.display = "block";
}

function hideDishes(){
    var x = document.getElementById("div13");
    x.style.display = "none";
}