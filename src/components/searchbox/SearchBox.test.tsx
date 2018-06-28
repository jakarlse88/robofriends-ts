import { shallow } from "enzyme";
import SearchBox from './SearchBox';
import * as React from 'react';


describe('SearchBox component', () => {
    it('expects to render the SearchBox component', () => {
        const mockSearchChange = jest.fn();
        expect(shallow(<SearchBox searchChange={mockSearchChange} />)).toMatchSnapshot();
    });
});