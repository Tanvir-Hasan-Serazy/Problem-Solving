function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

const nums = [1, 2, 3, 1];

console.log(containsDuplicate(nums));

// function containsDuplicate(nums: number[]): boolean {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function containsDuplicate(nums: number[]): boolean {
//   for (let i = 0; i < nums.length; i++) {
//     let element1 = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       let element2 = nums[j];
//       if (element1 === element2) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
