function firstLetterName (name) {
    let firstLetter = name[0];
    alert("The name " + name + " starts with the letter " + firstLetter);
}

function divisibleByTwo (num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function largestNum (arr) {
    let largeNum = arr[0];
    for (let i = 0; i <= arr.length; i += 1) {
        if (largeNum < arr[i]) {
            largeNum = arr[i];
        }
    }
    return largeNum;
}

firstLetterName("Calliope");
divisibleByTwo(4);

let testArray = [0,-1,1,2,24,3,5]
largestNum(testArray);