/* FUNCTION
--------------

FILTER() returns a new array containing elements from an input array arguement that match a condition.

e.g FILTER([1,2,3,4], <3) will return an array containing [1,2]
INPUT - arr (any type array[]), callback function (cbk) with our condition to check
RETURN -

PROCESS
------------
INITIATE empty array called result
LOOP over length of input array
IF element at each index matches callback function condition
PUSH element to result array

*/

function newFilter(arr, cbk) {
  let resArray = [];
  for (let el of arr) {
    if (cbk(el) === true) {
      resArray.push(el);
    }
  }
  return resArray;
}

const fm1 = (el) => (el < 3 ? true : false);

console.log(
  "newFilter([1,2,3,4], fm1):",
  newFilter([1, 2, 3, 4], fm1),
  "should return [1,2]"
);

console.log(
  "newFilter([3,4], fm1):",
  newFilter([3, 4], fm1),
  "should return []"
);

const fm2 = (el) => (el.length < 6 ? true : false);

console.log(
  "newFilter(['string','name'], fm1):",
  newFilter(["string", "name"], fm2),
  "should return ['name']"
);
