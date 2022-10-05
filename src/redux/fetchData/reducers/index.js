import { FETCH_DATA } from "../actions/types"

const initialState = {
    data: []
}

const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                data: [...action.payload]
            };
        }
        default:
            return state
    }
}
export default fetchDataReducer