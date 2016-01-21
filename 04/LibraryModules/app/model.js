System.register(['./model/video', './model/playlist'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (video_1_1) {
                exportStar_1(video_1_1);
            },
            function (playlist_1_1) {
                exportStar_1(playlist_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=model.js.map