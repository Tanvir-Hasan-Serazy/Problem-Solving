function majorityElement(nums: number[]): number {
  let candidate = 0;
  let count = 0;
  for (let n of nums) {
    if (count === 0) {
      candidate = n;
    }

    if (n === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

const nums = [3, 3, 2];
console.log(majorityElement(nums));
