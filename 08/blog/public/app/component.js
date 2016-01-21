System.register(['./component/home', './component/login', './component/addpost'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (home_1_1) {
                exportStar_1(home_1_1);
            },
            function (login_1_1) {
                exportStar_1(login_1_1);
            },
            function (addpost_1_1) {
                exportStar_1(addpost_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=component.js.map