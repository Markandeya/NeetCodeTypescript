class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let delimitedStr = strs.reduce((str, s) => {
      return (str = str + s.length + "#" + s);
    }, "");

    // console.log(delimitedStr);

    return delimitedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let strs = [];
    let i = 0;
    while (i < str.length) {
      const hashPos = str.indexOf("#", i);
      const count = Number.parseFloat(str.slice(i, hashPos));
      const countWidth = String(count).length;

      const s = str.slice(i + countWidth + 1, i + countWidth + 1 + count);
      //   console.log(count);
      if (!Number.isNaN(count)) strs.push(s);

      i = i + countWidth + count + 1;
    }
    // console.log(strs);
    return strs;
  }
}

s = new Solution();
const str = s.encode([
  "The quick brown fox",
  "jumps over the",
  "lazy dog",
  "1234567890",
  "abcdefghijklmnopqrstuvwxyz",
]);
s.decode(str);
