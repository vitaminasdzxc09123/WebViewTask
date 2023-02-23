import { DEFAULT_API_PREFIX } from '../config';
import ApiClient              from './ApiClient';
import WebSitesAPI            from './WebSites';

export default function apiConstruct() {
    const api = new ApiClient(DEFAULT_API_PREFIX);

    return {
        apiClient : api,
        webSites  : new WebSitesAPI({ apiClient : api }),
    };
}
