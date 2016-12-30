import * as _ from "lodash";

export class PlaylistModel {
    id;
    name;
    src;
    type;

    constructor(data) {
        _.forEach(data, (value, name) => {this[name] = value;});
    }
}