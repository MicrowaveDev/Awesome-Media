//import localStorage from 'localStorage';

import { MediaModel } from '../models/media.model';
import { Ajax } from "../helpers/ajax";

export class MediaService {
    static API_URL = 'api/media';

    constructor(ajax: Ajax) {
        this.ajax = ajax;
        //let persistedMedia = JSON.parse(localStorage.getItem('media')) || [];
    }

    query(params) {
        return this.ajax
            .get(`${MediaService.API_URL}`, params)
            .then(response => _.map(response, object => new MediaModel(object)));
    }
}