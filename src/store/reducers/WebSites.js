import ACTIONS from '../constants/actionsTypes';

const initialState = {
    list        : [],
    updatesList : []
};

export default (state = initialState, action = {}) => {
    const { type, data } = action;
    
    switch (type) {
        case ACTIONS.GET_WEB_SITES_LIST:
            return { ...state, list : data };
        case ACTIONS.UPDATE_WEB_SITES_LIST:
                return {
                     ...state,
                     updatesList: [...state.updatesList, data]
                     };
        default:
            return state;
    }
};
