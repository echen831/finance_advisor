const { MaxHeap } = require('./max_heap');
const { MinHeap } = require('./min_heap');

export const rebalance = (diff, keys) => {
    let heaps = buildMinMaxHeap(diff);
    let minHeap = heaps[0];
    let maxHeap = heaps[1];
    let res = [];

    while (minHeap.array.length > 1 && maxHeap.array.length > 1) {
        let min = minHeap.deleteMin();
        let max = maxHeap.deleteMax();

        const fromCol = keys[min.idx]
        const toCol = keys[max.idx]

        let d = min.val + max.val;

        if (d === 0) {
            const displayMax = round(max.val)
            res.push(`Transfer $${displayMax} from ${fromCol} to ${toCol}`)
        } else if (d > 0) {
            const displayMin = round(Math.abs(min.val))
            res.push(`Transfer $${displayMin} from ${fromCol} to ${toCol}`)
            maxHeap.insert(d, max.idx)
        } else {
            const displayMax = round(Math.abs(max.val))
            res.push(`Transfer $${displayMax} from ${fromCol} to ${toCol}`)
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

export const findDiff = (arr1, arr2) => {
    let res = [];

    for (let i = 0; i < arr1.length; i++) {
        res[i] = round(arr1[i] - arr2[i]);
    }

    return res;
}

export const round = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}
