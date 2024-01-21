/*
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  let len = 0;
  let sub = "";

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (!sub.includes(c)) {
      sub += c;
      len++;

      if (len > maxLen) {
        maxLen = len;
      }
    } else {
      while (sub.includes(c)) {
        sub = sub.substring(1);
        len--;
      }
      sub += c;
      len++;
    }
  }

  return maxLen;
}
