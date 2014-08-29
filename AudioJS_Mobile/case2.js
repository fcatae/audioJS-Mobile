function init() {
    createjs.Sound.registerSound({ id: "audiobg", src: "audio/Game-Spawn.mp3" });
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

function htmlplay() {
    var snd = document.querySelector("audio");

    // Duration is undefined
    assert(!isNaN(snd.duration));

    // StartTime relies on currentTime, which is broken
    snd.currentTime = 15;
    assert(snd.currentTime == 15);

    // Loop is broken
    snd.loop = -1;

    snd.play();
}

function soundjsplay() {

    // Loop logic is BROKEN        
    var soundinstance = createjs.Sound.play("audio/Game-Spawn.mp3", { loop: -1 });

    //log("BUG#2: LOOP PROBLEM : FIXED");
    //var soundinstance = createjs.Sound.play("audiobg", { startTime: 1000, duration: 400, loop: -1 });
    // however, startTime is still not respected
}