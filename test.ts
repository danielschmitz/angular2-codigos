class Greeter {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    public greet() : string {
        return "Hello, " + this.greeting;
    }
}
 
var greeter:Greeter = new Greeter("world");
var message:string = greeter.greet();