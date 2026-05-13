class MyHashSet<T> {
  private hashSet: T[];

  constructor() {
    this.hashSet = [];
  }

  add(s: T): void {
    if (!this.hashSet.includes(s)) {
      this.hashSet.push(s);
    }
  }

  remove(s: T): void {
    const idx = this.hashSet.indexOf(s);
    if (idx >= 0) {
      this.hashSet.splice(idx, 1); // remove the single element at idx
    }
  }

  contains(s: T): boolean {
    return this.hashSet.includes(s);
  }
}
