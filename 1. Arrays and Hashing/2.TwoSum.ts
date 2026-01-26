class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): [number, number] {
    // Create a map of unique numbers and their position
    const numMap = new Map();

    for (let i in nums) {
      const findNum = target - nums[i];

      if (numMap.has(findNum)) {
        return [parseInt(numMap.get(findNum)), parseInt(i)];
      }
      // For duplicates only set their lowest index
      if (!numMap.has(nums[i])) numMap.set(nums[i], i);
    }

    return [-1, -1];
  }
}
