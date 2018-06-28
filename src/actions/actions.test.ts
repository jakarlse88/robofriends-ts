import * as _ACTIONS from './actions';
import * as _TYPE from './types';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import robots from '../utils/robots';

const mockStore = configureMockStore([thunkMiddleware]);

describe('Redux actions', () => {
    it('should create an action to set query', () => {
        expect(_ACTIONS.setQuery('testQuery')).toEqual({
            payload: {
                query: 'testQuery'
            },
            type: _TYPE.SET_QUERY
        });
    });

    it('should create an action to set dataIsFetching', () => {
        expect(_ACTIONS.dataIsFetching(true)).toEqual({
            payload: {
                dataIsFetching: true
            },
            type: _TYPE.DATA_IS_FETCHING,
        });
    });

    it('should create an action to set dataFetchDidErr', () => {
        expect(_ACTIONS.dataFetchDidErr(true)).toEqual({
            payload: {
                dataFetchDidErr: true
            },
            type: _TYPE.DATA_FETCH_DID_ERR,
        });
    });

    it('should create an action to set dataFetchSuccess', () => {
        expect(_ACTIONS.dataFetchSuccess(true)).toEqual({
            payload: {
                dataFetchSuccess: true
            },
            type: _TYPE.DATA_FETCH_SUCCESS,
        });
    });

    it('should create an action to set robots', () => {
        expect(_ACTIONS.populateRobots(robots)).toEqual({
            payload: {
                robots
            },
            type: _TYPE.POPULATE_ROBOTS,
        });
    });

    it('should handle fetching data', async () => {
        const store = mockStore();
        
        store.dispatch(_ACTIONS.fetchData('https://jsonplaceholder.typicode.com/users'));
        
        const action = store.getActions();
        
        const expectedAction = {
            payload: {
                dataIsFetching: true
            },
            type: _TYPE.DATA_IS_FETCHING,
        };

        expect(action[0]).toEqual(expectedAction);
    });    
})