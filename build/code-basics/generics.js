"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// first
function last1(coll) {
    return coll.length > 0 ? coll[coll.length - 1] : null;
}
const s = {
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
const coll = {
    items: [],
    push(value) {
        return this.items.push(value);
    },
    filter(callback) {
        const newItems = this.items.filter(callback);
        return Object.assign(Object.assign({}, this), { items: newItems });
    },
};
coll.push(1); // 1
coll.push(10); // 2
coll.push(99); // 3
const newColl = coll.filter((value) => value % 2 == 0);
console.log(newColl.items); // [10]
const map = {
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
function asyncMap(arr, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = arr.map((item, index) => __awaiter(this, void 0, void 0, function* () {
            const result = yield item;
            return callback(result, index);
        }));
        return Promise.all(promises);
    });
}
const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
    console.log(result); // [0, 2, 6]
});
//six
class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(el) {
        this.data.push(el);
    }
    dequeue() {
        if (this.data.length === 0) {
            throw new Error('Queue is empty');
        }
        return this.data.shift();
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.dequeue(); // 1
queue.dequeue(); // Error: Queue is empty
