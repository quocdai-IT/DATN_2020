const HashMap = require("hashmap");
const Queue = require("queue-fifo");

class Duplicate {
  constructor(maxSize) {
    this.MAX_SIZE = maxSize || 1000;
    this.queue = new Queue();
    this.hashMap = new HashMap();
  }

  insert(element, data) {
    if (this.queue.size() >= this.MAX_SIZE) {
      this.hashMap.delete(this.queue.dequeue());
    }
    this.queue.enqueue(element);
    this.hashMap.set(element, data || true);
  }
  exists(element) {
    return this.hashMap.has(element);
  }
  get(element) {
    return this.hashMap.get(element);
  }

  set(element, data) {
    return this.hashMap.set(element, data || true);
  }

  cleanAll() {
    this.queue.clear();
    this.hashMap.clear();
  }
}

module.exports = Duplicate;
