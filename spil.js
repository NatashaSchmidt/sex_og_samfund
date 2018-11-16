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
    document.querySelector("#titelplay").classList.add("pulse");

}

//function showSettings() {
//    console.log("vis settingsvindue");
//
//    document.querySelector("#settings").classList.remove("hide");
//    document.querySelector("#settings").classList.add("show");
//    document.querySelector("#indstillinger_knap").removeEventListener("click", showSettings);
//    document.querySelector("#kryds").addEventListener("click", showStart);
//    document.querySelector("#luk").addEventListener("click", showStart);
//
//    document.querySelector("#effekter").addEventListener("click", toggleSounds);
//    document.querySelector("#music").addEventListener("click", toggleMusic);
//}
//
//function hideSettings() {
//    console.log("hideSettings");
//    document.querySelector("#settings_screen").classList.add("hide");
//
//}
//
//function toggleSounds() {
//    console.log("toggleSounds");
//
//    if (showSettingsEffektSound == true) {
//        showSettingsEffektSound = false;
//        document.querySelector("#effekter_sprite").classList.remove("off_on");
//        document.querySelector("#effekter_sprite").classList.add("on_off");
//        document.querySelector("#effekter_sprite").addEventListener("animationend", soundsOff);
//
//
//
//    } else {
//        showSettingsEffektSound = true;
//        document.querySelector("#effekter_sprite").classList.remove("off");
//        document.querySelector("#effekter_sprite").classList.add("off_on");
//        document.querySelector("#effekter_sprite").addEventListener("animationend", soundsOn);
//
//
//
//    }
//}
//
//function soundsOff() {
//    console.log("soundsOff" + showSettingsEffektSound);
//
//    document.querySelector("#effekter_sprite").removeEventListener("animationend", soundsOff);
//    document.querySelector("#effekter_sprite").classList.remove("on_off");
//    document.querySelector("#effekter_sprite").classList.add("off");
//
//
//}
//
//function soundsOn() {
//    console.log("soundsOn" + showSettingsEffektSound);
//
//    document.querySelector("#effekter_sprite").removeEventListener("animationend", soundsOn);
//    document.querySelector("#effekter_sprite").classList.remove("off_on");
//    document.querySelector("#effekter_sprite").classList.add("on");
//
//
//
//}
//
//function toggleMusic() {
//    console.log("showSettingsMusic function " + showSettingsMusic);
//    if (showSettingsMusic == true) {
//        showSettingsMusic = false;
//
//        document.querySelector("#music_sprite").classList.remove("off_on");
//        document.querySelector("#music_sprite").classList.add("on_off");
//
//        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);
//
//
//    } else {
//        showSettingsMusic = true;
//
//        document.querySelector("#music_sprite").classList.remove("off");
//        document.querySelector("#music_sprite").classList.add("off_on");
//        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);
//
//
//    }
//}
//
//
//function musicOff() {
//    console.log("musicOff function værdi er " + showSettingsEffektSound);
//
//    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
//    document.querySelector("#music_sprite").classList.remove("on_off");
//    document.querySelector("#music_sprite").classList.add("off");
//
//
//
//    document.querySelector("#myMusic").muted = true;
//
//
//
//}
//
//function musicOn() {
//    console.log("musicOn function værdi er " + showSettingsEffektSound);
//
//    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
//    document.querySelector("#music_sprite").classList.remove("off_on");
//    document.querySelector("#music_sprite").classList.add("on");
//
//
//    document.querySelector("#myMusic").muted = false;
//
//}
//
//
//function hideStart() {
//    console.log("hide start");
//
//
//}
//
//function startIntro() {
//    console.log("start intro");
//
//}
//
//
//
//function introPige() {
//    console.log("introPige");
//}
//
//
//
//function pigeRunde() {
//    console.log("pigeRunde");
//}
//
//
//
//function pigeValg() {
//    console.log("pigeValg");
//}
//
//
//
//function clickRigtigtPige() {
//    console.log("clickRigtigtPige");
//}
//
//
//
//function clickForkertPige() {
//    console.log("clickForkertPige");
//}
//
//
//
//function gameStatusPige() {
//    console.log("gameStatusPige");
//}
//
//
//
//function introDreng() {
//    console.log("introDreng");
//}
//
//
//
//function drengeRunde() {
//    console.log("drengeRunde");
//}
//
//
//
//function drengeValg() {
//    console.log("drengeValg");
//}
//
//
//
//function clickRigtigtDreng() {
//    console.log("clickRigtigtDreng");
//}
//
//
//
//function clickForkertDreng() {
//    console.log("clickForkertDreng");
//}
//
//
//
//function gameStatusDreng() {
//    console.log("gameStatusDreng");
//}
//
//
//
//function gameStatus() {
//    console.log("gameStatus");
//
//}
//
//
//
//function gameOver() {
//    console.log("gameOver");
//
//}
//
//function levelComplete() {
//    console.log("levelComplete");
//
//
//}
//
//function newGame() {
//    console.log("newGame");
//    //    document.getElementById("#screen").sidenVises();
//    location = location.href;
//}
