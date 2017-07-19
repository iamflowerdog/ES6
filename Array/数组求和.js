

console.log(arraySum([1, 2, 4, 9,"hello", {name:123}]));

function arraySum(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

