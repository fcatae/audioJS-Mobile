function init() {
    //createjs.HTMLAudioPlugin.MAX_INSTANCES = 1;
    createjs.Sound.registerSound({ id: "myaud", src: "audio/M-GameBG.mp3" });

    createjs.Sound.registerSound({
            src: "audio/M-GameBG.mp3",
            data: {
                audioSprite: [
                    { id: "audiobg", startTime: 0, duration: 10000 },
                    { id: "audiobg2", startTime: 12000, duration: 5000 },
                    { id: "audiobg3", startTime: 15000, duration: 5000 }
                ]
            }
    });
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

    snd.currentTime = 15;
    assert(snd.currentTime == 15);

    snd.play();

    //log("prepare to stop");
    ////createjs.Sound.stop();
    //log(soundinstance);
    //soundinstance.stop();
    ////log("stop");
}

var soundinstance = null;
function soundjsplay() {
    log("soundjsplay");
    //log("BUG#2: LOOP PROBLEM : FIXED");
    //var soundinstance = createjs.Sound.play("audiobg", { startTime: 1000, duration: 400, loop: -1 });

    // BUG#3 : Stop does not work : FIXED in NEXT

    //try {
    //    createjs.Sound.stop(); // use stop before -- fixed the code
    //} catch (e) { }

    //soundinstance = createjs.Sound.play("myaud", { startTime: 0, duration: 5000, loop: -1 }); // use start = 0
    
    soundinstance = createjs.Sound.play("myaud", { startTime: 0, duration: 5000



}); // use start = 0
    soundinstance.addEventListener("complete", function (evt) {
        log("ended:" + evt);
        //createjs.Sound.removeSound("myaud");
    });

    log("soundjsplay: end");
}