function rotate(nums: number[], k: number): void {
  let len = nums.length;

  k = k % len;
  if (k === 0) {
    return;
  }

  let array = nums.slice(len - k);

  for (let i = len - 1; i >= k; i--) {
    nums[i] = nums[i - k];
  }

  for (let i = 0; i < k; i++) {
    nums[i] = array[i];
  }

  console.log(nums);
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotate(nums, k));

// function rotate(nums: number[], k: number): void {
//   for (let i = 0; i < k; i++) {
//     const lastElement = nums.pop();
//     if (lastElement !== undefined) {
//       nums.unshift(lastElement);
//     }
//   }
//   console.log(nums);
// }
