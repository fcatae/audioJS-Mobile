﻿function init() {
    //createjs.HTMLAudioPlugin.MAX_INSTANCES = 1;
    createjs.Sound.registerSound({ id: "audiobg", src: "audio/M-GameBG.mp3" });

    //createjs.Sound.registerSound({
    //        src: "audio/M-GameBG.mp3",
    //        data: {
    //            audioSprite: [
    //                { id: "audiobg", startTime: 0, duration: 10000 },
    //                { id: "audiobg2", startTime: 12000, duration: 1000 },
    //                { id: "audiobg3", startTime: 15000, duration: 5000 },
    //            ]
    //        }
    //});
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

    snd.currentTime = 0.001;

    snd.play();
}

var soundinstance = null;
function soundjsplay() {
        
    //if (soundinstance != null) {
    //    soundinstance.stop();
    //}
    //createjs.Sound.stop();
    
    log("OI");
    var soundinstance = createjs.Sound.play("audiobg", { startTime: 1000, duration: 400 });
    log(soundinstance.getDuration());
    //log(soundinstance);
    //soundinstance.play();

    // bug 1: duration = NaN
    // bug 2: offset = 0 nao funciona
}