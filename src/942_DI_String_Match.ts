function diStringMatch(s: string): number[] {
  let low = 0;
  let high = s.length;
  const result: number[] = [];

  for (const char of s) {
    if (char === "I") {
      result.push(low);
      low++;
    } else {
      result.push(high);
      high--;
    }
  }

  // At the end, low == high. This is the last remaining number.
  result.push(low);

  return result;
}
