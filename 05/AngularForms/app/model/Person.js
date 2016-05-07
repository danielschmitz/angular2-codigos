System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
                function Person(id, name, email, birthdate) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.birthdate = birthdate;
                }
                return Person;
            }());
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=Person.js.map