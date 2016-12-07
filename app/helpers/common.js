const _ = require('lodash');
const crypto = require('crypto');

module.exports = {
    hasProperties: function(object, propsArray){
        return _.every(propsArray, _.partial(_.has, object));
    },
    getKeysSortedByValue: function(obj){
        return _(obj).map((v, k) => [k, v]).sortBy(1).fromPairs().keys().value();
    },
    getExtension: function(file_name){
        return _.first(_.last(file_name.split('.')).split('?'));
    },
    cryptPassword: function(pass) {
        const md5sum = crypto.createHash('md5');
        md5sum.update(pass);
        pass = md5sum.digest('hex');
        return pass;
    }
};