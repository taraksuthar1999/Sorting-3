/**
 * Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.
 * Return the shortest such subarray and output its length.
 */

/**
 * TC: O(n)
 * SC: O(1)          
 * @param {number[]} nums 
 * @return {number}
 */
const findUnsortedSubarray = function (nums) {
    let n = nums.length
    let i = 0
    let j = n - 1
    while (nums[i] <= nums[i + 1] && i < n - 1) i++
    while (nums[j] >= nums[j - 1] && j > 0) j--
    if (i >= j) return 0
    let min = nums[i]
    let max = nums[i]
    let minI = i
    let maxI = i
    let k = i
    while (k <= j) {
        if (nums[k] <= min) {
            min = nums[k]
            minI = k
        }
        if (nums[k] >= max) {
            max = nums[k]
            maxI = k
        }
        k++
    }
    let left = 0
    let right = n - 1
    while (nums[left] <= min && left < minI) left++
    while (nums[right] >= max && right > maxI) right--
    return right - left + 1

}

findUnsortedSubarray([2, 2, 2, 1])
//https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/