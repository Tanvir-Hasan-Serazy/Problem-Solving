function firstMissingPositive(nums: number[]): number {
  // Cleaing the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i] > nums.length) {
      nums[i] = nums.length + 1;
    }
  }

  //Markign the presence with loop
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    if (num > nums.length) {
      continue;
    }
    if (nums[num - 1] > 0) {
      nums[num - 1] = -nums[num - 1];
    }
  }

  //   Finding the missing positive
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return nums.length + 1;
}

const nums = [3, 4, -1, 1];
console.log(firstMissingPositive(nums));
