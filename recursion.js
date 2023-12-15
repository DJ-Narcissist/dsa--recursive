/** product: calculate the product of an array of numbers. */
/**
 * 
 * @param {number[]} nums -Am array of numbers. 
 * @returns {nums}
 */
function product(nums) {
  // Base case: if the array os empty, return 1
  if (nums.length === 0) {
    return 1;
  } else {
    // Recursive case: multiply the first element by the product of the rest
    return nums[0] * product(nums.slice(1));
  }
}
console.log(product([2,3,4]));

/** longest: return the length of the longest word in an array of words. 
 * @param {string[]} words - Array of words
 * @returns {number} 
*/

function longest(words) {
  // Base case: if array is empty, return 0
  if (words.length === 0) {
    return 0;
  }/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}
  const currWordLength = words[0].length;
  const otherWordLength = longest(words.slice(1));
  return Math.max(currWordLength,otherWordLength);
}
console.log(longest(["hello", "hi", "hola"]));
/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return "";  
  }
  return str[0] + everyOther(str.slice(2));
}
console.log(everyOther("hello"));

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str(str.length - 1)) {
    return isPalindrome(str.slice(1,-1));
  }
  return false;
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("tacodog"));

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (idx === arr.length) {
    return -1;
  }
  if (arr[idx] === str) {
    return idx;
  }
  return findIndex(arr, str, idx + 1);
}
let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals,"cat"));
console.log(findIndex(animals,"porcupine"));

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + revString(str.slice(0, -1));
}
console.log(revString("porcurpine"))

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj [key] === "string") {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData : {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          sucess:"you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};
gatherStrings(nestedObj)
/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid; // found the value
    }  else if (arr[mid] < val) {
      left = mid + 1; // search in the right half
    } else {
      right = mid - 1; // search in left half
    }
  }
  return - 1; // value not present in the array
}
console.log(binarySearch([1,2,3,4], 1))
console.log(binarySearch([1,2,3,4], 3))
console.log(binarySearch([1,2,3,4], 5))

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
