function minOperations(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum % k;
}

const nums = [4, 1, 3];
const k = 4;

console.log(minOperations(nums, k));
