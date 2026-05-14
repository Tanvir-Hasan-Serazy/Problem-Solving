function singleNumber(nums: number[]): number {
  let res = 0;

  for (const n of nums) {
    res = res ^ n;
  }
  return res;
}

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
