/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

function topKFrequent(nums: number[], k: number): number[] {
  const groups = {};
  const sorted: number[][] = [];

  for (let num of nums) {
    if (groups[num]) {
      groups[num] += 1;
    } else {
      groups[num] = 1;
    }
  }

  for (let key in groups) {
    sorted.push([parseInt(key), groups[key]]);
  }

  sorted.sort((a, b) => {
    return b[1] - a[1];
  });

  return sorted.slice(0, k).map(([key, count]) => key);
}

function topKFrequent2(nums: number[], k: number): number[] {
  const groups = {};
  const freq: number[][] = [];

  for (let i in nums) {
    freq.push([]);
  }

  for (let num of nums) {
    groups[num] ? (groups[num] += 1) : (groups[num] = 1);
  }

  for (let key in groups) {
    freq[groups[key] - 1].push(parseInt(key));
  }

  return freq.flat().splice(-k);
}
