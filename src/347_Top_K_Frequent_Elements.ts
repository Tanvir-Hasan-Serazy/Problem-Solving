function topKFrequent(nums: number[], k: number): number[] {
  const seen: Record<number, number> = {};

  for (let num of nums) {
    if (seen[num] === undefined) {
      seen[num] = 1;
    } else {
      seen[num]++;
    }
  }

  const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (let i = 0; i < nums.length; i++) {
    bucket.push([]);
  }

  for (let key in seen) {
    let count = seen[key];
    bucket[count].push(Number(key));
  }

  let res: number[] = [];

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length === 0) {
      continue;
    } else {
      res = [...res, ...bucket[i]];
    }
  }

  return res.slice(0, k);
}

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k));
