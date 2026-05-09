function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];
  let result = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      result = result + first[i];
    } else {
      break;
    }
  }
  return result;
}

const strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));
