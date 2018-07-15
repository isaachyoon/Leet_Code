var letterCombinations = function(digits) {
    if (digits === '') return [];
    let numbers = {
        1: '',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let res = [];
    let arr = [];
    for (let i = 0; i < digits.length; i++) {
        arr.push(numbers[digits[i]]);
    }
    letterCombinationsHelper(arr, 0, res)
    return res;
};


function letterCombinationsHelper(arr, ind, res, currPermute = '') {
    //base case
    if (currPermute.length === arr.length) {
        res.push(currPermute);
        return;
    }
    let currNum = arr[ind]; //abc
    console.log(currNum)
    for (let i = 0; i < currNum.length; i++) {
        letterCombinationsHelper(arr, ind + 1, res, currPermute + currNum[i])
    }
}

console.log(letterCombinations());