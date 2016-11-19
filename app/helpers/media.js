const _ = require('lodash');

const Media = require('../models/media');
const User = require('../models/user');

module.exports = {
    getSortedMedia: function (user_medias, callback) {
        let userSortedMediaIds;
        let sortedMedia;
        userSortedMediaIds = _(user_medias).orderBy(['number'], ['desc']).map((elem) => elem.media_id.toString()).value();

        Media.find({_id: {"$in": user_medias ? user_medias.map((user_media) => user_media.media_id) : []}}, function (err, docs) {
            sortedMedia = _.orderBy(docs, (media) => {
                return userSortedMediaIds.indexOf(media._id.toString());
            }, ['asc']);

            callback(err, sortedMedia);
        });
    },

    openUserSession: function (req, callback) {
        User.findOne({_id: req.session.user_id}, callback);
    }
}
