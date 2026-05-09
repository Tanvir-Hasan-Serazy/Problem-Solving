function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
}

const nums = [1, 3, 2, 1];

console.log(getConcatenation(nums));
