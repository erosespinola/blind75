/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    let current = num;
    let len = 1;
    if (!numSet.has(num - 1)) {
      while (numSet.has(current + 1)) {
        len++;
        current++;
      }

      if (len > longest) longest = len;
    }
  }

  return longest;
}
