function isPalindrome(s: string): boolean {
  // if empty string return true
  if (s.trim() === "") {
    return true;
  }

  let str = "";

  // first convert the string into lowercase
  const lowerString = s.toLowerCase();

  // join the string if it's alpha-numeric
  for (let i = 0; i <= lowerString.length - 1; i++) {
    if (
      (lowerString[i] >= "a" && lowerString[i] <= "z") ||
      (lowerString[i] >= "0" && lowerString[i] <= "9")
    ) {
      str += lowerString[i];
    }
  }

  // use two-pointers
  // keep pointer on first and last end
  // if it's a palindrome means first and last char will have
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // same ASCII characters
    // if same ASCII characters increase the pointers
    if (str.charCodeAt(left) === str.charCodeAt(right)) {
      left++;
      right--;
    } else {
      // else not a palindrome
      return false;
    }
  }

  return true;
}
