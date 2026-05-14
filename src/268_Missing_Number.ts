function missingNumber(nums: number[]): number {
  let result = 0;
  for (let index = 0; index <= nums.length; index++) {
    result = result ^ index;
  }
  for (const n of nums) {
    result = result ^ n;
  }
  return result;
}

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
