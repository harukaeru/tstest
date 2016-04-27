class Person {
    private _name: string;
    public password: string;

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        if (this.password == "PASSWORD") {
            this._name = name;
        } else {
            console.log("PASSWORD IS INCORRECT");
        }
    }
}

let person = new Person()
person.password = "INCORRECT";
person.name = "Johnny"; // -> PASSWORD IS INCORRECT
console.log(person.name); // -> undefined

console.log("--------------------");
person.password = "PASSWORD";
person.name = "Johnny";
console.log(person.name); // -> Johnny
