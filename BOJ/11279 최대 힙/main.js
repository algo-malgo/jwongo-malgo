class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  getMax() {
    return this.heap[1];
  }

  getSize() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return this.heap.length < 2;
  }

  insert(node) {
    let current = this.heap.length;

    while (current > 1) {
      const parent = Math.floor(current / 2);
      if (this.heap[parent] < node) {
        this.heap[current] = this.heap[parent];
        current = parent;
      } else break;
    }

    this.heap[current] = node;
  }

  remove() {
    let max = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (this.heap[leftChildIndex]) {
        let childIndexToCompare = leftChildIndex;
        if (
          this.heap[rightChildIndex] &&
          this.heap[rightChildIndex] > this.heap[childIndexToCompare]
        )
          childIndexToCompare = rightChildIndex;

        if (this.heap[current] < this.heap[childIndexToCompare]) {
          [this.heap[current], this.heap[childIndexToCompare]] = [
            this.heap[childIndexToCompare],
            this.heap[current],
          ];
          current = childIndexToCompare;
        } else break;

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return max;
  }
}

const solution = (operations) => {
  const answer = [];
  const heap = new MaxHeap();
  operations.forEach((operation) => {
    if (operation > 0) {
      heap.insert(operation);
    } else {
      answer.push(heap.remove() || 0);
    }
  });
  console.log(answer.join('\n'));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = inputs;

solution(numbers.map(Number));
