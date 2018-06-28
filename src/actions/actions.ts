import * as _ACTIONS from './types';

interface IRobots {
    id: number,
    name: string,
    username: string,
    email: string
};

interface IPayload {
    query?: string,
    dataIsFetching?: boolean,
    dataFetchDidErr?: boolean,
    dataFetchSuccess?: boolean,
    robots?: IRobots[]
};

interface IFluxStandardAction {
    type: string,
    payload: IPayload
};

export const setQuery = (text: string): IFluxStandardAction => {
    return {
        payload: {
            query: text
        },
        type: _ACTIONS.SET_QUERY,
    };
};

export const dataIsFetching = (bool: boolean): IFluxStandardAction => {
    return {
        payload: {
            dataIsFetching: bool
        },
        type: _ACTIONS.DATA_IS_FETCHING,
    };
};

export const dataFetchDidErr = (bool: boolean): IFluxStandardAction => {
    return {
        payload: {
            dataFetchDidErr: bool
        },
        type: _ACTIONS.DATA_FETCH_DID_ERR,
    };
};

export const dataFetchSuccess = (bool: boolean): IFluxStandardAction => {
    return {
        payload: {
            dataFetchSuccess: bool
        },
        type: _ACTIONS.DATA_FETCH_SUCCESS,
    };
};

export const populateRobots = (robots: IRobots[]): IFluxStandardAction => {
    return {
        payload: {
            robots
        },
        type: _ACTIONS.POPULATE_ROBOTS,
    };
};

export const fetchData = (url: string): any => {
    return async (dispatch: any) => {

        dispatch(dataIsFetching(true));

        try {
            const response = await fetch(url);

            dispatch(dataIsFetching(false));

            const data = await response.json();
            dispatch(dataFetchSuccess(true));
            dispatch(populateRobots(data));
        } catch (e) {
            dispatch(dataFetchDidErr(true));
            throw Error(e);
        }
    };
}