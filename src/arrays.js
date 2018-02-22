/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
  You can use the functions that you have already written to help solve the other problems
*/

const each = (elements, cb) => {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Do NOT use .map, to complete this function.
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const arr = [];
<<<<<<< HEAD
  each(elements, (element) => {
    arr.push(cb(element));
  });
  // for (let i = 0; i < elements.length; i++) {
  //  // arr[i] = cb(elements[i]);
  //   arr.push(cb(elements[i]));
  // }
=======
  /* for (let i = 0; i < elements.length; i++) {
    // arr[i] = cb(elements[i]);
    arr.push(cb(elements[i]));
  }
  */
  each(elements, (element) => {
    arr.push(cb(element));
  });
>>>>>>> 58769d4b28f88b5f90727dcd11ca918aec9deb9d
  return arr;
};

const reduce = (elements, cb, startingValue) => {
  // Do NOT use .reduce, to complete this function.
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
<<<<<<< HEAD
  let memo = elements.shift();
  if (startingValue !== undefined) memo = cb(memo, startingValue);
  for (let i = 0; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
=======

  // let memo = elements.shift();
  let memo = startingValue;

  // if (startingValue !== undefined) memo = cb(memo, startingValue);
  if (memo === undefined) {
    memo = elements.shift();
  }

  /*
  for (let i = 0; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
  */
  each(elements, element => memo = cb(memo, element));
>>>>>>> 58769d4b28f88b5f90727dcd11ca918aec9deb9d
  return memo;
};

const find = (elements, cb) => {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  }
  return undefined;
};

const filter = (elements, cb) => {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
<<<<<<< HEAD
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      arr.push(elements[i]);
    }
  }
  return arr;
=======
  const newArr = [];
  /*
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      newArr.push(elements[i]);
    }
  }
  */
  each(elements, (element) => {
    if (cb(element)) {
      newArr.push(element);
    }
  });
  return newArr;
>>>>>>> 58769d4b28f88b5f90727dcd11ca918aec9deb9d
};
/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
<<<<<<< HEAD
  let arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      arr = arr.concat(flatten(elements[i]));
    } else {
      arr.push(elements[i]);
    }
  }
  return arr;
=======
  let newArr = [];

  /*
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      newArr = newArr.concat(flatten(elements[i]));
    } else {
      newArr.push(elements[i]);
    }
  }
  */
  each(elements, (element, index) => {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten(element));
    } else {
      newArr.push(element);
    }
  });
  return newArr;
>>>>>>> 58769d4b28f88b5f90727dcd11ca918aec9deb9d
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
