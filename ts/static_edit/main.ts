class StaticX {
    static X: string = "this is x";
}

let sx: typeof StaticX = StaticX
sx.X = "this is y";

console.log(StaticX.X);
