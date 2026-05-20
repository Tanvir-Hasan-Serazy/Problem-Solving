function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (k === 0 || nums.length === 0) {
    return false;
  }

  let window = new Set<number>();
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (right - left > k) {
      window.delete(nums[left]);
      left = left + 1;
    }

    if (window.has(nums[right])) {
      return true;
    }
    window.add(nums[right]);
  }
  return false;
}

const nums = [1, 2, 3, 1, 2, 3];
const k = 2;

console.log(containsNearbyDuplicate(nums, k));
