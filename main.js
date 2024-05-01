//  Q no 127
var _this = this;
var traditionalFunction = function (a, b) {
    return a + b;
};
var arrowFunction = function (a, b) {
    return a + b;
};
console.log(traditionalFunction(5, 8));
console.log(arrowFunction(9, 8));
//  Q no 128
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(3, 5, 8));
//  Q no 129
var traditionlVsArrow = {
    value: "traditionlVsArrowFunctionValue",
    traditionalFunction: function () {
        console.log("traditionl Function:", this.value);
    },
    arrowFunction: function () {
        console.log("arrow function:", _this.value);
    },
};
traditionlVsArrow.traditionalFunction();
traditionlVsArrow.arrowFunction();
