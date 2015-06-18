var _ = require("underscore");

module.exports = {
    add: function() {
        sum = _.reduce(arguments, function(memo, numb) {
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
    }
}