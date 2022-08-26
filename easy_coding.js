// isPrime - Returns true or false, indicating whether the given number is prime.
function primeNumber(numb){
    if(numb === 2 ){
        return true
    } else if( numb > 2){
        for(i = 2; i < numb; i++){
            if (numb % i !== 0) {
                return true
            } else {
                return false
            }
        }
    } else{
        return false
    }
}


const primeNumberTest = [{
    parameters: [0],
    expectedResult: false
},
{
    parameters: [1],
    expectedResult: false
},
{
    parameters: [17],
    expectedResult: true
},
{
    parameters: [10000000000000],
    expectedResult: false
}
];

primeNumberTest.forEach(function (element) {
    let workingItem = element.parameters[0]
    let expectedItem = element.expectedResult
    
    let result =  primeNumber(workingItem)
    console.log({
        initialData: workingItem,
        result,
        expectedItem,
        isCorrect: result === expectedItem
    })
})


// factorial - Returns a number that is the factorial of the given number.
function factorial(num){
    var num
    if( num === 0 ){
        return 1
    } else if( num > 0){
        for( i = num - 1; i >= 1 ; i--){
            num = num * i;
        }
        return num
    }
}

const factorialTest = [{
    parameters: [0],
    expectedResult: 1
},
{
    parameters: [1],
    expectedResult: 1
},
{
    parameters: [6],
    expectedResult: 720
}
];

factorialTest.forEach(function (element) {
    let workingItem = element.parameters[0]
    let expectedItem = element.expectedResult
    
    let result =  factorial(workingItem)
    console.log({
        initialData: workingItem,
        result,
        expectedItem,
        isCorrect: result === expectedItem
    })
})

// fib - Returns the nth Fibonacci number.


function fibonacciNumb(n){
    let seqFib = [1, 1];
    if (n === 0) {
        return 0
    } else if (n > 0) {
        for(let i = 2; i < n; i++){
            seqFib.push(seqFib[i-1] + seqFib[i-2])
        }
        return seqFib[n-1]
    } else {
        return "Input a positive number"
    }
    
}




const fibonacciTest = [{
    parameters: [0],
    expectedResult: 0
},
{
    parameters: [1],
    expectedResult: 1
},
{
    parameters: [10],
    expectedResult: 55
},
{
    parameters: [20],
    expectedResult: 6765
}
];

fibonacciTest.forEach(function (element) {
    let workingItem = element.parameters[0]
    let expectedItem = element.expectedResult
    
    let result =  fibonacciNumb(workingItem)
    console.log({
        initialData: workingItem,
        result,
        expectedItem,
        isCorrect: result === expectedItem
    })
})



// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

function isSorted(arr){
    var arrSort = arr.split(", ");
    arrSort.sort(function(a, b) {
      return a - b;
    });
    for(i = 0; i < arrSort.length; i++){
        if( arrSort[i] ===  arr.split(", ")[i]){
            return true
        } else {
            return false
        }
    }  
}

const isSortedTest = [
{
    parameters: [""],
    expectedResult: true
},
{
    parameters: ["-Infinity, -5, 0, 3, 9"],
    expectedResult: true
},
{
    parameters: ["3, 9, -3, 10"],
    expectedResult: false
}
];

isSortedTest.forEach(function (element) {
    let workingItem = element.parameters[0]
    let expectedItem = element.expectedResult
    
    let result =  isSorted(workingItem)
    console.log({
        initialData: workingItem,
        result,
        expectedItem,
        isCorrect: result === expectedItem
    })
})


// reverse - Reverses the given string (yes, using the built in reverse function is cheating).

function reverse(param){
    var revPar = []
    var paramDub = param.split('')
    for(let i = paramDub.length - 1; i >= 0; i--){
        revPar.push(paramDub[i]);
    }
    return revPar.join('')
}

const reverseTest = [
{
    parameters: [''],
    expectedResult: ''
},
{
    parameters: ['abcdef'],
    expectedResult: 'fedcba'
}
];
    
reverseTest.forEach(function (element) {
    let workingItem = element.parameters[0]
    let expectedItem = element.expectedResult
    
    let result = reverse(workingItem)
    console.log({
        initialData: workingItem,
        result,
        expectedItem,
        isCorrect: result === expectedItem
    })
})

//indexOf - Implement the indexOf function for arrays.

function indexOf(par){
    var arr = par.flat(Infinity)
    var result = []
    for(let i = 0; i < arr.length - 1; i++){
        if( arr[arr.length - 1] === arr[i]){
            result.push(i);
        }
    }
    if (result.length > 0) {
        return result
    } else {
        return -1
    }
}


const indexOfTest = [
{
    parameters: [[1, 2, 3], 1],
    expectedResult: 0
},
{
    parameters: [[1, 2, 3], 4],
    expectedResult: -1
}
];
    
indexOfTest.forEach(function (element) {
    let workingItem = element.parameters
    let expectedItem = element.expectedResult
    
    let result = indexOf(workingItem)
    console.log(result);
})


// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome(str){
    var strReverse = [],
    strNoSpaces = str.split(" ").join("");
    for(let i = strNoSpaces.length - 1; i >= 0; i--){
        strReverse.push(strNoSpaces[i]);
    }
    return strReverse.join("").toLowerCase() === strNoSpaces.toLowerCase();
    
};


const isPalindromeTest = [
    {
        parameters: [''],
        expectedResult: true
    },
    {
        parameters: ['abcdcba'],
        expectedResult: true
    },
    {
        parameters: ['abcd'],
        expectedResult: false
    },
    {
        parameters: ['A man a plan a canal Panama'],
        expectedResult: true
    }
];

isPalindromeTest.forEach(function (element) {
    let workingItem = element.parameters[0]
    let expectedItem = element.expectedResult
    
    let result =  isPalindrome(workingItem)
    console.log({
        initialData: workingItem,
        result,
        expectedItem,
        isCorrect: result === expectedItem
    })
});


// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence 
// (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.

function missing(arr){
    let n = arr.length,
    sumArr = 0,
    und = undefined;
    totalSum = (n + 1) * (n + 2) / 2;

    if(n <= 1){
        return und
    } else if( n > 1){
        
        for(let i = 0; i < n; i++){
            sumArr += arr[i];
        }
        return totalSum - sumArr
    }
}

const missingTest = [
    {
        parameters: [],
        expectedResult: undefined
    },
    {
        parameters: [1, 4, 3],
        expectedResult: 2
    },
    {
        parameters: [2, 3, 4],
        expectedResult: 1
    },
    {
        parameters: [5, 1, 4, 2],
        expectedResult: 3
    },
    {
        parameters: [1, 2, 3, 4],
        expectedResult: undefined
    }
];

missingTest.forEach(function (element) {
    let workingItem = element.parameters
    let expectedItem = element.expectedResult
    
    let result =  missing(workingItem)
    console.log({
        initialData: workingItem,
        result,
        expectedItem,
        isCorrect: result === expectedItem
    })
});

// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

function isBalanced(str){
    const arr = str.split('');
    let open = [],
    openArr = [];
    let openSymbol = '{';
    let closeSymbol = '}';
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === openSymbol) {
        open.push(arr[i]);
        openArr.push(arr[i])
        } else if ( arr[i] === closeSymbol){
            if(open.length === 0 ){
                return false
            } else if (arr[i] !== openArr.pop()){
                open.pop()
            }
        }
    }
    
    return !open.length;
}

const isBalancedTest = [
    {
        parameters: ['}{'],
        expectedResult: false
    },
    {
        parameters: ['{{}'],
        expectedResult: false
    },
    {
        parameters: ['{}{}'],
        expectedResult: false
    },
    {
        parameters: ['foo { bar { baz } boo }'],
        expectedResult: true
    }
    ,
    {
        parameters: ['foo { bar { baz }'],
        expectedResult: false
    },
    {
        parameters: ['foo { bar } }'],
        expectedResult: false
    }
];

isBalancedTest.forEach(function (element) {
    let workingItem = element.parameters[0]
    let expectedItem = element.expectedResult
    
    let result =  isBalanced(workingItem)
    console.log({
        initialData: workingItem,
        result,
        expectedItem,
        isCorrect: result === expectedItem
    })
});
