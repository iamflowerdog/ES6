
function f(x, y, z) {
    return x + y + z;
}

let args = [0, 1, 5];

//console.log(f.apply(null, args));

let map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');

let map1 = new Map(
    [...map0].filter(([k, v]) => k < 3)
);
// 产生Map结构 {1 => 'a', 2 => 'b'}

console.log(map1);