function init() {
}

function log(text) {
    var msgstatus = document.getElementById("status");
    msgstatus.textContent = text;
}

function htmlplay() {
    var snd = document.querySelector("audio");
    snd.play();
    log("playing HTML Audio");
}

function soundjsplay() {

    createjs.Sound.addEventListener("fileload", function (evt) {
        log("File loaded");
    });

    createjs.Sound.registerSound({ id: "audiobg", src: "audio/M-GameBG.mp3" });

    var soundinstance = createjs.Sound.play("audio/M-GameBG.mp3");

    soundinstance.addEventListener("failed", function () {
        log("play failed");
    });

    log("playing soundJS Audio");
}