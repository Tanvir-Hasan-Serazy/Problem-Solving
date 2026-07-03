function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        //skipping left duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        //skipping right duplicates
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

const nums = [0, 0, 0];
console.log(threeSum(nums));
