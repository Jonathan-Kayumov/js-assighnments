var electronics = ["laptop", "smartphone", "camera"];

function printArray(arrayToPrint) {

    for (i = 0; i < arrayToPrint.length; i++) {

        console.log((i + 1) + ": " + arrayToPrint[i]);
    }
}

printArray(electronics);
electronics.push("tablet");
printArray(electronics);