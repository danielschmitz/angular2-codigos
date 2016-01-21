System.register([], function(exports_1) {
    var Video;
    return {
        setters:[],
        execute: function() {
            Video = (function () {
                function Video(id, title, url, desc) {
                    this.id = id;
                    this.title = title;
                    this.url = url;
                    this.desc = desc;
                }
                return Video;
            })();
            exports_1("Video", Video);
        }
    }
});
//# sourceMappingURL=video.js.map