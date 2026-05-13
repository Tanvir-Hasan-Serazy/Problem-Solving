function generate(numRows: number): number[][] {
  let res = [];
  if (numRows >= 1) {
    res.push([1]);
  }

  if (numRows >= 2) {
    res.push([1, 1]);
  }

  for (let i = 2; i < numRows; i++) {
    let first = 1;
    let last = 1;
    let prevArray: number[] = res[i - 1];
    if (prevArray.length === 2) {
      res.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;
      let add = [];
      while (right < prevArray.length) {
        add.push(prevArray[left] + prevArray[right]);
        left++;
        right++;
      }
      res.push([first, ...add, last]);
    }
  }
  return res;
}

const numRows = 5;
console.log(generate(numRows));
