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

function dump(obj) {
    var result = "";
    for (prop in obj) {
        var pair = prop + "=" + obj[prop];
        result += pair + ";";
    }

    return result;
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

    var src = "audio/M-GameBG.mp3";

    // Do we have an active Plugin
    var hasActivePlugin = createjs.Sound.activePlugin;
    assert(hasActivePlugin != null);

    // Create an invalid SoundInstance
    var inst3 = createjs.Sound.createInstance("invalid");
    assert(inst3.toString() === "[Sound Default Sound Instance]");

    // Create a SoundInstance
    var instance = createjs.Sound.createInstance(src);
    assert(instance != null);

    // Check whether it is a dummy sound instance
    assert(instance.toString() !== "[Sound Default Sound Instance]");


    //var isComplete = createjs.Sound.loadComplete("audio/M-GameBG.mp3")
    //log(isComplete);

}