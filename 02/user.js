class User {
    constructor(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    hello() {
        return "Hello, " + this.fullname;
    }
}
var user = new User("Mary", "Jane");
alert(user.hello());
//# sourceMappingURL=user.js.map