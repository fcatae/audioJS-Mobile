#Hotfix for SoundJS

##PROBLEM
SoundJS does not work on Windows Phone 8.0

##CAUSE
For unknown reason Internet Explorer running in Windows Phone 8.0 does not
update the "readyState" for the HTML Audio element. It does not call the
readystatechange event either. 

##WORKAROUND
Manually update the "readyState" based on the "canplay" event. It is not
fully equivalent, but it works.

