const { MaxHeap } = require('./max_heap');
const { MinHeap } = require('./min_heap');

export const rebalance = (arr1, arr2) => {
    let diff = findDiff(arr1, arr2);
    let heaps = buildMinMaxHeap(diff);
    let minHeap = heaps[0];
    let maxHeap = heaps[1];
    let res = [];

    while (minHeap.array.length > 1 && maxHeap.array.length > 1) {
        let min = minHeap.deleteMin();
        let max = maxHeap.deleteMax();

        let d = min.val + max.val;

        if (d === 0) {
            res.push(`Move ${round(max.val)} from Index ${max.idx} to ${min.idx}`)
        } else if (d > 0) {
            res.push(`Move ${round(Math.abs(min.val))} from Index ${max.idx} to ${min.idx}`)
            maxHeap.insert(d, max.idx)
        } else {
            res.push(`Move ${round(Math.abs(max.val))} from Index ${max.idx} to ${min.idx}`)
            minHeap.insert(d, min.idx)
        }
    }


    return res;

}

const buildMinMaxHeap = (array) => {
    let minHeap = new MinHeap();
    let maxHeap = new MaxHeap();

    array.forEach((num, idx) => {
        if (num > 0) {
            maxHeap.insert(num, idx)
        } else if (num < 0) {
            minHeap.insert(num, idx)
        }
    })

    return [minHeap, maxHeap]
}

const findDiff = (arr1, arr2) => {
    let res = [];

    for (let i = 0; i < arr1.length; i++) {
        res[i] = arr1[i] - arr2[i];
    }

    return res;
}

const round = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}

let a = [1,2,3,4,5]
let b = [5,4,3,2,1]

console.log(rebalance(a,b))