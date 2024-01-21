/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

function isAnagram(s: string, t: string): boolean {
  const firstWordCount = {};
  let isAnagram = true;

  for (let c of s) {
    if (firstWordCount[c]) {
      firstWordCount[c] += 1;
    } else {
      firstWordCount[c] = 1;
    }
  }

  for (let c of t) {
    if (!firstWordCount[c]) {
      isAnagram = false;
      break;
    } else {
      firstWordCount[c] -= 1;
    }
  }

  for (let c in firstWordCount) {
    if (firstWordCount[c] !== 0) {
      isAnagram = false;
      break;
    }
  }

  return isAnagram;
}
