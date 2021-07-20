type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = function (a: string, b: number): void { }
let g: stringNumberFunc = function (c: string, d: number) { }
let h: stringNumberFunc = function () { }
f('a', 1);
g('b', 2);
h()