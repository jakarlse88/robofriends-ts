import { shallow } from 'enzyme';
import CardList from './CardList';

import * as React from 'react';

describe('CardList component', () => {
    it('expects to render the CardList component', () => {
        const mockRobots = [
            {
                email: 'jon@gmail.com',
                id: 1,
                name: 'Jon Snow',
                username: 'JonJon',
            }
        ];

        expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
    })
})