const _ = require('lodash');

module.exports = {
    hasProperties: function(object, propsArray){
        return _.every(propsArray, _.partial(_.has, object));
    },
    getKeysSortedByValue: function(obj){
        return _(obj).map((v, k) => [k, v]).sortBy(1).fromPairs().keys().value();
    },
    getExtension: function(file_name){
        return _.first(_.last(file_name.split('.')).split('?'));
    }
};