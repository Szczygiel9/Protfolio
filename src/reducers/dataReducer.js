import {LANG_CHANGE} from "../actions/constants";
import {engData, plData} from "../data/dataObjects";

const initialState = plData;

function dataReducer(state = initialState, action) {
    if (action.type === LANG_CHANGE) {
        const lang = state.currentLang === "pl" ? "eng" : "pl";
        return getDataObject(lang);
    }
    return state;
}

const getDataObject = (lang) => {
    console.log(lang);
    switch (lang) {
        case "pl":
            return plData;
        case "eng":
            return engData;
        default:
            return null;
    }
};

export default dataReducer;
