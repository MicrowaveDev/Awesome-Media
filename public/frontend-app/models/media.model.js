import * as _ from "lodash";

export class MediaModel {
    id;
    name;
    src;
    type;

    constructor(data) {
        _.forEach(data, (value, name) => {this[name] = value;});
    }
}