function foobar(num) {
    if (num < 10) {
        return "foo"
    }
    else {
        return "bar"
    }
};

foobar(4);
foobar(15);

module.exports = foobar;