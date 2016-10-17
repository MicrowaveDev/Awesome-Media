import { Headers, Http, RequestOptions, Response, URLSearchParams } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import * as _ from "lodash";

export class Ajax {
    constructor(http : Http){
        this.http = http;
    }

    get(url, params) {
        let search_params : URLSearchParams = new URLSearchParams();

        if (params) {
            _.forEach(params, (value : any, name : any) => {
                if (_.isNil(value))
                    return;

                if (_.isString(value) && !value)
                    return;

                if (_.isArray(value) && !value.length)
                    return;

                search_params.set(name, value);
            })
        }

        return this.ajax('get', url, {
            search: search_params
        });
    }

    post(url, params) {
        return this.ajax('post', url, params);
    }

    put(url, params) {
        return this.ajax('put', url, params);
    }

    delete(url) {
        return this.ajax('delete', url);
    }

    ajax(method, url, params) {
        let options = new RequestOptions();
        options.method = method;

        if (method == 'post' || method == 'update') {
            if (_.isObject(params))
                params = JSON.stringify(params);

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            options.headers = headers;
        }

        return this.http[ method ](url, params, options)
            .toPromise()
            .then((response : any) => {
                return response ? response.json() : null;
            });
            //.catch(AppHelper.handlePromiseError);
    }
}