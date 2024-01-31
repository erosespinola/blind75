/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

const opening = new Set(["{", "[", "("])
const matching: { [key: string]: string } = {
  "{": "}",
  "(": ")",
  "[": "]",
}

function isValid(s: string): boolean {
  let stack: string[] = []

  for (let c of s) {
    if (opening.has(c)) {
      stack.push(c)
    } else {
      const open = stack.pop()
      if (!open || c !== matching[open]) {
        return false
      }
    }
  }

  return !stack.length
}
