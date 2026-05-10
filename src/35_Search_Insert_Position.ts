function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const val = nums[mid];
    if (val === target) {
      return mid;
    }
    if (val < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

const nums = [1, 3, 5, 6];
const target = 7;

console.log(searchInsert(nums, target));

// This passed the test cases but not optimal, Complexity O(n log n)
// function searchInsert(nums: number[], target: number): number | undefined {
//   let pos;
//   let newArray: number[] = nums;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return (pos = i);
//     } else {
//       newArray.push(target);
//       newArray.sort();
//       if (nums[i] === target) {
//         pos = i;
//         return pos;
//       }
//       console.log(newArray);
//     }
//   }
//   return pos;
// }
