import api     from '../../apiSingleton';
import ACTIONS from '../constants/actionsTypes';

export function getWebSitesList(payload) {
    return async (dispatch) => {
        try {
            const response = await api.webSites.list(payload);

            dispatch({
                type : ACTIONS.GET_WEB_SITES_LIST,
                data : response
            });

        } catch (err) {
            console.error('[ERROR] getWebSitesList', err);

            return (err);
        }
    };
}
export function updateWebSitesList(payload) {
    return async (dispatch) => {
        try {

            dispatch({
                type : ACTIONS.UPDATE_WEB_SITES_LIST,
                data: payload
            });

        } catch (err) {
            console.error('[ERROR] updateWebSitesList', err);

            return (err);
        }
    };
}

