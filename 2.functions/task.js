// Задание 1
function getArrayParams(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) { max = arr[i]; }
    if (arr[i] < min) { min = arr[i]; }
    sum = sum + arr[i];
  }

  let avg = sum/arr.length;

  return { min:min, max:max, avg:avg.toFixed(2) };
}
getArrayParams([-99, 99, 10])

// Задание 2
let arrOfArr =  [[10,20,30],[-40,-50,-65]];
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { sum += arr[i]; }
  return sum;
}
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    }
  } return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0],
      max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) { max = arr[i]; }
    if (arr[i] < min) { min = arr[i]; }
  }

  return max - min;
}



