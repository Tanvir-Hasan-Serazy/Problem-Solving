function findNextGreater(num: number, arr: number[]) {
  let idx = arr.indexOf(num);
  if (idx === -1) return -1;

  for (let i = idx; i < arr.length; i++) if (arr[i] > num) return arr[i];
  return -1;
}

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  return nums1.map((num) => findNextGreater(num, nums2));
}
const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums1));
