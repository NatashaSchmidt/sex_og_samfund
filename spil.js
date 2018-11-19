window.addEventListener("load", sidenVises);


"use strict";
let points;
let runder;
let showSettingsEffektSound = true;
let showSettingsMusic = true;


function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske

    //RYD OP
    document.querySelector("#endgame_won").classList.add("hide");
    document.querySelector("#endgame_lose").classList.add("hide");

    showStart();
}


function showStart() {
    console.log("show start");



    //NYT
    points = 0;
    runder = 2;
    document.querySelector("#titel").classList.remove("hide");
    document.querySelector("#titelplay").classList.add("pulse");
    document.querySelector("#titelplay").addEventListener("click", hideStart);
    document.querySelector("#indstillinger_knap").addEventListener("click", rotation)
    document.querySelector("#settings").classList.add("hide");

    document.querySelector("#baggrundsmusik").currentTime = 0;
    document.querySelector("#baggrundsmusik").play();
    document.querySelector("#baggrundsmusik").volume = 0.3;
    document.querySelector("#baggrundsmusik").currentTime = 23;
    document.querySelector("#klasselyd").loop = true;
    document.querySelector("#klasselyd").currentTime = 0;
    document.querySelector("#klasselyd").play();
    document.querySelector("#klasselyd").volume = 0.2;
    document.querySelector("#klasselyd").loop = true;

}


function rotation() {
    console.log("click på indstillinger");

    document.querySelector("#klik").play();
    document.querySelector("#klik").volume = 0.7;

    document.querySelector("#indstillinger_knap").classList.add("rotation");

    document.querySelector("#indstillinger_knap").addEventListener("animationend", showSettings);

}

function showSettings() {
    console.log("vis indstillinger");

    //RYD OP
    document.querySelector("#indstillinger_knap").classList.remove("rotation");


    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#indstillinger_knap").removeEventListener("click", showSettings);
    document.querySelector("#kryds").addEventListener("click", hideSettings);

    document.querySelector("#effekter_sprite").addEventListener("click", toggleSounds);
    document.querySelector("#music_sprite").addEventListener("click", toggleMusic);
}

function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;

        document.querySelector("#klik").play();
        document.querySelector("#klik").volume = 0.7;

        document.querySelector("#effekter_sprite").classList.remove("off_on");
        document.querySelector("#effekter_sprite").classList.add("on_off");
        document.querySelector("#effekter_sprite").addEventListener("animationend", soundsOff);



    } else {
        showSettingsEffektSound = true;

        document.querySelector("#klik").play();
        document.querySelector("#klik").volume = 0.7;

        document.querySelector("#effekter_sprite").classList.remove("off");
        document.querySelector("#effekter_sprite").classList.add("off_on");
        document.querySelector("#effekter_sprite").addEventListener("animationend", soundsOn);



    }
}

function soundsOff() {
    console.log("soundsOff" + showSettingsEffektSound);

    document.querySelector("#effekter_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#effekter_sprite").classList.remove("on_off");
    document.querySelector("#effekter_sprite").classList.add("off");

    document.querySelector("#vibration").muted = true;
    document.querySelector("#forkert_svar").muted = true;
    document.querySelector("#you_lose").muted = true;
    document.querySelector("#rigtigt_svar").muted = true;
    document.querySelector("#replay").muted = true;
    document.querySelector("#level_complete").muted = true;
    document.querySelector("#klik").muted = true;


}

function soundsOn() {
    console.log("soundsOn" + showSettingsEffektSound);

    document.querySelector("#effekter_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#effekter_sprite").classList.remove("off_on");
    document.querySelector("#effekter_sprite").classList.add("on");

    document.querySelector("#vibration").muted = false;
    document.querySelector("#forkert_svar").muted = false;
    document.querySelector("#you_lose").muted = false;
    document.querySelector("#rigtigt_svar").muted = false;
    document.querySelector("#replay").muted = false;
    document.querySelector("#level_complete").muted = false;
    document.querySelector("#klik").muted = false;


}

function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);
    if (showSettingsMusic == true) {
        showSettingsMusic = false;

        document.querySelector("#klik").play();
        document.querySelector("#klik").volume = 0.7;

        document.querySelector("#music_sprite").classList.remove("off_on");
        document.querySelector("#music_sprite").classList.add("on_off");

        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);


    } else {
        showSettingsMusic = true;

        document.querySelector("#klik").play();
        document.querySelector("#klik").volume = 0.7;

        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);


    }
}


function musicOff() {
    console.log("musicOff function værdi er " + showSettingsEffektSound);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    document.querySelector("#baggrundsmusik").muted = true;
    document.querySelector("#klasselyd").muted = true;



}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsEffektSound);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    document.querySelector("#baggrundsmusik").muted = false;
    document.querySelector("#klasselyd").muted = false;

}



function hideSettings() {
    console.log("hideSettings");

    document.querySelector("#klik").play();
    document.querySelector("#klik").volume = 0.7;

    document.querySelector("#titel").classList.add("hide");

    showStart();

}


function hideStart() {
    console.log("hide start");
    //RYD OP
    document.querySelector("#titelplay").classList.remove("pulse");
    document.querySelector("#titelplay").removeEventListener("click", hideStart);

    //NYT

    document.querySelector("#klik").play();
    document.querySelector("#klik").volume = 0.7;

    document.querySelector("#titel").classList.add("fade_in");
    document.querySelector("#vaelgkon").classList.add("fade_out");
    document.querySelector("#titel").addEventListener("animationend", startIntro);
}


function startIntro() {
    console.log("start intro");

    //RYD OP
    document.querySelector("#titel").removeEventListener("animationend", startIntro);
    document.querySelector("#titel").classList.remove("fade_in");
    document.querySelector("#vaelgkon").classList.remove("fade_out");

    //NYT
    document.querySelector("#vaelgkon").classList.remove("hide");
    document.querySelector("#titel").classList.add("hide");
    document.querySelector("#pige").addEventListener("click", introPige);
    document.querySelector("#dreng").addEventListener("click", introDreng);
}





function introPige() {
    console.log("introPige");

    //RYD OP
    document.querySelector("#vaelgkon").classList.add("hide");
    document.querySelector("#pige").removeEventListener("click", introPige);
    document.querySelector("#dreng").removeEventListener("click", introDreng);


    //NYT
    document.querySelector("#klik").play();
    document.querySelector("#klik").volume = 0.7;

    document.querySelector("#vaelgkon").classList.add("fade_in");
    document.querySelector("#game").classList.add("fade_out");
    document.querySelector("#vaelgkon").addEventListener("animationend", pigeRunde);

    pigeRunde();
}



function pigeRunde() {
    console.log("pigeRunde");

    //RYD OP
    document.querySelector("#vaelgkon").classList.remove("fade_in");
    document.querySelector("#game").classList.remove("fade_out");
    document.querySelector("#vaelgkon").removeEventListener("animationend", pigeRunde);
    document.querySelector("#rigtigtsvar").classList.add("hide");
    document.querySelector("#rigtigtsvar").removeEventListener("click", pigeRunde);
    document.querySelector("#forkertsvar").classList.add("hide");
    document.querySelector("#forkertsvar").removeEventListener("click", pigeRunde);



    //NYT

    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#lipstick").classList.remove("hide");
    document.querySelector("#pudder").classList.remove("hide");
    document.querySelector("#pin").classList.remove("hide");

    document.querySelector("#vibration").currentTime = 1;
    document.querySelector("#vibration").play();


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

        document.querySelector("#rigtigt_svar").currentTime = 0;
        document.querySelector("#rigtigt_svar").play();
        document.querySelector("#rigtigt_svar").volume = 0.6;

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

        document.querySelector("#rigtigt_svar").currentTime = 0;
        document.querySelector("#rigtigt_svar").play();
        document.querySelector("#rigtigt_svar").volume = 0.6;

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

        document.querySelector("#forkert_svar").currentTime = 0;
        document.querySelector("#forkert_svar").play();
        document.querySelector("#forkert_svar").volume = 0.3;


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

        document.querySelector("#forkert_svar").currentTime = 0;
        document.querySelector("#forkert_svar").play();
        document.querySelector("#forkert_svar").volume = 0.3;


        runder--;
        console.log("runder tilbage: " + runder);
        console.log("point: " + points);

        document.querySelector("#forkertsvar").addEventListener("click", gameStatus);

    }



}





function introDreng() {
    console.log("introDreng");

    //RYD OP
    document.querySelector("#vaelgkon").classList.add("hide");
    document.querySelector("#pige").removeEventListener("click", introPige);
    document.querySelector("#dreng").removeEventListener("click", introDreng);

    //NYT
    document.querySelector("#klik").play();
    document.querySelector("#klik").volume = 0.7;

    document.querySelector("#vaelgkon").classList.add("fade_in");
    document.querySelector("#game").classList.add("fade_out");
    document.querySelector("#vaelgkon").addEventListener("animationend", drengeRunde);

    drengeRunde();
}



function drengeRunde() {
    console.log("drengeRunde");

    //RYD OP
    document.querySelector("#vaelgkon").classList.remove("fade_in");
    document.querySelector("#game").classList.remove("fade_out");
    document.querySelector("#vaelgkon").removeEventListener("animationend", drengeRunde);
    document.querySelector("#rigtigtsvar").classList.add("hide");
    document.querySelector("#rigtigtsvar").removeEventListener("click", drengeRunde);
    document.querySelector("#forkertsvar").classList.add("hide");
    document.querySelector("#forkertsvar").removeEventListener("click", drengeRunde);



    //NYT
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#blyant").classList.remove("hide");
    document.querySelector("#eraser").classList.remove("hide");

    document.querySelector("#vibration").currentTime = 1;
    document.querySelector("#vibration").play();


    document.querySelector("#haand").classList.remove("hide");
    document.querySelector("#haand").classList.add("haand_animation");

    document.querySelector("#haand").addEventListener("animationend", drengeValg);

}



function drengeValg() {
    console.log("drengeValg");

    if (runder == 2) {

        document.querySelector("#besked1dreng").classList.remove("hide");
        document.querySelector("#runde1dreng").classList.remove("hide");
    } else if (runder == 1) {

        document.querySelector("#besked2dreng").classList.remove("hide");
        document.querySelector("#runde2dreng").classList.remove("hide");
    }

    document.querySelector("#svarmuligheder").classList.remove("hide");
    document.querySelector("#rigtigtknap").addEventListener("click", clickRigtigtDreng);
    document.querySelector("#forkertknap").addEventListener("click", clickForkertDreng);

}



function clickRigtigtDreng() {
    console.log("clickRigtigtDreng");

    if (runder == 2) {

        //RYD OP
        document.querySelector("#besked1dreng").classList.add("hide");
        document.querySelector("#runde1dreng").classList.add("hide");
        document.querySelector("#haand").classList.add("hide");

        //NYT
        document.querySelector("#svarmuligheder").classList.add("hide");
        document.querySelector("#rigtigtsvar").classList.remove("hide");

        document.querySelector("#rigtigt_svar").currentTime = 0;
        document.querySelector("#rigtigt_svar").play();
        document.querySelector("#rigtigt_svar").volume = 0.6;

        runder--;
        console.log("runder tilbage: " + runder);

        points++;
        console.log("point: " + points);

        document.querySelector("#rigtigtsvar").addEventListener("click", drengeRunde);

    } else if (runder == 1) {
        //RYD OP
        document.querySelector("#besked2dreng").classList.add("hide");
        document.querySelector("#runde2dreng").classList.add("hide");
        document.querySelector("#haand").classList.add("hide");

        //NYT
        document.querySelector("#svarmuligheder").classList.add("hide");
        document.querySelector("#rigtigtsvar").classList.remove("hide");

        document.querySelector("#rigtigt_svar").currentTime = 0;
        document.querySelector("#rigtigt_svar").play();
        document.querySelector("#rigtigt_svar").volume = 0.6;

        runder--;
        console.log("runder tilbage: " + runder);

        points++;
        console.log("point: " + points);

        document.querySelector("#rigtigtsvar").addEventListener("click", gameStatus);

    }


}



function clickForkertDreng() {
    console.log("clickForkertDreng");

    if (runder == 2) {

        //RYD OP
        document.querySelector("#besked1dreng").classList.add("hide");
        document.querySelector("#runde1dreng").classList.add("hide");
        document.querySelector("#haand").classList.add("hide");

        //NYT
        document.querySelector("#svarmuligheder").classList.add("hide");
        document.querySelector("#forkertsvar").classList.remove("hide");

        document.querySelector("#forkert_svar").currentTime = 0;
        document.querySelector("#forkert_svar").play();
        document.querySelector("#forkert_svar").volume = 0.3;

        runder--;
        console.log("runder tilbage: " + runder);
        console.log("point: " + points);

        document.querySelector("#forkertsvar").addEventListener("click", drengeRunde);

    } else if (runder == 1) {
        //RYD OP
        document.querySelector("#besked2dreng").classList.add("hide");
        document.querySelector("#runde2dreng").classList.add("hide");
        document.querySelector("#haand").classList.add("hide");

        //NYT
        document.querySelector("#svarmuligheder").classList.add("hide");
        document.querySelector("#forkertsvar").classList.remove("hide");

        document.querySelector("#forkert_svar").currentTime = 0;
        document.querySelector("#forkert_svar").play();
        document.querySelector("#forkert_svar").volume = 0.3;

        runder--;
        console.log("runder tilbage: " + runder);
        console.log("point: " + points);

        document.querySelector("#forkertsvar").addEventListener("click", gameStatus);

    }


}




function gameStatus() {
    console.log("gameStatus");

    //RYD OP
    document.querySelector("#forkertsvar").removeEventListener("click", gameStatus);
    document.querySelector("#rigtigtsvar").removeEventListener("click", gameStatus);


    //NYT

    if (points == 2) {

        document.querySelector("#klik").play();
        document.querySelector("#klik").volume = 0.7;

        levelComplete();

    } else {

        document.querySelector("#klik").play();
        document.querySelector("#klik").volume = 0.7;

        gameOver();
    }


}



function gameOver() {
    console.log("gameOver");

    document.querySelector("#game").classList.add("hide");
    document.querySelector("#endgame_lose").classList.remove("hide");

    document.querySelector("#you_lose").currentTime = 0;
    document.querySelector("#you_lose").play();
    document.querySelector("#you_lose").volume = 0.6;

    document.querySelector("#spil_igen_pik_2").addEventListener("click", replay);

}

function replay() {
    console.log("spil igen");

    //RYD OP
    document.querySelector("#spil_igen_pik_2").removeEventListener("click", replay);
    document.querySelector("#spil_igen_pik").removeEventListener("click", replay);

    //NYT
    document.querySelector("#spil_igen_pik_2").classList.add("rotation");
    document.querySelector("#spil_igen_pik").classList.add("rotation");

    document.querySelector("#replay").currentTime = 0;
    document.querySelector("#replay").play();
    document.querySelector("#replay").volume = 1;
    document.querySelector("#spil_igen_pik_2").addEventListener("animationend", newGame);
    document.querySelector("#spil_igen_pik").addEventListener("animationend", newGame);


}

function levelComplete() {
    console.log("levelComplete");

    document.querySelector("#game").classList.add("hide");
    document.querySelector("#endgame_won").classList.remove("hide");

    document.querySelector("#level_complete").currentTime = 0;
    document.querySelector("#level_complete").play();
    document.querySelector("#level_complete").volume = 0.2;

    document.querySelector("#spil_igen_pik").addEventListener("click", replay);

}

function newGame() {
    console.log("newGame");
    //    document.getElementById("#screen").sidenVises();
    document.querySelector("#spil_igen_pik_2").classList.remove("rotation");
    document.querySelector("#spil_igen_pik").classList.remove("rotation");

    sidenVises();
}
