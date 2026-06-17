function commonChars(words: string[]): string[] {
  if (words.length === 1) {
    return words[0].split("");
  }

  let result: string[] = [];
  let chars = new Set(words[0]);

  chars.forEach((char) => {
    let frequency = Infinity;
    words.forEach((word) => {
      let count = word.split("").filter((c) => c === char).length;
      frequency = Math.min(frequency, count);
    });

    for (let i = 0; i < frequency; i++) {
      result.push(char);
    }
  });

  return result;
}
