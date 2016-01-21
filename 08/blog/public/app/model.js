System.register(['./model/post', './model/user'], function(exports_1) {
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
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=model.js.map