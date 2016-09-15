System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Video;
    return {
        setters:[],
        execute: function() {
            class Video {
                constructor(id, title, url, desc) {
                    this.id = id;
                    this.title = title;
                    this.url = url;
                    this.desc = desc;
                }
            }
            exports_1("Video", Video);
        }
    }
});
//# sourceMappingURL=video.js.map