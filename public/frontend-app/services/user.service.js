import { Ajax } from "../helpers/ajax";

export class UserService {
    static CurrentUser = null;
    static currentPromise = null;

    constructor(ajax: Ajax) {
        this._ajax = ajax;
    }

    getCurrent(callback) {
        var promise;
        if(this.CurrentUser){
            return callback(this.CurrentUser);
        } else if(this.currentPromise){
            promise = this.currentPromise;
        } else {
            promise = this._ajax.get('/api/current_user');
        }
        promise.then((user) => {
            this.CurrentUser = user;
            this.currentPromise = null;
            return callback(this.CurrentUser);
        });
    }

    list() {
        return this._ajax.get('/api/users');
    }
    create(newUser) {
        return this._ajax.post('/api/users', newUser);
    }
    auth(logInUser) {
        return this._ajax.post('/api/auth', logInUser);
    }
}