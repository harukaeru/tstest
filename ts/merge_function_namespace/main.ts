function printHello(name: string): void {
    console.log(printHello.prefix + name + printHello.suffix);
}

namespace printHello {
    export let prefix: string = "Hello, ";
    export let suffix: string = "!!";
}

printHello("Ken");
