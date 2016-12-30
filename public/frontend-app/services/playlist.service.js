//import localStorage from 'localStorage';

import { MediaModel } from '../models/media.model';
import { Ajax } from "../helpers/ajax";
import {PlaylistModel} from "../models/playlist.model";

export class PlaylistService {
    static API_URL = 'api/playlists';

    constructor(ajax: Ajax) {
        this.ajax = ajax;
        //let persistedMedia = JSON.parse(localStorage.getItem('media')) || [];
    }

    query(params) {
        return this.ajax
            .get(`${PlaylistService.API_URL}`, params)
            .then(response => _.map(response, object => new PlaylistModel(object)));
    }
    show(id) {
        return this.ajax
            .get(`${PlaylistService.API_URL}/${id}`)
            .then(response => new PlaylistModel(response));
    }
    save(object) {
        var method = object._id ? 'put' : 'post';

        return this.ajax
            [method](`${PlaylistService.API_URL}`, object)
            .then(response => new PlaylistModel(response));
    }
}