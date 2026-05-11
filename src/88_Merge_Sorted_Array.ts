function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let last = m + n - 1;
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m = m - 1;
    } else {
      nums1[last] = nums2[n - 1];
      n = n - 1;
    }
    last = last - 1;
  }
  while (n > 0) {
    nums1[last] = nums2[n - 1];
    n = n - 1;
    last = last - 1;
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

console.log(merge(nums1, m, nums2, n));
