class Man {
    public static loveName: string = "Amy";
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let man = new Man("Kenny");
// 🍺  CATCH ERROR
// ERROR in ./ts/static/main.ts
// (11,17): error TS2339: Property 'loveName' does not exist on type 'Man'.
// 🍻  console.log(man.loveName);

console.log(Man.loveName);
