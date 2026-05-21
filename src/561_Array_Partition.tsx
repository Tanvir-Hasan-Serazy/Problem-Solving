function arrayPairSum(nums: number[]): number {
  let sortedArray = nums.sort();
  let sum = 0;
  for (let i = 0; i < sortedArray.length - 1; i = i + 2) {
    sum = sum + sortedArray[i];
  }

  return sum;
}

const nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums));
