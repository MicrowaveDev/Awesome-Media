const apiHelper = require('../helpers/api');
const User = require("../models/user");

module.exports = {
    users: function(req, res) {
        User.find({ }, apiHelper.APIResponse(res));
    },
    currentUser: function(req, res) {
        User.findOne({ _id: req.session.user_id }, apiHelper.APIResponse(res));
    },
    prepareTestUser: function(req, res, next){
        if(process.env.NODE_ENV == 'development' && !req.session.user_id){
            User.find({}, function(err, docs){
                if(docs && docs.length){
                    req.session.user_id = docs[0]._id;
                    next();
                } else {
                    let user = new User({
                        login: 'Test',
                        first_name: 'FirstName',
                        last_name: 'LastName',
                        vk: {}
                    });

                    user.save(function(err, doc){
                        req.session.user_id = doc.id;
                        next();
                    });
                }
            })
        } else {
            next();
        }
    }
};