const _ = require('lodash');

const User = require('../models/user');

let apiHelper = {
    // Generic error handler used by all endpoints.
    handleError: function (res, reason, message, code) {
        console.log('handleError', message, reason);
        res.status(code || 500).send(message);
    },

    APIResponse: function  (res, options) {
        return (err, doc) => {
            if (err) {
                console.log("ERROR: ", err);
                this.handleError(res, err.message);
            } else {
                res.status(200).json(doc);
            }
        }
    },

    socketResponse: function  (err, message, data) {
        let response = {
            error: err,
            message: message,
            data: data
        };
        if(err)
            console.log(response);
        return response;
    },

    getCurrentUser: function (req, res, next) {
        User.findOne({ _id: req.session.user_id }, function (err, user) {
            if (err || !user) {
                this.handleError(res, "Invalid user", "User not found", 400);
                return;
            }

            res.locals.current_user = user;
            res.locals.err = err;
            next();
        }.bind(apiHelper));
    }
}

module.exports = apiHelper;
