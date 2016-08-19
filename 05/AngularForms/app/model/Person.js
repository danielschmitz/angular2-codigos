System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            class Person {
                constructor(id, name, email, birthdate) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.birthdate = birthdate;
                }
            }
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=Person.js.map