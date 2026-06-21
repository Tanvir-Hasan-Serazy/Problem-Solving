function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let cur = num,
        len = 1;
      while (set.has(cur + 1)) {
        cur++;
        len++;
      }
      longest = Math.max(longest, len);
    }
  }
  return longest;
}

const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
