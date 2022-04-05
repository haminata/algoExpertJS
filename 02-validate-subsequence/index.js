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
