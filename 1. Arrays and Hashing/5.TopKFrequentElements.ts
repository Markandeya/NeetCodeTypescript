class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freqCount = new Array(k);
    const numsMap = new Map();

    for (let n of nums) {
      if (numsMap.has(n)) {
        numsMap.set(n, numsMap.get(n) + 1);
      } else {
        numsMap.set(n, 1);
      }
    }

    for (let n of numsMap.keys()) {
      freqCount[numsMap.get(n)]
        ? freqCount[numsMap.get(n)].push(n)
        : (freqCount[numsMap.get(n)] = [n]);
    }

    let result: number[] = [];
    for (let i = nums.length; i > 0; i--) {
      if (k === 0) break;

      if (freqCount[i]) {
        for (let j of freqCount[i]) {
          if (k === 0) break;

          result.push(j);
          k--;
        }
      }
    }
    return result;
  }
}

const s = new Solution();

s.topKFrequent([1, 1, 2, 2, 2, 2, 3, 5, 5, 66, 2, 9, 0], 2);
