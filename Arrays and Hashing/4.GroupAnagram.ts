class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let anagramMap = new Map();

    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
      const alphabetFrequency = new Uint8Array(26);

      for (let j = 0; j < str.length; j++) {
        const position = str.charCodeAt(j) - 97;

        alphabetFrequency[position]++;
      }

      const afStringified = alphabetFrequency.toString();

      if (anagramMap.has(afStringified)) {
        anagramMap.get(afStringified)?.push(strs[i]);
      } else {
        anagramMap.set(afStringified, [strs[i]]);
      }
    }

    return Array.from(anagramMap.values());
  }
}
