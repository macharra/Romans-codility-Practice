
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



//
let A1 = [10, 23, 4, 6];
let B1 = [3, 67, 4, 67];

let A2 = [44, 5, 62, 95, 4];
let B2 = [93, 70, 34, 85, 17];


console.log(minCommonNum(A1, A1.length, B1, B1.length));


console.log(minCommonNum(A2, A2.length, B2, B2.length));
