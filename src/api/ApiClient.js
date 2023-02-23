const CONTENT_TYPES = {
    'FORM_DATA'             : 'multipart/form-data',
    'JSON'                  : 'application/json; charset=utf-8',
    'X_WWW_FORM_URLENCODED' : 'application/x-www-form-urlencoded; charset=utf-8'
};

export default class ApiClient {
    constructor(prefix = '') {
        if (!prefix) throw new Error('[prefix] required');
        this.prefix = prefix;
        this.crf_token = '';
        const methods = [ 'get', 'post', 'put', 'patch', 'delete', 'postMultipart' ];

        methods.forEach(method => {
            this[method] = ({ requestURL, queryParams = {}, payload = {} }) => {
                return this._request({ requestURL, method, queryParams, payload });
            };
        });
    }

    async _request({ requestURL, method, payload = {}, queryParams = {} }) {
        const url = this._getUrl(requestURL, queryParams);
        const options = this._getRequestOptions(method, payload, queryParams);
        const response = await fetch(url, options);

        return response.json();
    }

    _getUrl(url, params) {
        const query = Object.keys(params).length ? `?${this._encodeQueryString(params)}` : '';

        return `${this.prefix}/${url}${query}`;
    }

    _getRequestOptions(method, payload, params) {
        const contentType = this._getContentTypeByMethod(method);
        const body = this._getBodyByContentType(method, payload);
        const usedMethod = method === 'postMultipart' ? 'post' : method;

        return {
            headers : {
                'Content-Type' : contentType,
            },
            ...(method !== 'get' && { body }),
            method : usedMethod,
            params
        };
    }

    _getContentTypeByMethod(method) {
        if (method === 'postMultipart') return CONTENT_TYPES.FORM_DATA;

        return method === 'get'
            ? CONTENT_TYPES.X_WWW_FORM_URLENCODED
            : CONTENT_TYPES.JSON;
    }

    _getBodyByContentType(method, payload) {
        if (method === 'postMultipart') return payload;

        return method !== 'get'
            ? JSON.stringify(payload)
            : {};
    }

    _encodeQueryString(params) {
        return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    }

}
