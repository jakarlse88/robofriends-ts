import * as _ACTIONS from "../actions/types";

interface IState {
    robots: IRobots[],
    query: string,
    dataIsFetching: boolean,
    dataFetchDidErr: boolean,
    dataFetchSuccess: boolean | null;
}

export const initialState:IState = {
    dataFetchDidErr: false,
    dataFetchSuccess: null,
    dataIsFetching: false,
    query: '',
    robots: [],
};

// interface Payload {
//     query?: string,
//     dataIsFetching?: boolean,
//     dataFetchDidErr?: boolean,
//     dataFetchSuccess?: boolean,
//     robots?: Array<Robots>
// };

// interface FluxStandardAction {
//     type: string,
//     payload: Payload
// };

interface IRobots {
    id: number,
    name: string,
    username: string,
    email: string
};

export const searchRobots = (state:any = initialState, action:any = {}) => {
    switch (action.type) {
        case _ACTIONS.SET_QUERY:
            return {
                ...state,
                query: action.payload.query
            };
        case _ACTIONS.DATA_IS_FETCHING: 
            return {
                ...state,
                dataIsFetching: action.payload.dataIsFetching
            };
        case _ACTIONS.DATA_FETCH_DID_ERR:
            return {
                ...state,
                dataFetchDidErr: action.payload.dataFetchDidErr
            };
        case _ACTIONS.DATA_FETCH_SUCCESS:
            return {
                ...state,
                dataFetchSuccess: action.payload.dataFetchSuccess
            };
        case _ACTIONS.POPULATE_ROBOTS:
            return {
                ...state,
                robots: action.payload.robots
            };
        default: 
            return state;
    }
};