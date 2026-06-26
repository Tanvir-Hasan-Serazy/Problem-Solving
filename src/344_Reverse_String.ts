function reverseString(s: string[]): void {
  let leftPointer = 0;
  let rightPointer = s.length - 1;
  while (leftPointer < rightPointer) {
    [([s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]])];
    leftPointer++;
    rightPointer--;
  }
  console.log(s);
}

const s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
