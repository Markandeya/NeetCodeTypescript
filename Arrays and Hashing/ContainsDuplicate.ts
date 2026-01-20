class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    // Have a register of all unique numbers
    const numSet = new Set();

    for (let n of nums) {
      if (!numSet.has(n)) {
        numSet.add(n);
      } else {
        // Duplicate found!
        return true;
      }
    }

    // No duplicates in array
    return false;
  }
}
