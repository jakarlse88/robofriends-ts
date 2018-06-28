import { shallow } from "enzyme";
import SearchBox from './SearchBox';
import * as React from 'react';

describe('SearchBox component', () => {
    it('expects to render the SearchBox component', () => {
        expect(shallow(<SearchBox />)).toMatchSnapshot();
    })
});