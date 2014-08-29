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
    var snd = document.getElementById("aud1");
        
    // SOLUTION
    var startTime = 15; // seconds

    // 1) Play event: pause the current sound if it is not adjusted yet
    snd.addEventListener("play", function () {
        if (snd.currentTime < startTime) {
            snd.currentTime = startTime;
        }
    });

    // 2) Playing event: set up the correct position and un-pause
    snd.addEventListener("playing", function () {                
        if (snd.currentTime < startTime) {
            snd.pause();
            snd.currentTime = startTime;
        }
    });
    
    // 3) Ready to play!        

    // stop
    if (snd.paused) {
        snd.pause();
    }
    snd.currentTime = 15;

    // play
    snd.play();
    
    // 4) Keep retry logic
    var idInterval = setInterval(function () {
        snd.play();
        if (snd.currentTime >= startTime) {
            log("teste2: time=" + snd.currentTime + " - " + Date.now());
            clearInterval(idInterval);
        }
    }, 1);

    // Just for debugging
    setInterval(function () {
        log("teste2: time=" + snd.currentTime + " - " + Date.now());
    }, 1000);
}

var soundinstance = null;
function soundjsplay() {
    log("soundjsplay");

    // BUG#3 : Audio.Stop does not work
    // Cause: Close() doesnt change the AUDIO.currentTime.
    // Resolution:
    // add the code 
    // if (this.tag) {
    //    this.tag.currentTime = 1000 * this._startTime || 0; // FIXED THE TIMING ISSUE

    // the bug normally happens after clicking the button several times (minutes)
    createjs.Sound.stop();
    soundinstance = createjs.Sound.play("myaud"); 
    soundinstance.addEventListener("complete", function (evt) {
        log("ended:" + evt);
    });

}