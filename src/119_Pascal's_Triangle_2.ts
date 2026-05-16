function getRow(rowIndex: number): number[] {
  const rowArr = [1];
  for (let col = 1; col <= rowIndex; col++) {
    rowArr[col] = (rowArr[col - 1] * (rowIndex - (col - 1))) / col;
  }
  return rowArr;
}

const rowIndex = 5;
console.log(getRow(rowIndex));
