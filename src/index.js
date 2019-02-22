// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) return {};
    if (currency > 10000) return {"error": "You are rich, my friend! We don't have so much coins for exchange"};

    var temp;
    var centArr = [];
    var keyArr =  ["H", "Q", "D", "N", "P"];
    var obj = {};

    centArr.push(Math.floor(currency / 50));
    temp = currency - centArr[centArr.length - 1] * 50;

    centArr.push(Math.floor(temp / 25));
    temp = temp - centArr[centArr.length - 1] * 25;

    centArr.push(Math.floor(temp / 10));
    temp = temp - centArr[centArr.length - 1] * 10;

    centArr.push(Math.floor(temp / 5));
    temp = temp - centArr[centArr.length - 1] * 5;

    centArr.push(Math.floor(temp));
    temp = temp - centArr[centArr.length - 1];

    for (var i = 0; i < centArr.length; i++) {
        if (centArr[i] == 0) continue;
        obj[keyArr[i]] = centArr[i];
    }

    return obj;
}
