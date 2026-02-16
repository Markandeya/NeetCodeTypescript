class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]) {
    // [1,    4,   6,    8,   9]
    // [1,    1,   4,   24,  24*8]
    // [72*24,72*6,72,  9,   1]

    let result = new Array(nums.length).fill(1);
    let j = nums.length - 1;
    let right = 1;
    for (let i = 0; i < nums.length; i++) {
      result[i] = (result[i - 1] ?? 1) * (nums[i - 1] ?? 1);
    }

    for (let j = nums.length - 1; j >= 0; j--) {
      right = right * (nums[j + 1] ?? 1);
      result[j] = result[j] * right;
    }

    console.log(result);

    return result;
  }
}

const s = new Solution();
s.productExceptSelf([1, 4, 6, 8, 9]);
