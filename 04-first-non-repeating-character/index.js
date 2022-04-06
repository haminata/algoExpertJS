/*
 * Solution 1
 */

function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let nonRepeating = 0;
    for(let i = 0; i < string.length; i++){
        let firstChar = string[i];
        for(let j = i +1; j < string.length-1; j++){
            let secondChar = string[j];

            if(firstChar !== secondChar && j !== string.length -1){
                 console.log(`The first non-repeating character is ${firstChar} and is found at index ${i}`);
                 break;

            }
            if(firstChar === secondChar && j === string.length -1){
                nonRepeating = j + 1;

            }
        }
    }
    return -1;
}

console.log(firstNonRepeatingCharacter( "abcdcaf"));