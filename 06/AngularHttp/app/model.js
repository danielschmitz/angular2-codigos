System.register(['./user/user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (user_1_1) {
                exportStar_1(user_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=model.js.map