let arr = [1, 3, 5, 4];
let n = 9;
let p = 3;

for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= p) {
    console.log(i);
    arr[i + 1] = arr[i];
    if (i === p) {
      arr[p] = n;
    }
  }
}

console.log(arr);
