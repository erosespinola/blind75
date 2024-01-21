/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.

Since an empty string reads the same forward and backward, it is a palindrome.
*/

function isPalindrome(s: string): boolean {
  const isLetter = (c) => {
    return c.match(/[a-z0-9]/i);
  };

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let c1 = s.charAt(i).toLowerCase();
    let c2 = s.charAt(j).toLowerCase();

    if (!isLetter(c1)) i++;
    if (!isLetter(c2)) j--;

    if (isLetter(c1) && isLetter(c2)) {
      if (c1 !== c2) {
        return false;
      } else {
        i++;
        j--;
      }
    }
  }

  return true;
}
