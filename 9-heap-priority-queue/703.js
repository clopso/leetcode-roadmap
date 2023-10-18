var minHeap = function(k){
    this.heap = [null]
    this.size = 0
    this.k = k
}

minHeap.prototype.add = function(val){
    if(this.size === this.k){
        this.heap[1] = Math.max(this.heap[1], val)
        this.heapify()
    } else {
        this.size++
        this.heap.push(val)
        this.bubbleUp()
    }
}

minHeap.prototype.getMax = function(){
    return this.heap[1]
}

minHeap.prototype.bubbleUp = function(){
    let curr = this.size

    while(curr > 1 && this.heap[getParent(curr)] > this.heap[curr]){
        this.swap(getParent(curr), curr)
        curr = getParent(curr)
    }
}

minHeap.prototype.heapify = function(){
    let curr = 1
    let left = getLeft(curr)
    let right = getRight(curr)

    while(this.canSwap(curr, left, right)){
        if(this.exists(left) && this.exists(right)){
            if(this.heap[left] < this.heap[right]){
                this.swap(curr, left)
                curr = left
            } else {
                this.swap(curr, right)
                curr = right
            }
        } else {
            this.swap(curr, left)
            curr = left
        }
        left = getLeft(curr)
        right = getRight(curr)
    }
}

minHeap.prototype.exists = function(index) {
    return index <= this.size
}

minHeap.prototype.canSwap = function(curr, left, right){
    return (
        (this.exists(left) && this.heap[curr] > this.heap[left]) ||
        (this.exists(right) && this.heap[curr] > this.heap[right]) 
    )
}

minHeap.prototype.swap = function(a, b){
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
}

const getParent = current => Math.floor(current / 2)
const getLeft = current => current*2
const getRight = current => current * 2 + 1


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new minHeap(k)
    nums.forEach(n => this.heap.add(n))
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.add(val)
    return this.heap.getMax()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */