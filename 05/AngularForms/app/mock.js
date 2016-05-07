System.register(['./model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var model_1;
    var Mock;
    return {
        setters:[
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            Mock = (function () {
                function Mock() {
                    this.mike = new model_1.Person(1, "Mike", "mike@gmail");
                }
                return Mock;
            }());
            exports_1("Mock", Mock);
        }
    }
});
//# sourceMappingURL=mock.js.map