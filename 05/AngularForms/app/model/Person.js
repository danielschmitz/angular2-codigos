System.register([], function(exports_1) {
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
            })();
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=Person.js.map