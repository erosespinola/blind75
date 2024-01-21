/*
Problem: Design an algorithm to encode a list of strings to a string. 
The encoded string is then sent over the network and is decoded back to the original list of strings. 
Please implement encode and decode

Example(s):

Example1
Input: ['lint”,'code”,“love”,“you”] 
Output: [“lint”,“code”,“love”,“you”] 
Explanation: One possible encode method is: “lint:;code:;love:;you”

Example2
Input: [“we”, “say”, “:”, “yes”] 
Output: [“we”, “say”, “:”, “yes”] 
Explanation: One possible encode method is: “we:;say:;:::;yes”
*/

function encode(words) {
  let encoded = "";
  words.forEach((w) => {
    encoded += `${w.length}@${w}`;
  });

  return encoded;
}

function decode(s) {
  let words = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    let size = "";
    while (s[j] !== "@") {
      size += s[j];
      j++;
    }

    i = j + parseInt(size) + 1;
    words.push(s.slice(j + 1, i));
  }

  return words;
}

const data = ["lint@@##@@##", "codeeeeeeeeeeeeeee", "love", "you"];
const encoded = encode(data);
const decoded = decode(encoded);

console.log(data.every((word, i) => word === decoded[i]));

const a = [7, 6, 4, 3, 1];
const profit = new Map();

a.forEach((num) => {
  profit.forEach((_, key) => {
    profit.get(key).push(num - key);
  });

  if (!profit.has(num)) {
    profit.set(num, []);
  }
});

const all = [];
profit.forEach((value) => {
  all.push(...value);
});

console.log(all, Math.max(...all));
