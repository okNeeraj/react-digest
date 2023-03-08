let arr = [1, 3, 5, 4, 6, 8];
let p = 2;

for (let i = p; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;

console.log(arr);
