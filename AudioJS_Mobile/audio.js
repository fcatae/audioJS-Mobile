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

    snd.play();
    log("playing HTML Audio");

    assert(snd.readyState === 4); // FALSE!!!
}

function soundjsplay() {
        
    var soundinstance = createjs.Sound.play("audio/Game-Spawn.mp3", {loop: -1});
    
}