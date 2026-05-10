function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

const nums = [3, 2, 2, 3];
const val = 3;

console.log(removeElement(nums, val));

// Works on local machine
// function removeElement(nums: number[], val: number): number {
//   let newArray = [];
//   let value = val;
//   newArray = nums.filter((filterVal) => filterVal !== value);
//   console.log(newArray);
//   return newArray.length;
// }
