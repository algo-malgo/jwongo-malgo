class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
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
      if (this.heap[parent].weight > node.weight) {
        this.heap[current] = this.heap[parent];
        current = parent;
      } else break;
    }

    this.heap[current] = node;
  }

  remove() {
    let min = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (this.heap[leftChildIndex]) {
        let childIndexToCompare = leftChildIndex;
        if (this.heap[rightChildIndex] && this.heap[rightChildIndex].weight < this.heap[childIndexToCompare].weight)
          childIndexToCompare = rightChildIndex;

        if (this.heap[current].weight > this.heap[childIndexToCompare].weight) {
          [this.heap[current], this.heap[childIndexToCompare]] = [this.heap[childIndexToCompare], this.heap[current]];
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

    return min;
  }
}

function solution(N, road, K) {
  const graph = new Map();
  road.forEach((r) => {
    graph.set(
      r[0],
      graph.get(r[0]) ? [...graph.get(r[0]), { vertex: r[1], weight: r[2] }] : [{ vertex: r[1], weight: r[2] }]
    );
    graph.set(
      r[1],
      graph.get(r[1]) ? [...graph.get(r[1]), { vertex: r[0], weight: r[2] }] : [{ vertex: r[0], weight: r[2] }]
    );
  });
  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;
  const heap = new MinHeap();
  graph.get(1).forEach((node) => {
    heap.insert(node);
    dist[node.vertex] = node.weight;
  });

  while (!heap.isEmpty()) {
    const curr = heap.remove();
    // console.log('curr', curr)

    if (dist[curr.vertex] < curr.weight) {
      continue;
    }

    // console.log('adj', graph.get(curr.vertex));

    graph.get(curr.vertex).forEach((adj) => {
      if (curr.weight + adj.weight < dist[adj.vertex]) {
        // console.log('adj 원소', adj)
        // console.log('비교', curr.weight, adj.weight, dist[adj.vertex])
        // console.log('갱신', adj.vertex, curr.weight + adj.weight)
        dist[adj.vertex] = curr.weight + adj.weight;
        heap.insert({ vertex: adj.vertex, weight: curr.weight + adj.weight });
      }
    });

    // console.log(heap)
  }
  // console.log('dist', dist)

  return dist.filter((val) => val <= K).length;
}
