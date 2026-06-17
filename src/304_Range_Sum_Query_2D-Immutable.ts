class NumMatrix {
  private prefSum: number[][];

  constructor(matrix: number[][]) {
    let rowCount = matrix.length;
    let colCount = matrix[0].length;
    this.prefSum = Array(rowCount);

    for (let i = 0; i < rowCount; i++) {
      this.prefSum[i] = Array(colCount);
      let rowCount = 0;
      for (let j = 0; j < colCount; j++) {
        this.prefSum[i][j] =
          (this.prefSum[i - 1]?.[j] || 0) + rowCount + matrix[i][j];
        rowCount += matrix[i][j];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let endPrefSum = this.prefSum[row2][col2];
    let startPrefSum = this.prefSum[row1 - 1]?.[col1 - 1] || 0;

    let leftPrefSum = this.prefSum[row2]?.[col1 - 1] || 0;
    let bottomPrefSum = this.prefSum[row1 - 1]?.[col2] || 0;

    return endPrefSum - leftPrefSum - bottomPrefSum + startPrefSum;
  }
}

const obj = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

console.log(obj.sumRegion(2, 1, 4, 3));
console.log(obj.sumRegion(1, 1, 2, 2));
console.log(obj.sumRegion(1, 2, 2, 4));
