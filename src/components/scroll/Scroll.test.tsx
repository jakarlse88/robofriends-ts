import { shallow } from "enzyme";
import Scroll from './Scroll';
import * as React from 'react';

describe('Scroll component', () => {
    it('expects to render the Scroll component', () => {
        expect(shallow(<Scroll />)).toMatchSnapshot();
    })
});