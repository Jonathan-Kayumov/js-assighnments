function holiday(holidayName, dateStrring) {
    return "happy holiday " + holidayName + ',' + dateStrring;
}

var holFunc = holiday("Halloween", 'october 31st');
console.log(holFunc);

holFunc = holiday("Thanksgiven", 'november 25th');
console.log(holFunc);

