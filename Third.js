// You are given an implementation of a function:

// int solution(int A[], int N, int B[], int M);

// that, given a non-empty array A of N non-negative integers and a non-empty array B of M non-negative integers, returns the minimal value that occurs in both arrays. If there is no such value, the function should return −1.

// For example, given arrays A and B such that:

//     A[0] = 1    B[0] = 4
//     A[1] = 3    B[1] = 2
//     A[2] = 2    B[2] = 5
//     A[3] = 1    B[3] = 3
//                 B[4] = 2
// your function should return 2, since 2 is the minimal value which occurs in both arrays A and B (another value which occurs in both arrays is 3).

// Given arrays A and B such that:

//     A[0] = 2    B[0] = 3
//     A[1] = 1    B[1] = 3
// your function should return −1, since there is no value that occurs in both arrays.

// The attached code is still incorrect for some inputs. Despite the error(s), the code may produce a correct answer for the example test cases. The goal of the exercise is to find and fix the bug(s) in the implementation. You can modify at most two lines.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of arrays A and B is an integer within the range [0..1,000,000,000].



function minCommonNum(arrayA, N, arrayB, M){
    //create set for array A
    let setA = new Set(arrayA);

    //find minimum common value
    let minNum = Infinity;

    for (let num of arrayB) {
        if (setA.has(num)) {
            minNum = Math.min(minNum, num);
        
        }
    }

    //return -1 if no common value was found

    if (minNum === Infinity){
        return -1;
    }

    return minNum;
}



//test cases
let A1 = [10, 23, 4, 6];
let B1 = [3, 67, 4, 67];

let A2 = [44, 5, 62, 95, 4];
let B2 = [93, 70, 34, 85, 17];


console.log(minCommonNum(A1, A1.length, B1, B1.length));


console.log(minCommonNum(A2, A2.length, B2, B2.length));
