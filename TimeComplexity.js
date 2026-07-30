// Calculate time complexity of following code snippets:

function print() {
    console.log("Hello World");
}

// Ans: O(1)
// one line of code executed.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Ans: O(n)
// length of array is unknown so we assume 'n'

function findX(arr) {
    let x = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                x.push([arr[i], arr[j]]);
            }
        }
    }
    return x;
}

// Ans: O(n^2) / O(n*n)
// 2 arrays in 2 loops, same array so both are length n and one loop is nested inside the other

function getFirstTwoElements(arr) {
    if (arr.length < 2) {
        return null;
    }
    const first = arr[0];
    const second = arr[1];
    return [first, second];
}

// Ans: O(1)
// no loops, array.len is single

function processTwoArrays(arr1, arr2) {
    let sum1 = 0;
    for (const item of arr1) {
        sum1 += item;
    }
    let sum2 = 0;
    for (const item of arr2) {
        sum2 += item;
    }
    return sum1 + sum2;
}

// Ans: O(n + m)
// 2 loops of array length, 2 different arrays not nested so they are added

function countF(n) {
    let count = 0;
    for (let i = 1; i < n; i = i * 2) {
        count++;
    }
    return count;
}

// Ans: O(log n)
// exponential loop.

// Find  worst, average and best cases:

function findElement(sortedArr, target) {
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Best Case: O(1)
// target is the first element

// Average Case: O(n/2)
// halfway through the array

// Worst Case: O(n)
// Target is the last element

function recursiveSum(n) {
    if (n <= 0) {
        return 0;
    }
    return n + recursiveSum(n - 1);
}

// Best Case: O(1)
// n is 0 so recursion stops

// Worst Case: O(n)
// n is a +ve number so recursion runs n times

function dFunction(arr) {
    const seen = {};
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return true;
        }
        seen[arr[i]] = true;
    }
    return false;
}

// Best Case: O(1)
// second element is duplicate

// Average Case: O(n/2)
// on average half the array is scanned

// Worst Case: O(n)
// dupliacte at the very end

function repeatLog(arr) {
    for (let i = 0; i < arr.length; i++) {
        let repetitions = arr[i];
        for (let j = 0; j < repetitions; j++) {
            console.log("hello");
        }
    }
}

// Best Case: O(n)
// array value is all 0s

// Worst Case: O(n * m)
// array value is some random number
