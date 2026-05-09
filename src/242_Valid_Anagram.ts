function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  let sortedStr1 = s.split("").sort().join("");
  let sortedStr2 = t.split("").sort().join("");

  if (sortedStr1 === sortedStr2) {
    return true;
  }
  return false;
}

const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));
