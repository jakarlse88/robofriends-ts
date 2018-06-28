import { shallow } from 'enzyme';
import MainPage from './MainPage';

import * as React from 'react';

interface IRobots {
    id: number,
    name: string,
    username: string,
    email: string
};

let wrapper: any;
beforeEach(() => {
    const mockProps = {
        query: '',
        robots: [],
    };
    wrapper = shallow(<MainPage {...mockProps}/>);
})

describe('MainPage component', () => {
    it('successfully renders the MainPage component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('filters robots correctly', () => {
        const mockRobots: IRobots[] = [
                {
                    email: 'john@gmail.com',
                    id: 3,
                    name: 'John',
                    username: 'johnjohn',
                },
            ];

            const query: string = 'a';

        const wrapper2: any = shallow(
            <MainPage 
                robots={mockRobots}
                query={query}
            />
        );
        expect(wrapper2.instance().filterRobots([])).toEqual([]);
        expect(wrapper2.instance().filterRobots(mockRobots)).toEqual([]);
    });
})