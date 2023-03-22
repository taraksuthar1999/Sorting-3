// sum the difference

/**
 * let array be of elements a,b,c,d when sorted
 * we can see for sequence a,b,c,d max = d and min = a, ans = d-a
 * for all combinations of elements between a,d ans will be d-a i.e (a,d),(a,b,d),(a,c,d),(a,d,c,d)
 * so whole equation
 *     = 2^0(b-a) + 2^0(c-b) + 2^0(d-c) + 2^1(c-a) + 2^1(d-b) + 2^2(d-a)
 * (by solving above equation)
 * ans = (2^3d+2^2c+2^1c+2^0a) - (2^3a+2^2b+2^1c+d)
 */
/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */
function sumSequenceWidths(nums) {
    nums = nums.sort((a, b) => a - b)
    let max = 0
    const mod = 1000000007
    for (let i = nums.length - 1; i >= 0; i--) {
        max *= 2
        max = (max + nums[i]) % mod
    }
    let min = 0
    for (let i = 0; i < nums.length; i++) {
        min *= 2
        min = (min + nums[i]) % mod
    }

    return (max - min + mod) % mod
}

sumSequenceWidths([3, 5, 10])

//https://leetcode.com/problems/sum-of-subsequence-widths/