import * as _ACTIONS from "../actions/types";
import * as _REDUCERS from './reducers';
import { initialState } from './reducers';
import robots from '../utils/robots';

describe('searchRobots reducer', () => {
    it('should return initial state by default', () => {
        expect(_REDUCERS.searchRobots(undefined, {})).toEqual(initialState);
    });

    it('should correctly handle action SET_QUERY', () => {
        const mockQuery = 'banana';
        
        const expectedState = {
            ...initialState,
            query: mockQuery
        };

        const mockAction = {
            payload: {
                query: mockQuery
            },
            type: _ACTIONS.SET_QUERY,
        };

        expect(_REDUCERS.searchRobots(initialState, mockAction)).toEqual(expectedState);
    });

    it('should correctly handle action DATA_IS_FETCHING', () => {
        const mockActionTrue = {
            payload: {
                dataIsFetching: true
            },
            type: _ACTIONS.DATA_IS_FETCHING,
        };

        const mockActionFalse = {
            ...mockActionTrue,
            payload: {
                dataIsFetching: false
            }
        };

        expect(_REDUCERS.searchRobots(initialState, mockActionTrue)).toEqual({
            ...initialState,
            dataIsFetching: true
        });

        expect(_REDUCERS.searchRobots(initialState, mockActionFalse)).toEqual({
            ...initialState,
            dataIsFetching: false
        });
    });

    it('should correctly handle action DATA_FETCH_DID_ERR', () => {
        const mockActionTrue = {
            payload: {
                dataFetchDidErr: true
            },
            type: _ACTIONS.DATA_FETCH_DID_ERR,
        };

        const mockActionFalse = {
            ...mockActionTrue,
            payload: {
                dataFetchDidErr: false
            }
        };

        expect(_REDUCERS.searchRobots(initialState, mockActionTrue)).toEqual({
            ...initialState,
            dataFetchDidErr: true
        });

        expect(_REDUCERS.searchRobots(initialState, mockActionFalse)).toEqual({
            ...initialState,
            dataFetchDidErr: false
        });
    });

    it('should correctly handle action DATA_FETCH_SUCCESS', () => {
        const mockActionTrue = {
            payload: {
                dataFetchSuccess: true
            },
            type: _ACTIONS.DATA_FETCH_SUCCESS,
        };

        const mockActionFalse = {
            ...mockActionTrue,
            payload: {
                dataFetchSuccess: false
            }
        };

        expect(_REDUCERS.searchRobots(initialState, mockActionTrue)).toEqual({
            ...initialState,
            dataFetchSuccess: true
        });

        expect(_REDUCERS.searchRobots(initialState, mockActionFalse)).toEqual({
            ...initialState,
            dataFetchSuccess: false
        });
    });

    it('should correctly handle action POPULATE_ROBOTS', () => {
        const mockAction = {
            payload: {
                robots
            },
            type: _ACTIONS.POPULATE_ROBOTS,
        };

        expect(_REDUCERS.searchRobots(initialState, mockAction)).toEqual({
            ...initialState,
            robots
        });
    });
});