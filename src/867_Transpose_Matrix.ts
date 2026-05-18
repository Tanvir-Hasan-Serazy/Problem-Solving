function transpose(matrix: number[][]): number[][] {
  if (matrix.length === 0) {
    return [];
  }
  let rows = matrix.length;
  let cols = matrix[0].length;

  const res: number[][] = Array.from({ length: cols }, () => new Array(rows));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      res[c][r] = matrix[r][c];
    }
  }
  return res;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix));
