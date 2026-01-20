class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string) {
    if (s.length != t.length) return false;

    // Balance sheet array of 26 characters
    const slow = s.toLowerCase(),
      tlow = t.toLowerCase();

    const charCountArray = new Uint8Array(26);

    for (let i = 0; i < slow.length; i++) {
      let charIndex = slow.charCodeAt(i) - 97;

      charCountArray[charIndex]++;

      charIndex = tlow.charCodeAt(i) - 97;

      charCountArray[charIndex]--;
    }

    for (let i of charCountArray) {
      if (i !== 0) {
        return false;
      }
    }

    return true;
  }
}
