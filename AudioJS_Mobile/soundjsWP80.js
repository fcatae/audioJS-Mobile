(function () {

    var _proxyCreateTag = null;

    function installHotfix() {

        if (createjs && createjs.HTMLAudioPlugin && (_proxyCreateTag == null)) {
            // patch _createTag function
            var p = createjs.HTMLAudioPlugin.prototype;
            _proxyCreateTag = p._createTag;
            p._createTag = hotfixReadyState;
        }

    }

    function hotfixReadyState(src) {
        var tag = _proxyCreateTag(src);

        tag.addEventListener("canplay", function () {
            Object.defineProperty(tag, "readyState", { value: 4 });
        });

        return tag;
    }

    function isWindowsPhone80() {
        var useragent = navigator.userAgent;
        var checkWP80 = /Windows Phone 8.0/i.test(useragent.toLowerCase());
        var checkIE10 = /MSIE 10.0/i.test(useragent.toLowerCase());

        return (checkWP80 && checkIE10);
    }

    installHotfix();
})();