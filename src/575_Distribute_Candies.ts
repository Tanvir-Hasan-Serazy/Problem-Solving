function distributeCandies(candyType: number[]): number {
  let numOfCandies = candyType.length / 2;
  let howManyType = new Set(candyType);

  let canEat = Math.min(howManyType.size, numOfCandies);
  return canEat;
}

const candyType = [6, 6, 6, 6];
console.log(distributeCandies(candyType));
