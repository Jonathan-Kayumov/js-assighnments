// function aCallBack() {
//     console.log("hi, Im a callback!");
// }


// function aFunction(callback) {
//     console.log("hello");
//     callback();
//     console.log("goodbye");
// }
// aFunction(aCallBack);

// const aCallBack = () => {
//     return "hi, im a callback!";
// }

// const aFunction = (callback) => {
//     console.log("hello");
//     let callbackResult = callback();
//     console.log(callbackResult);
//     console.log("goodbye");
// }

// aFunction(aCallBack);

const username = process.argv[2];
const password = process.argv[3];
const environment = process.argv[4];

const users = {
    "andrii": "password1",
    "jonathan": "password2",
}

const authenticator = (authProvider) => {
    return (username, password) => {
        return authProvider(username, password);
    }
}

const auth = authenticator((username, password) => {

    if (environment === "D") {
        return {
            result: true
        }
    }

    const userPassword = users[username];

    if (userPassword == null) {
        return {
            result: false,
            reason: "username is not found"
        };
    }

    if (password !== userPassword) {
        return {
            result: false,
            reason: "password is incorect"
        };
    }
    return {
        result: true
    };
});

const authResult = auth(username, password);

if (authResult.result == true) {
    console.log("user authenticated")
} else {
    console.log(authResult.reason);
}