var _ = require("underscore");

module.exports = {
    add: function() {
        var sum = _.reduce(arguments, function(memo, numb) {
            return memo + numb;
        }, 0);
        return sum;
    },
    substract: function() {

        var substraction = 0;

        for (var i = 1; i < arguments.length; i++) {
            substraction -= arguments[i];
        }

        return substraction + arguments[0];
    },
    multiply: function() {
        return arguments[0] * arguments[1];
    }
}