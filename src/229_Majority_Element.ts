function majorityElement(nums: number[]): number[] {
  // Use union with null so TS doesn’t complain about use-before-assign
  let cand1: number | null = null;
  let cand2: number | null = null;
  let cnt1 = 0;
  let cnt2 = 0;

  // 1) Voting pass: find up to two candidates
  for (const x of nums) {
    if (cand1 !== null && x === cand1) {
      cnt1++;
    } else if (cand2 !== null && x === cand2) {
      cnt2++;
    } else if (cnt1 === 0) {
      cand1 = x;
      cnt1 = 1;
    } else if (cnt2 === 0) {
      cand2 = x;
      cnt2 = 1;
    } else {
      cnt1--;
      cnt2--;
    }
  }

  // 2) Verification pass: recount actual frequencies
  cnt1 = 0;
  cnt2 = 0;
  for (const x of nums) {
    if (cand1 !== null && x === cand1) cnt1++;
    else if (cand2 !== null && x === cand2) cnt2++;
  }

  const res: number[] = [];
  const threshold = Math.floor(nums.length / 3);

  if (cand1 !== null && cnt1 > threshold) res.push(cand1);
  if (cand2 !== null && cand2 !== cand1 && cnt2 > threshold) res.push(cand2);

  return res;
}

const nums = [1, 2];
console.log(majorityElement(nums));
