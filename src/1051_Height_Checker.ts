function heightChecker(heights: number[]): number {
  let sortedHeight = [...heights].sort((a, b) => a - b);
  //   let sortedHeight = heights.toSorted((a, b) => a - b);
  let misMatch = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeight[i]) {
      misMatch++;
    }
  }
  return misMatch;
}

const heights = [5, 1, 2, 3, 4];
console.log(heightChecker(heights));
