class User {
    constructor(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    hello() {
        return "Hello, " + this.fullname;
    }
}
var user = new User("Mary", "Jane");
document.body.innerHTML = user.hello();
//# sourceMappingURL=user.js.map