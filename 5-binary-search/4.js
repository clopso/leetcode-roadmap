/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length
    let n2 = nums2.length
    
    // If nums1 is larger than nums2, swap them to ensure n1 is smaller than n2.
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1)
    }

    let left = 0
    let right = n1

    while(left <= right){
        let midN1 = Math.floor((left + right) / 2)
        let midN2 = Math.floor((n1 + n2 + 1) / 2 - midN1)

        let maxLeftN1 = (midN1 === 0) ? Number.MIN_SAFE_INTEGER : nums1[midN1-1]
        let minRightN1 = (midN1 === n1) ? Number.MAX_SAFE_INTEGER : nums1[midN1]

        let maxLeftN2 = (midN2 === 0) ? Number.MIN_SAFE_INTEGER : nums2[midN2-1]
        let minRightN2 = (midN2 === n2) ? Number.MAX_SAFE_INTEGER : nums2[midN2]

        if(maxLeftN1 <= minRightN2 && maxLeftN2 <= minRightN1){
            if((n1 + n2) % 2 == 0){
                return((Math.max(maxLeftN1, maxLeftN2) + Math.min(minRightN1, minRightN2)) / 2)
            }else{
                return Math.max(maxLeftN1, maxLeftN2)
            }
        }else if(maxLeftN1 > minRightN2){
            right = midN1 - 1
        }else{
            left = midN1 + 1
        }
    }

    return -1
};