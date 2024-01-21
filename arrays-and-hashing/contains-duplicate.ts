/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function containsDuplicate(nums: number[]): boolean {
  const count = {};
  let hasDuplicate = false;
  for (let num of nums) {
    if (count[num]) {
      count[num] += 1;
    } else {
      count[num] = 1;
    }

    if (count[num] > 1) {
      hasDuplicate = true;
      break;
    }
  }

  return hasDuplicate;
}
