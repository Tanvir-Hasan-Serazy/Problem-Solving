class MyHashMap {
  private hashmap: Array<[number, number] | undefined>;

  constructor() {
    this.hashmap = [];
  }

  put(key: number, value: number): void {
    this.hashmap[key] = [key, value];
  }

  get(key: number): number {
    return this.hashmap[key]?.[1] ?? -1;
  }

  remove(key: number): void {
    delete this.hashmap[key];
  }
}

const hm = new MyHashMap();
hm.put(1, 100);
console.log(hm.get(1));
console.log(hm.get(2));
hm.remove(1);
console.log(hm.get(1));
