function mergeAlternately(word1: string, word2: string): string {
  const len = Math.max(word1.length, word2.length);

  let ans = "";

  for (let i = 0; i < len; i++) {
    if (word1[i]) {
      ans = ans + word1[i];
    }

    if (word2[i]) {
      ans = ans + word2[i];
    }
  }

  return ans;
}

const word1 = "ab";
const word2 = "pqrs";

console.log(mergeAlternately(word1, word2));
