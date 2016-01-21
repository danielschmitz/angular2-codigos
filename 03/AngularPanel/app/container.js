System.register(['./container/panel'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (panel_1_1) {
                exportStar_1(panel_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=container.js.map