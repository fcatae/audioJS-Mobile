#Hotfix for SoundJS (WP 8.0)

##PROBLEM
SoundJS does **NOT** play music on Windows Phone 8.0. 

##CAUSE
For unknown reason Internet Explorer running in Windows Phone 8.0 does not
update the "readyState" for the HTML Audio element. It does not call the
readystatechange event either. 

	var tag = document.createElement("audio");

	if( tag.readyState ===4 ) {
		// It never reaches this point
	}


##WORKAROUND
Added an event to manually update the "readyState" based on the "canplay" event.
It is not fully equivalent, but it does the trick.

    tag.addEventListener("canplay", function () {
        Object.defineProperty(tag, "readyState", { value: 4 });
    });

In order to provide a quick fix for HTMLAudioPlugin, we modified the prototype
and provided another implementation for _createTag function. 

    var proto = createjs.HTMLAudioPlugin.prototype;
    proto._createTag = function hotfixSoundJSforWP80() {
		...
	};
