function intersection(nums1: number[], nums2: number[]): number[] {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let common_element: number[] = [];

  set1.forEach((element) => {
    if (set2.has(element)) {
      common_element.push(element);
    }
  });
  return common_element;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersection(nums1, nums2));
