const aCallBack = () => {
    console.log("hi, Im a callback!");
}


const aFunction = (callback) => {
    console.log("hello");
    callback();
    console.log("goodbye");
}
aFunction(aCallBack);

const aCallBack = () => {
    return "hi, im a callback!";
}

const aFunction = (callback) => {
    console.log("hello");
    let callbackResult = callback();
    console.log(callbackResult);
    console.log("goodbye");
}

aFunction(aCallBack);