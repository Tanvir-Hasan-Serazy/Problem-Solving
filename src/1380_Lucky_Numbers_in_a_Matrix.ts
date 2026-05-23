function luckyNumbers(matrix: number[][]): number[] {
  let result: number[] = [];
  let colMax = new Map<number, number>();

  const findColMax = (col: number) => {
    if (colMax.has(col)) {
      return colMax.get(col);
    }

    const column = matrix.map((row) => row[col]);
    const max = Math.max(...column);
    colMax.set(col, max);
    return max;
  };

  for (const row of matrix) {
    const min = Math.min(...row);
    const minIndex = row.indexOf(min);
    const max = findColMax(minIndex);
    if (min === max) {
      result.push(min);
    }
  }

  return result;
}

const matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
];
console.log(luckyNumbers(matrix));
