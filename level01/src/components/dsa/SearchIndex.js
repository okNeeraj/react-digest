let arr = [1, 3, 5, 4, 6, 5, 8];
let item = 5;
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (item === arr[i]) {
    result.push(arr[i]);
    break;
  }
}

console.log(result);
