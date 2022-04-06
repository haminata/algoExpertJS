/*
 * Solution 1
 */


function sortedSquaredArray(array) {
    // Write your code here.
    let result = [];
    for(let i = 0; i < array.length; i++){
        let multiple = array[i] * array[i];
        result.push(multiple);
    }
    return result.sort(function(a, b){return a - b});;

}

