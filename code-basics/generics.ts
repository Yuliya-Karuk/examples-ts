// first
function last1 <T> (coll: Array<T>): T | null {
    return coll.length > 0 ? coll[coll.length - 1] : null;
}


// second
type MySet<T> = {
  items: Array<T>;
  has(value: T): boolean;
  add(value: T): number;
};

const s : MySet<number> = {
  items: [],
  has(value) {
    return this.items.includes(value);
  },
  add(value) {
    this.items.push(value);
    return this.items.length;
  },
};
console.log(s.add(1)); // 1
console.log(s.add(10)); // 2

console.log(s.has(1)); // true
console.log(s.has(8)); // false

//third
type MyArray<T> = {
    items: Array<T>;
    push(value: T): number;
    filter(callback: (value: T, index: number, array: Array<T>) => boolean): MyArray<T>;
};

const coll: MyArray<number> = {
  items: [],
  push(value) {
    return this.items.push(value);
  },
  filter(callback) {
    const newItems = this.items.filter(callback);
    return { ...this, items: newItems };
  },
};

coll.push(1); // 1
coll.push(10); // 2
coll.push(99); // 3

const newColl = coll.filter((value) => value % 2 == 0);
console.log(newColl.items); // [10]

//fourth
type MyMap <T, U> = {
  values: Map<T, U>;
  set(key: T, value: U): void;
  get(key: T) : U | undefined;
}

const map: MyMap<string, number> = {
  values: new Map(),
  set(key, value) {
    this.values.set(key, value);
  },
  get(key) {
    return this.values.get(key);
  },
};

map.set('one', 1);
map.set('two', 2);

map.get('one'); // 1
map.get('two'); // 2

//fifth
async function asyncMap<T, P>(arr: Array<Promise < T >>, callback: (item: T, index: number) => P) {
  const promises = arr.map(async (item, index) => {
    const result = await item;
    return callback(result, index);
  });

  return Promise.all(promises);
}

const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
  console.log(result); // [0, 2, 6]
});

//six
class Queue<T> {
  private data: T[] = [];

  enqueue(el: T) : void {
    this.data.push(el);
  }

  dequeue(): T | undefined {
    if (this.data.length === 0) {
      throw new Error('Queue is empty');
    }
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.dequeue(); // 1
queue.dequeue(); // Error: Queue is empty