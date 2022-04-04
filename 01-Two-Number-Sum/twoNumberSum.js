/*
 * Solution 1
 */

function twoNumberSum(array, targetSum) {

    for(i=0;i< array.length - 1; i++){
        let matchTarget = [];
        let first = array[i];
        for(j= i + 1;j<array.length; j++){
            let second = array[j];
            if(first + second === targetSum){

                matchTarget.push(first,second);
                return matchTarget;
            }
        }
    }
    return [];
}

array = [3, 5, -4, 8, 11, 1, -1, 6];

console.log(twoNumberSum(array,10));