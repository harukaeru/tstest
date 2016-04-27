// Called
export class A {
    x = 1;
}

// Not Called
class B {
    x = 2;
}

// Not Called yet.
class C {
    x = 3;
}

// To be Called
export { C };
