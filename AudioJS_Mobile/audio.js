function init() {

    hotfix();

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

function success(text) {
    document.bgColor = "green";
    document.getElementById("message").textContent = text;
}


function dumpprops(obj) {
    var result = "";
    for (prop in obj) {
        result += prop + ";";
    }

    log(result);
}

function dump(obj) {
    var result = "";
    for (prop in obj) {
        var pair = prop + "=" + obj[prop];
        result += pair + ";";
    }

    log(result);
}

function hotfix() {

    var p = createjs.HTMLAudioPlugin.prototype;
    var oldCreateTag = p._createTag;
    p._createTag = function (src) {

        var tag = oldCreateTag(src);

        tag.addEventListener("canplay", function () {
            Object.defineProperty(tag, "readyState", { value: 4 });
            success("HOTFIX");
        });

        return tag;
    }

}

function htmlplay() {
    var snd = document.querySelector("audio");

    snd.play();
    log("playing HTML Audio");

    assert(snd.readyState === 4); // FALSE!!!
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

    // Assume we are working with HTMLAudioPlugin
    assert(createjs.Sound.activePlugin instanceof createjs.HTMLAudioPlugin);
    assert(!(createjs.Sound.activePlugin instanceof createjs.WebAudioPlugin));

    // Create a SoundInstance from the HTML plugin
    var htmlinstance = new createjs.HTMLAudioPlugin.SoundInstance(src, createjs.HTMLAudioPlugin);
    assert(htmlinstance != null);

    instance.pause();
    instance.resume();


    //var isComplete = createjs.Sound.loadComplete("audio/M-GameBG.mp3")
    //log(isComplete);

}