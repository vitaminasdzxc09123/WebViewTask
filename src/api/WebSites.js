import Base from './Base.js';

export default class WebSitesAPI extends Base {
    async list(payload) {
        return this.apiClient.get({
            requestURL : 'external-verification/websites'
        });
    }
}
