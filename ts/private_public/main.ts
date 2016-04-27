class PrivateAnimal {
    private name: string;
    constructor(theName: string) { this.name = theName };
}

// 🍺  CATCH ERROR
// ERROR in ./ts/private_public/main.ts
// (9,1): error TS2341: Property 'name' is private and only accessible within class 'PrivateAnimal'.
// 🍻  new PrivateAnimal("Cat").name;
