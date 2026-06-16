function sortColors(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));

// function sortColors(nums: number[]): void {
//   nums.sort((a, b) => a - b);
// }

// const nums = [2, 0, 2, 1, 1, 0];
// console.log(sortColors(nums));
