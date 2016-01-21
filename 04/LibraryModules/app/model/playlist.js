System.register([], function(exports_1) {
    var Playlist;
    return {
        setters:[],
        execute: function() {
            Playlist = (function () {
                function Playlist() {
                }
                Playlist.prototype.count = function () {
                    return this.videos.length;
                };
                return Playlist;
            })();
            exports_1("Playlist", Playlist);
        }
    }
});
//# sourceMappingURL=playlist.js.map