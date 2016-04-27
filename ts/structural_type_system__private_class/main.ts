class X1 {
    public x: string;
}

class X2{
    public x: string;
}

let x1 = new X1();
let x2 = new X2();
x1 = x2;


class X3 {
    private x: string;
}

class X4 {
    private x: string;
}

let x3 = new X3();
let x4 = new X4();
// 🍺  CATCH ERROR
// ERROR in ./ts/structural_type_system__private_class/main.ts
// (28,1): error TS2322: Type 'X4' is not assignable to type 'X3'.
//   Types have separate declarations of a private property 'x'.
// 🍻  x3 = x4;
