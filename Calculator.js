var _ = require("underscore");

module.exports = {
    add: function() {
        var sum = 0;

        _.each(arguments, function(number) {
            sum += number;
        });

        return sum;
    }
}