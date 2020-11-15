function truefalse(stupidDumbBox) {
    if (stupidDumbBox == null) {
        console.log("jonathan did not provide an arument");
        return;
    }
    if (stupidDumbBox > 10) {
        console.log("stupid dumb box is greater than 10");
    } else if (stupidDumbBox == 10) {
        console.log("stupid bumb box is 10");
    } else {
        console.log("stupid dumb box is less than 10");
    }
};

truefalse(9);
truefalse(10);
truefalse(11);