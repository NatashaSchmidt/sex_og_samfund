window.addEventListener("load", sidenVises);


"use strict";
let points = 0;
let runder = 2;
let showSettingsEffektSound = true;
let showSettingsMusic = true;


function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske

    showStart();
}


function showStart() {
    console.log("show start");
    document.querySelector("#titel").classList.remove("hide");
    document.querySelector("#titelplay").classList.add("pulse");
    document.querySelector("#titelplay").addEventListener("click", hideStart);
}




function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#titel").classList.add("hide");

}


function hideStart() {
    console.log("hide start");
    //RYD OP
    document.querySelector("#titelplay").classList.remove("pulse");
    document.querySelector("#titelplay").removeEventListener("click", hideStart);

    //NYT
    document.querySelector("#titel").classList.add("fade_in");
    document.querySelector("#vaelgkon").classList.add("fade_out");
    document.querySelector("#titel").addEventListener("animationend", startIntro);
}


function startIntro() {
    console.log("start intro");
    document.querySelector("#vaelgkon").classList.remove("hide");
    document.querySelector("#titel").classList.add("hide");
    document.querySelector("#pige").addEventListener("click", introPige);
    document.querySelector("#dreng").addEventListener("click", introDreng);
}





function introPige() {
    console.log("introPige");
    document.querySelector("#vaelgkon").classList.add("fade_in");
    document.querySelector("#game").classList.add("fade_out");
    document.querySelector("#vaelgkon").addEventListener("animationend", pigeRunde);

    pigeRunde();
}



function pigeRunde() {
    console.log("pigeRunde");

    //RYD OP
    document.querySelector("#rigtigtsvar").classList.add("hide");
    document.querySelector("#rigtigtsvar").removeEventListener("click", pigeRunde);
    document.querySelector("#forkertsvar").classList.add("hide");
    document.querySelector("#forkertsvar").removeEventListener("click", pigeRunde);



    //NYT
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#lipstick").classList.remove("hide");
    document.querySelector("#pudder").classList.remove("hide");
    document.querySelector("#pin").classList.remove("hide");

    document.querySelector("#haand").classList.remove("hide");
    document.querySelector("#haand").classList.add("haand_animation");

    document.querySelector("#haand").addEventListener("animationend", pigeValg);

}



function pigeValg() {
    console.log("pigeValg");

    if (runder == 2) {

        document.querySelector("#besked1pige").classList.remove("hide");
        document.querySelector("#runde1pige").classList.remove("hide");
    } else if (runder == 1) {

        document.querySelector("#besked2pige").classList.remove("hide");
        document.querySelector("#runde2pige").classList.remove("hide");
    }

    document.querySelector("#svarmuligheder").classList.remove("hide");
    document.querySelector("#rigtigtknap").addEventListener("click", clickRigtigtPige);
    document.querySelector("#forkertknap").addEventListener("click", clickForkertPige);
}


function clickRigtigtPige() {
    console.log("clickRigtigtPige");

    if (runder == 2) {

        //RYD OP
        document.querySelector("#besked1pige").classList.add("hide");
        document.querySelector("#runde1pige").classList.add("hide");
        document.querySelector("#haand").classList.add("hide");

        //NYT
        document.querySelector("#svarmuligheder").classList.add("hide");
        document.querySelector("#rigtigtsvar").classList.remove("hide");


        runder--;
        console.log("runder tilbage: " + runder);

        points++;
        console.log("point: " + points);

        document.querySelector("#rigtigtsvar").addEventListener("click", pigeRunde);

    } else if (runder == 1) {
        //RYD OP
        document.querySelector("#besked2pige").classList.add("hide");
        document.querySelector("#runde2pige").classList.add("hide");
        document.querySelector("#haand").classList.add("hide");

        //NYT
        document.querySelector("#svarmuligheder").classList.add("hide");
        document.querySelector("#rigtigtsvar").classList.remove("hide");


        runder--;
        console.log("runder tilbage: " + runder);

        points++;
        console.log("point: " + points);

        document.querySelector("#rigtigtsvar").addEventListener("click", gameStatus);

    }



}


function clickForkertPige() {
    console.log("clickForkertPige");

    if (runder == 2) {

        //RYD OP
        document.querySelector("#besked1pige").classList.add("hide");
        document.querySelector("#runde1pige").classList.add("hide");
        document.querySelector("#haand").classList.add("hide");

        //NYT
        document.querySelector("#svarmuligheder").classList.add("hide");
        document.querySelector("#forkertsvar").classList.remove("hide");


        runder--;
        console.log("runder tilbage: " + runder);
        console.log("point: " + points);

        document.querySelector("#forkertsvar").addEventListener("click", pigeRunde);

    } else if (runder == 1) {
        //RYD OP
        document.querySelector("#besked2pige").classList.add("hide");
        document.querySelector("#runde2pige").classList.add("hide");
        document.querySelector("#haand").classList.add("hide");

        //NYT
        document.querySelector("#svarmuligheder").classList.add("hide");
        document.querySelector("#forkertsvar").classList.remove("hide");


        runder--;
        console.log("runder tilbage: " + runder);
        console.log("point: " + points);

        document.querySelector("#forkertsvar").addEventListener("click", gameStatus);

    }



}





function introDreng() {
    console.log("introDreng");
}



function drengeRunde() {
    console.log("drengeRunde");
}



function drengeValg() {
    console.log("drengeValg");
}



function clickRigtigtDreng() {
    console.log("clickRigtigtDreng");
}



function clickForkertDreng() {
    console.log("clickForkertDreng");
}




function gameStatus() {
    console.log("gameStatus");

    if (points == 2) {
        levelComplete();

    } else {
        gameOver();
    }


}



function gameOver() {
    console.log("gameOver");

    document.querySelector("#game").classList.add("hide");
    document.querySelector("#endgame_lose").classList.remove("hide");

    document.querySelector("#spil_igen_pik_2").addEventListener("click", newGame);

}

function levelComplete() {
    console.log("levelComplete");

    document.querySelector("#game").classList.add("hide");
    document.querySelector("#endgame_won").classList.remove("hide");

    document.querySelector("#spil_igen_pik").addEventListener("click", newGame);

}

function newGame() {
    console.log("newGame");
    //    document.getElementById("#screen").sidenVises();
    location = location.href;
}
