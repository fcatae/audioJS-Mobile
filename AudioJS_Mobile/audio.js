function init() {
    createjs.Sound.registerSound({ id: "audiobg", src: "audio/M-GameBG.mp3" });
}

function log(text) {
    var msgstatus = document.getElementById("status");
    msgstatus.textContent = text;
}

function assert(condition) {
    if (condition != true) {
        document.bgColor = "red";
    }
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
    
    var soundinstance = createjs.Sound.play("audio/M-GameBG.mp3");

    soundinstance.addEventListener("failed", function () {
        log("play failed");
    });

    log(soundinstance.playState);

    // Do we have an active Plugin
    var hasActivePlugin = createjs.Sound.activePlugin;
    assert(hasActivePlugin != null);

    //var isComplete = createjs.Sound.loadComplete("audio/M-GameBG.mp3")
    //log(isComplete);

}