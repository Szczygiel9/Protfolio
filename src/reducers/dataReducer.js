import {LANG_CHANGE} from "../actions/constants";

const initialState = {
    x: "abc"
};

function dataReducer(state = initialState, action) {
    if (action.type === LANG_CHANGE) {
        return Object.assign({}, state, {x: state.x.concat("x")});
    }
    return state;
}

export default dataReducer;
