function map(arr, func) {
  //   return arr.map((item) => {
  //     return func(item);
  //   });
  let newArr = [];
  arr.forEach((element) => newArr.push(func(element)));
  return newArr;
}

function reduce(arr, func, start) {
  let x;
  let i;
  if (start) {
    x = start;
    i = 0;
  } else {
    x = arr[0];
    i = 1;
  }
  for (; i < arr.length; i++) {
    x = func(arr[i], x);
  }
  return x;
}
