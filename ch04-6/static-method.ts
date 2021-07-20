export class C {
    static whoAreyou(): string {
        return `I'm class C`
    }
}

export class D {
    static whoAreyou(): string {
        return `I'm class D`
    }
}

console.log(C.whoAreyou())
console.log(D.whoAreyou())