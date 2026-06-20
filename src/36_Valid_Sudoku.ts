function isValidSudoku(board: string[][]): boolean {
  const rows: boolean[][] = Array.from({ length: 9 }, () =>
    Array(9).fill(false),
  );

  const columns: boolean[][] = Array.from({ length: 9 }, () =>
    Array(9).fill(false),
  );

  const boxes: boolean[][] = Array.from({ length: 9 }, () =>
    Array(9).fill(false),
  );

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        const num = board[i][j].charCodeAt(0) - "1".charCodeAt(0);
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (rows[i][num] || columns[j][num] || boxes[boxIndex][num]) {
          return false;
        }

        rows[i][num] = columns[j][num] = boxes[boxIndex][num] = true;
      }
    }
  }

  return true;
}

const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
