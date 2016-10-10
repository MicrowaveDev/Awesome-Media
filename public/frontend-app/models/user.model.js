import * as _ from "lodash";

export class UserModel {
    login;
    first_name;
    last_name;
    vk_id;
    vk;

    constructor(data) {
        _.forEach(data, (value, name) => {this[name] = value;});
    }
}