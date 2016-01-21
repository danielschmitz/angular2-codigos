System.register(['./model'], function(exports_1) {
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
            })();
            exports_1("Mock", Mock);
        }
    }
});
//# sourceMappingURL=mock.js.map