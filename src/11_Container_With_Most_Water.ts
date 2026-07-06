function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maximumArea = 0;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);

    maximumArea = Math.max(area, maximumArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maximumArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
