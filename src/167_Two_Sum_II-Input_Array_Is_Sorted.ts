function twoSum(numbers: number[], target: number): number[] {
  let map = new Map();

  for (let index = 0; index < numbers.length; index++) {
    let complement = target - numbers[index];
    if (map.has(complement)) {
      return [map.get(complement), index + 1];
    }
    map.set(numbers[index], index + 1);
  }

  return [];
}

const numbers = [-1, 0];
const target = -1;
console.log(twoSum(numbers, target));
