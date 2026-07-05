function fourSum(nums: number[], target: number): number[][] {
  let ans: number[][] = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < len; ) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let p = j + 1;
      let q = len - 1;
      while (p < q) {
        let sum = nums[i] + nums[j] + nums[p] + nums[q];

        if (sum < target) {
          p++;
        } else if (sum > target) {
          q--;
        } else {
          ans.push([nums[i], nums[j], nums[p], nums[q]]);
          p++;
          q--;

          while (p < q && nums[p] === nums[p - 1]) {
            p++;
          }
        }
      }
      j++;
      while (j < len && nums[j] === nums[j - 1]) {
        j++;
      }
    }
  }

  return ans;
}

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target));
