// var aVariable = 5;

// function aFunction(aVariable) {
//     return this.aVariable;
// }

// var is old style. New style: const and let
const aFunction = (anArgument) => {
    return anArgument + 1;
}

// console.log(aFunction(2));

// const functionThatReturnsAFunction = () => {
//     return () => {

//     };
// }

const anAsyncCounter = (countTo, onStart, onProgress, onFinish) => {
    return () => {
        onStart();
        for (let i = 0; i < countTo; i++) {
            onProgress(i);
        }
        onFinish();
    }
};

function startFunctionLogger() {
    console.log("I did start");
}

const progressPrinter = (progressValue) => {
    console.log("progress: " + progressValue);
};

const finishFunctionLogger = () => {
    console.log("I did finished!");
};

const returnedFunction = anAsyncCounter(100, startFunctionLogger, progressPrinter, finishFunctionLogger);

returnedFunction();