System.register(['./service/post', './service/user', './service/login', './service/headers'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (post_1_1) {
                exportStar_1(post_1_1);
            },
            function (user_1_1) {
                exportStar_1(user_1_1);
            },
            function (login_1_1) {
                exportStar_1(login_1_1);
            },
            function (headers_1_1) {
                exportStar_1(headers_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=service.js.map