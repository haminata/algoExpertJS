/*
 * Solution 1
 */

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let lastKnownIndex = 0;

    for(let i=0; i < sequence.length; i++){
        const iVal = sequence[i];

        let newlastIndex = null;
        for(let j = lastKnownIndex; j < array.length; j++){
            const jVal = array[j];

            if( iVal === jVal){
                newlastIndex = j + 1;
                break;
            }

        }

        if(newlastIndex === null){
            return false;
        }else{
            lastKnownIndex = newlastIndex;
        }
    }

    return true;
}
arra = [5, 1, 22, 25, 6, -1, 8, 10];
sequenc = [1, 6, -1, 10];

console.log(isValidSubsequence(arra,sequenc));

/*
 * Solution 2
 */

function validSubsequence(arrParam, subSequence){
    let lastArrIndex = 0;
     for(let i = 0; i < subSequence.length; i++){
         let iVal = subSequence[i];

         if(lastArrIndex >= arrParam.length){
             return false;
         }
         for (let j = lastArrIndex; j < arrParam.length; j++) {
             let jVal = arrParam[j];

             if(iVal === jVal){
                 lastArrIndex = j + 1;
                 break;
             }
             if(j === arrParam.length -1){
                 return false;
             }

         }
     }
     return true;
}

const ob = {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, -1, 10]
}

let result1 = validSubsequence(ob.array,ob.sequence);
console.log(result1);