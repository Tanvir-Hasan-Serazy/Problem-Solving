function groupAnagrams(strs: string[]): string[][] {
  let map: Map<string, string[]> = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(str);
  }
  return Array.from(map.values());
}

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(groupAnagrams(strs));
